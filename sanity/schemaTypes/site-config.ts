// https://www.sanity.io/guides/creating-navigation-schema

import { Settings2 } from "lucide-react";
import { defineType } from "sanity";

export const siteConfigType = defineType({
    name: 'siteConfig',
    type: 'document',
    title: 'Site Settings',
    icon: Settings2,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: "note",
            type: "text"
        },
        {
            name: "about",
            type: "object",
            fields: [
                {
                    name: "title",
                    type: "string",
                },
                {
                    name: "description",
                    type: "text",
                }
            ]
        },
        {
            name: "projects",
            type: "array",
            of: [
                {
                    name: "project",
                    type: "object",
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                        },
                        {
                            name: "description",
                            type: "text",
                        },
                        {
                            name: "href",
                            type: "url"
                        },
                        {
                            name: "date",
                            type: "date"
                        }
                    ]
                },
            ],
        },
        {
            name: "contact",
            type: "object",
            fields: [
                {
                    name: "text",
                    type: "string",
                },
                {
                    name: "email",
                    type: "email",
                }
            ]
        }
    ]
})