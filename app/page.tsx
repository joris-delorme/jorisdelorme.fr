import { SpectreDOM } from "@/components/dom/Spectre";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { OxpiumAgencyBanner, fineTuningBanner } from "@/lib/constant";
import { ArrowUpRight, ChevronDown, Github, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image";
import { z } from 'zod'
import { sanityFetch } from "@/sanity/lib/client";
import Link from "next/link";

const schema = z.object({
    title: z.string(),
    about: z.object({
        title: z.string(),
        description: z.string()
    }),
    note: z.string(),
    projects: z.array(z.object({
        title: z.string(),
        description: z.string(),
        href: z.string().url(),
        date: z.string().date()
    })),
    contact: z.object({
        text: z.string(),
        email: z.string().email()
    })
})

export default async function Home() {

    const data = await sanityFetch({
        query: `*[_type == "siteConfig"][0] {...}`,
        tags: ["siteConfig"]
    })

    const result = schema.safeParse(data)

    if (!result.success) {
        console.error(result.error)
        console.error(result.error.errors[0].path)
        return null
    }

    const home = result.data

    home.projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())


    return (
        <main className="sm:px-[5vw] px-6 min-h-screen w-screen relative overflow-x-hidden pb-10">
            <div className="h-[100svh] py-10 w-full flex justify-between gap-4 items-end">
                <h1 className="lg:text-[5vw] relative z-10 sm:text-[8vw] text-3xl font-black leading-tight">
                    {
                        home.title.split(',').map((line, index) => (
                            <span key={index} className="block group">
                                {line}
                                <span className="group-last:hidden">,</span>
                            </span>
                        ))
                    }
                </h1>
                <div className="absolute sm:max-w-sm max-w-[250px] sm:m-10 m-4 top-0 right-0">
                    <h2>Joris Delorme</h2>
                    <p className="text-muted-foreground sm:text-base text-sm">{home.note}</p>
                </div>
                <Button className="relative z-10 cursor-pointer" variant='link' size='icon' asChild>
                    <ChevronDown className="animate-bounce" size={30} />
                </Button>
                <nav className="absolute flex gap-3 top-0 z-10 right-0 px-[5vw] py-10">
                </nav>
                <SpectreDOM className="absolute top-0 left-0 h-screen w-screen" />
            </div>
            <Separator className="sm:mb-10" />
            <div className="max-w-2xl mx-auto grid gap-20 py-20">
                <section>
                    <h2 className="font-bold sm:text-3xl text-xl sm:mb-10 mb-4">{home.about.title}</h2>
                    <p className="text-muted-foreground">
                        {
                            home.about.description.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))
                        }
                    </p>
                </section>


                <section>
                    <h2 className="font-bold sm:text-3xl text-xl mb-10">Projects</h2>
                    <div className="grid gap-10">
                        {
                            home.projects.map((project, index) => (
                                <Link href={project.href} target="_blank" rel="noopener noreferrer" key={index} className="relative grid gap-2 w-full before:-inset-0 hover:before:-inset-4 before:absolute hover:before:bg-muted/50 before:-z-10 before:rounded-lg before:transition-all before:duration-300">
                                    <div className="flex justify-between">
                                        <h3>{project.title}</h3>
                                        <ArrowUpRight size={18} />
                                    </div>
                                    <p className="text-muted-foreground sm:text-base text-sm">{project.description}</p>
                                    <p className="text-xs">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </Link>
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-xl mb-2">{home.contact.text}</h2>
                    <a href={`mailto:${home.contact.email}`} className="underline">{home.contact.email}</a>
                </section>

            </div>
            <Separator className="mb-10" />
                <nav className="flex gap-3 justify-end">
                    <Button size='icon' variant='outline' asChild>
                        <a aria-label="Instagram" href="https://www.instagram.com/joris.delorme/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
                    </Button>
                    <Button size='icon' variant='outline' asChild>
                        <a aria-label="Linkedin" href="https://www.linkedin.com/in/joris-delorme-b757a5229/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                    </Button>
                    {/*<Button size='icon' variant='outline' asChild>
            <a aria-label="Twitter" href="https://twitter.com/joris_delorme_" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>
          </Button>*/}
                    <Button size='icon' variant='outline' asChild>
                        <a aria-label="Github" href="https://github.com/joris-delorme" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                    </Button>
                </nav>
        </main>
    )
}
