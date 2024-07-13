'use client'

export default function HomePage() {
  return (
    <>
      <main className="flex justify-center items-end min-h-screen bg-neutral-100 ">
        <div
          className={
            'bg bg-[url("/space-tourism-website/assets/home/background-home-mobile.jpg")]' +
            ' md:bg-[url("/space-tourism-website/assets/home/background-home-tablet.jpg")]' +
            ' xl:bg-[url("/space-tourism-website/assets/home/background-home-desktop.jpg")]'
          }></div>
        <div className="container pt-32 md:pt-40 xl:py-6 relative">
          <div className="flex flex-col xl:flex-row gap-16 items-center justify-center xl:justify-between mb-32 mx-8 md:mx-12 xl:mx-32 text-center xl:text-left">
            <div className="flex-1 flex flex-col text-secondary">
              <h1 className="flex flex-col">
                <span className="h-xs uppercase">
                  So, you want to travel to
                </span>
                <span className="h-xl uppercase text-white">Space</span>
              </h1>
              <p className="max-w-[53ch]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center xl:justify-end py-5 xl:py-auto xl:self-end">
              <button className="h-s text-primary uppercase bg-white rounded-full flex justify-center items-center w-[144px] h-[144px] md:w-[272px] md:h-[272px] hover:outline-white/10 outline outline-[88px] outline-white/0 transition-all duration-[600ms] hover:text-primary/50	">
                explore
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
