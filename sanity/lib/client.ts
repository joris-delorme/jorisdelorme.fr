import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { QueryParams } from 'sanity';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function sanityFetch<QueryResponse>({ query, qParams = {}, tags }: { query: string; qParams?: QueryParams; tags: string[] }): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, qParams, {
        cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
        next: { tags },
    })
}