'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

export default function CrewContent({ data }) {
  const [current, setCurrent] = useState(null)

  useLayoutEffect(() => {
    setCurrent(data[0])
  }, [])
  return (
    <>
      <div className="flex justify-center items-end min-h-screen bg-neutral-100 ">
        <div
          className={
            'bg brightness-50 bg-[url("/space-tourism-website/assets/crew/background-crew-mobile.jpg")]' +
            ' md:bg-[url("/space-tourism-website/assets/crew/background-crew-tablet.jpg")]' +
            ' xl:bg-[url("/space-tourism-website/assets/crew/background-crew-desktop.jpg")]'
          }></div>
        <div className="container ">
          <div className="flex flex-col md:gap-6 items-center justify-center min-h-screen xl:relative xl:justify-between xl:items-start mx-8 md:mx-12 xl:mx-32 xl:pb-16 text-center xl:text-left">
            <h1 className="flex gap-6 my-6 w-full justify-center md:justify-start pt-20 md:pt-32 xl:mt-20">
              <span className="opacity-25 font-bold md:text-[20px] xl:text-[28px]">
                02
              </span>
              <span className="h-xs uppercase">Meet your crew</span>
            </h1>

            <div className="flex-1 flex flex-col xl:flex-row items-center w-full">
              <div className="flex-1 flex flex-col h-full">
                {current && (
                  <div className="flex flex-col gap-6 md:max-w-[57ch] xl:max-w-[56ch] pt-10 xl:pt-0">
                    <div className="mx-2 xl:mx-0 flex flex-col gap-2 md:gap-4">
                      <h2 className="h-s uppercase opacity-50">
                        {current.role}
                      </h2>
                      <h3 className="h-m uppercase">{current.name}</h3>
                    </div>
                    <p className="text-secondary">{current.bio}</p>
                  </div>
                )}
                <div className="flex-1"></div>
                <div className="flex flex-col flex-1 my-3 xl:absolute xl:bottom-10">
                  <div className="flex justify-center xl:justify-start gap-4 xl:gap-10 mt-8 mb-6 xl:mb-10 nav-text uppercase">
                    {data.map((item, i) => (
                      <a
                        key={item.name}
                        href={'#' + item.name}
                        className={
                          'block  w-2.5 h-2.5 xl:w-4 xl:h-4 rounded-full  hover:bg-white/70' +
                          (current?.name === item.name
                            ? ' bg-white'
                            : ' bg-white/30 ')
                        }
                        onClick={() => setCurrent(item)}></a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="relative m-7 md:m-0 xl:self-center">
                  <img
                    src={
                      '/space-tourism-website/assets/crew/image-' +
                      current?.name.toLowerCase().replace(' ', '-') +
                      '.png'
                    }
                    alt="mars"
                    className={
                      'max-w-[271px]  md:max-w-[446px] xl:max-h-[734px]'
                    }
                  />
                  <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 xl:h-32 bg-gradient-to-t from-[#06070b] to-transparent rounded-t-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
