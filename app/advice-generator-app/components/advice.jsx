'use client'

import { useEffect, useState } from 'react'

export default function Advice() {
  const [advice, setAdvice] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setAdvice(data?.slip)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  function handleGenerateAdvice() {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

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
      {advice && (
        <section className="advice-container">
          <h2>advice #{advice.id}</h2>
          <blockquote className="">{advice.advice}</blockquote>

          <img
            src="/advice-generator-app/images/pattern-divider-mobile.svg"
            alt="devider"
            className="block xl:hidden"
          />
          <img
            src="/advice-generator-app/images/pattern-divider-desktop.svg"
            alt="devider"
            className="hidden xl:block"
          />

          <button onClick={handleGenerateAdvice}>
            <img
              src="/advice-generator-app/images/icon-dice.svg"
              alt="generate"
            />
          </button>
        </section>
      )}
    </>
  )
}
