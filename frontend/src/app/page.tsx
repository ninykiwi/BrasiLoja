import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import { Metadata } from 'next';


export default async function page() {
  const client = createClient()
  const home = await client.getSingle('home')

  return <SliceZone slices={home.data.slices} components={components} />
}


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('home');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  };
}