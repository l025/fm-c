'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft } from '@geist-ui/icons'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function CountryPage({ params }) {
  const [country, setCountry] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/name/' + decodeURI(params.name)
        )
        const data = await response.json()
        setCountry(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (error)
    return (
      <div className="country-detail-page container mx-auto text-base py-16">
        failed to load
      </div>
    )
  if (isLoading)
    return (
      <div className="country-detail-page container mx-auto text-base py-16">
        loading...
      </div>
    )

  console.log(country)
  return (
    <>
      <div className="country-detail-page container mx-auto text-base">
        <div className="flex flex-col items-start gap-12 px-5 py-6">
          <Link
            href={'/rest-countries-api-with-color-theme-switcher/'}
            className="flex gap-2 items-center shadow rounded-md px-4 py-2 text-sm bg-secondary">
            <ArrowLeft className="h-5" /> <span>Back</span>
          </Link>

          {country && (
            <div className="w-full flex flex-col lg:flex-row gap-16 justify-start items-start">
              <img
                src={country[0].flags.png}
                alt={country[0].name.common}
                className="w-full max-w-md h-auto"
              />
              <div className="flex flex-col gap-8 items-start">
                <h1 className="text-2xl font-bold">{country[0].name.common}</h1>

                <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-16">
                  <div className="flex flex-col gap-2">
                    <div>
                      <span className="font-bold">Native Name: </span>
                      {country[0].name?.nativeName?.eng?.common ||
                        country[0].name.common}
                    </div>
                    <div>
                      <span className="font-bold">Population: </span>
                      {country[0].population}
                    </div>
                    <div>
                      <span className="font-bold">Region: </span>
                      {country[0].region}
                    </div>
                    <div>
                      <span className="font-bold">Subregion: </span>
                      {country[0].subregion}
                    </div>
                    <div>
                      <span className="font-bold">Capital: </span>
                      {country[0].capital}
                    </div>
                  </div>

                  <div>
                    <div>
                      <span className="font-bold">Top Level Domain: </span>
                      {country[0].tld.join(', ')}
                    </div>
                    <div>
                      <span className="font-bold">Currencies: </span>
                      {Object.values(country[0].currencies).map(c => (
                        <span key={c.name} className="inline-block ml-1">
                          {c.name}
                        </span>
                      ))}
                    </div>
                    <div>
                      <span className="font-bold">Languages: </span>
                      {Object.values(country[0].languages).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
                  <span className="font-bold text-lg">Border Countries:</span>
                  <div className="flex gap-3 my-2">
                    {country[0]?.borders?.map(b => (
                      <span
                        key={b}
                        className="px-5 py-1.5 shadow rounded-sm bg-secondary text-sm">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
