'use client'

import Country from './country'
import { useEffect, useState } from 'react'
import Filters from './filters'

export default function Countries() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,region,flags,population,capital,cca2'
        )
        const data = await response.json()
        setCountries(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (countries.length > 0) {
      const filtered = countries.filter(
        country =>
          (search === '' ||
            country.name.common.toLowerCase().includes(search.toLowerCase())) &&
          (region === '' || country.region === region)
      )
      setFilteredCountries(filtered)
    }
  }, [countries, search, region])

  if (error)
    return (
      <div className="flex flex-wrap gap-10 xl:gap-16 justify-around p-5 my-16">
        failed to load
      </div>
    )
  if (isLoading)
    return (
      <div className="flex flex-wrap gap-10 xl:gap-16 justify-around p-5 my-16">
        loading...
      </div>
    )

  return (
    <>
      <div className="px-5 py-6">
        <Filters
          filterSearch={v => setSearch(v)}
          filterRegion={v => setRegion(v)}
        />
        <section className="flex flex-wrap gap-8 xl:gap-16 justify-around p-5 md:p-2 my-10">
          {filteredCountries.map(country => (
            <Country key={country?.name?.common} country={country} />
          ))}
        </section>
      </div>
    </>
  )
}
