import { Search } from '@geist-ui/icons'

export default function Filters({ filterSearch, filterRegion }) {
  return (
    <section className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-start w-full h-full my-4">
      <div className="w-full max-w-md relative drop-shadow-sm shadow rounded-md border border-content/10 overflow-hidden bg-secondary">
        <label htmlFor="search">
          <Search className="absolute left-3 top-3" color="#aaa" />
        </label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={e => filterSearch(e.target.value)}
          className="border-none focus:outline-none pl-12 p-3 w-full bg-secondary"
          placeholder="Search for a country..."
        />
      </div>

      <div className="relative drop-shadow-sm shadow rounded-md border border-content/10 overflow-hidden pr-2 bg-secondary">
        <select
          name="region"
          onChange={e => filterRegion(e.target.value)}
          className="p-3 border-none focus:outline-none bg-secondary">
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}
