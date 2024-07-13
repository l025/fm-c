'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

export default function CrewContent({ data }) {
  const [current, setCurrent] = useState(null)

  useLayoutEffect(() => {
    setCurrent(data[0])
  }, [])
  return (
    <>
      <main className="flex justify-center items-end min-h-screen bg-neutral-100 ">
        <div
          className={
            'bg bg-[url("/space-tourism-website/assets/technology/background-technology-mobile.jpg")]' +
            ' md:bg-[url("/space-tourism-website/assets/technology/background-technology-tablet.jpg")]' +
            ' xl:bg-[url("/space-tourism-website/assets/technology/background-technology-desktop.jpg")]'
          }></div>
        <div className="container max-w-full xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <div className="flex flex-col md:gap-6 items-center justify-center min-h-screen xl:relative xl:justify-between xl:items-start mx-8 xl:mx-32 xl:pb-16 text-center xl:text-left">
            <h1 className="flex gap-6 my-6 w-full justify-center md:justify-start py-20 md:pt-32 xl:mt-20 xl:pb-0">
              <span className="opacity-25 font-bold md:text-[20px] xl:text-[28px]">
                03
              </span>
              <span className="h-xs uppercase">Space lunch 101</span>
            </h1>

            <div className="flex-1 flex flex-col xl:flex-row-reverse xl:gap-8 items-center w-full">
              <div className="xl:flex-1 flex justify-center xl:-mr-32">
                <div className="flex justify-center items-center w-screen  h-64 md:h-96 xl:w-full xl:h-[600px] overflow-hidden">
                  <img
                    src={
                      '/space-tourism-website/assets/' +
                      current?.images.portrait.replace('./assets/', '')
                    }
                    alt={current?.name}
                    className={'w-full xl:w-auto xl:h-full'}
                  />
                </div>
              </div>

              <div className="xl:flex-1 flex flex-col xl:flex-row xl:gap-16">
                <div className="flex flex-col my-8 xl:my-0">
                  <div className="flex justify-center xl:flex-col xl:justify-start gap-4 xl:gap-8 nav-text uppercase">
                    {data.map((item, i) => (
                      <a
                        key={item.name}
                        href={'#' + item.name}
                        className={
                          'flex items-center justify-center w-10 h-10 md:w-[56px] md:h-[56px] xl:w-20 xl:h-20 border border-secondary/25 rounded-full hover:bg-white/70' +
                          (current?.name === item.name
                            ? '  bg-white text-primary'
                            : ' ')
                        }
                        onClick={() => setCurrent(item)}>
                        <span className="h-s">{i + 1}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex flex-col h-full">
                  {current && (
                    <div className="flex flex-col gap-6 md:max-w-[57ch] xl:max-w-[56ch]">
                      <div className="mx-2 xl:mx-0 flex flex-col gap-2 md:gap-4">
                        <h2 className="h-s uppercase opacity-50">
                          THE TERMINOLOGY…
                        </h2>
                        <h3 className="h-m uppercase">{current.name}</h3>
                      </div>
                      <p className="text-secondary pb-6 xl:pb-0 xl:pt-3">
                        {current.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
