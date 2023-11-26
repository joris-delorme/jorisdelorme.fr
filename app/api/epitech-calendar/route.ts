import ical from "ical-generator";
import { put } from "@vercel/blob";
import { load } from "cheerio"
import axios from "axios";
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';

interface ICalendarEvent {
    className: string
    custom_url: string
    end: string
    event_type: string
    id: number | string
    room: string
    start: string
    target: string
    teacher: string
    title: string
}

async function getCalendar(): Promise<ICalendarEvent[]> {
    const loginUrl = "https://app.edsquare.fr/users/sign_in";
    const cookieJar = new CookieJar();
    const client = wrapper(axios.create({ jar: cookieJar }));

    try {
        // Get login page for authenticity token
        let response = await client.get(loginUrl);
        const $ = load(response.data);
        const token = $('input[name="authenticity_token"]').attr('value');

        if (!token) throw new Error('No token found.')

        const payload = new URLSearchParams({
            'authenticity_token': token,
            'user[email]': process.env.EDSQUARE_EMAIL!,
            'user[password]': process.env.EDSQUARE_PASSWORD!,
            'user[remember_me]': '1'
        });

        const headers = {
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            'Content-Type': "application/x-www-form-urlencoded"
        };

        // Post request for login
        response = await client.post(loginUrl, payload, { headers: headers });

        // Get calendar data from fixed date to 30 days after today
        const calendarUrl = `https://app.edsquare.fr/apps/planning/json?start=2023-11-27T00:00:00+01:00&end=${(new Date()).getFullYear()}-${(new Date()).getMonth()}-${(new Date()).setDate((new Date).getDate()+30)}T00:00:00+01:00`;
        response = await client.get(calendarUrl, {
            headers: {
                'User-Agent': headers['User-Agent'],
                'Content-Type': "application/json"
            }
        });
        
        return response.data
    } catch (error) {
        throw new Error(`Error fetching calendar: ${error}`)
    }
}


export async function GET() {

    const data = await getCalendar()

    const calendar = ical({ name: 'Epitech' });
    

    if (!data) return ""

    data.forEach(event => {

        if (!event.title.includes('Vacances')) {
            calendar.createEvent({
                start: new Date(event.start),
                end: new Date(event.end),
                summary: event.title,
                description: `Teacher: ${event.teacher}\nRoom: ${event.room}\nLevel: ${event.target}`,
                location: event.room
            })
        }

    })
    

    const icsContent = calendar.toString()

    try {
        const { url } = await put('superhuman/epitech.ics', icsContent, { access: 'public', addRandomSuffix: false })
        console.log(url)
        return Response.json({ url })
    } catch (error) {
        console.error('Error saving to blob storage:', error)
        throw error
    }
}