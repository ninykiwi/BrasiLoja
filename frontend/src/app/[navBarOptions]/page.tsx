import React from 'react'
import TagFilter from '@/components/TagFilter'
import ListSection from '@/containers/ListSection'

export default function navBarOptions({ params }: { params: { navBarOptions: string } }) {
  return (
    <section className='flex flex-col'>
      <h2> {params.navBarOptions} </h2>

      <div className='flex flex-col lg:flex-row lg:gap-[131px]'>
        <TagFilter />

        <ListSection />
      </div>

    </section>
  )
}
