import ItemsCarousel from '@/components/ItemsCarousel'
import FullPageList from '@/containers/FullPageList'
import React from 'react'

export default function Page({ params }: { params: { departments: string } }) {
  return (
    <section>
      <FullPageList category={params.departments} />

      <ItemsCarousel tipo='VocePodeGostar' />
    </section>
  )
}
