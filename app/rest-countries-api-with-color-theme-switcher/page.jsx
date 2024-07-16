'use client'

import Filters from './components/filters'
import Countries from './components/countries'
import { useState } from 'react'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  return (
    <>
      <div className="container mx-auto">
        <div className="px-5 py-6">
          <Filters
            filterSearch={v => setSearch(v)}
            filterRegion={v => setRegion(v)}
          />
          <Countries search={search} region={region} />
        </div>
      </div>
    </>
  )
}
