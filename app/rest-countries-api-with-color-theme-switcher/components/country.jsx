import Link from 'next/link'

export default function Country({ country }) {
  return (
    <Link
      className="w-full md:max-w-80 lg:max-w-72 xl:max-w-64"
      href={`/rest-countries-api-with-color-theme-switcher/country/${country?.name?.common.toLowerCase()}`}>
      <div className=" flex flex-col shadow-sm rounded-md border border-content/10 bg-secondary pb-3">
        <img
          src={country?.flags?.png}
          alt={country?.name?.common}
          className="rounded-t-md"
        />
        <div className="flex flex-col py-5 px-6 gap-1">
          <h2 className="mb-1.5 text-lg font-bold">{country?.name?.common}</h2>
          <div>
            <b>Population: </b>
            {country?.population}
          </div>
          <div>
            <b>Region: </b>
            {country?.region}
          </div>
          <div>
            <b>Capital: </b>
            {country?.capital}
          </div>
        </div>
      </div>
    </Link>
  )
}
