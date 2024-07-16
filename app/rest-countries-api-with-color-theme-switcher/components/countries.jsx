'use client'

import useSWR from 'swr'
import Country from './country'
import { useEffect, useState } from 'react'

export default function Countries({ search, region }) {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,region,flags,population,capital&region=Asia'
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
      <section className="flex flex-wrap gap-10 xl:gap-16 justify-around p-5 my-4">
        {filteredCountries.map(country => (
          <Country key={country?.name?.common} country={country} />
        ))}
      </section>
    </>
  )
}
