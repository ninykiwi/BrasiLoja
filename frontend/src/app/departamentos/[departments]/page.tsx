import ItemsCarousel from '@/components/ItemsCarousel'
import ListSection from '@/containers/ListSection'
import React from 'react'

export default function Page({ params }: { params: { departments: string } }) {
  return (
    <section>
      <ListSection category={params.departments} />

      <ItemsCarousel tipo='VocePodeGostar' />
    </section>
  )
}
