'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

export default function DestinationContent({ data }) {
  const [current, setCurrent] = useState(null)

  useLayoutEffect(() => {
    setCurrent(data[0])
  }, [])
  return (
    <>
      <main
        className={
          'flex justify-center items-start md:items-center min-h-screen bg-neutral-100 bg-cover' +
          ' bg-[url("/space-tourism-website/assets/destination/background-destination-mobile.jpg")]' +
          ' md:bg-[url("/space-tourism-website/assets/destination/background-destination-tablet.jpg")]' +
          ' xl:bg-[url("/space-tourism-website/assets/destination/background-destination-desktop.jpg")]'
        }>
        <div className="container pt-20 md:py-36">
          <div className="flex flex-col xl:flex-row flex-wrap xl:gap-6 items-center justify-center xl:justify-between mx-8 md:mx-12 xl:mx-32 text-center xl:text-left">
            <h1 className="flex gap-6 my-6 w-full justify-center md:justify-start">
              <span className="opacity-25 font-bold">01</span>
              <span className="h-xs uppercase">pick your destination</span>
            </h1>

            <img
              src={
                '/space-tourism-website/assets/destination/image-' +
                current?.name.toLowerCase() +
                '.png'
              }
              alt="mars"
              className={
                'w-[150px] h-[150px] md:w-[300px] md:h-[300px] xl:w-[480px] xl:h-[480px] m-7'
              }
            />

            <div className="flex flex-col flex-1 xl:pl-12">
              <div className="flex justify-center xl:justify-start gap-8 mt-8 mb-6 xl:mb-10 nav-text uppercase">
                {data.map((item, i) => (
                  <a
                    key={item.name}
                    href={'#' + item.name}
                    className={
                      'py-4 border-b-[3px]  hover:border-white/50' +
                      (current?.name === item.name
                        ? ' border-white'
                        : ' border-white/0 text-secondary')
                    }
                    onClick={() => setCurrent(item)}>
                    {item.name}
                  </a>
                ))}
              </div>

              {current && (
                <div className="md:max-w-[57ch] xl:max-w-[45ch]">
                  <div className="mx-2 flex flex-col gap-4">
                    <h2 className="h-l uppercase">{current.name}</h2>
                    <p className="text-secondary ">{current.description}</p>
                  </div>
                  <hr className="w-full my-6 border-white/25" />
                  <div className="flex flex-col md:flex-row md:justify-around xl:justify-start gap-6 uppercase">
                    <div className="flex-1 flex flex-col gap-3">
                      <span className="sh-s text-secondary ">
                        AVG. DISTANCE
                      </span>
                      <p className="sh-l">{current.distance}</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-3">
                      <span className="sh-s text-secondary">
                        Est. travel time
                      </span>
                      <p className="sh-l">{current.travel}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
