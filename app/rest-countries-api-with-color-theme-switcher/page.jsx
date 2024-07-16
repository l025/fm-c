import Countries from './components/countries'

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="hidden">
          Frontend Mentor - REST Countries API with color theme switcher
        </h1>
        <Countries />
      </div>
    </>
  )
}
