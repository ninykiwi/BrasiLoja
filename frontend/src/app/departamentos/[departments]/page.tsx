import React from 'react'

export default function Page({ params }: { params: { departments: string } }) {
  return (
    <section>
      <h1>{params.departments}</h1>

      
    </section>
  )
}
