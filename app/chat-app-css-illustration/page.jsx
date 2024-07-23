'use client'

import gsap from 'gsap'
import { useLayoutEffect } from 'react'

export default function HomePage() {
  useLayoutEffect(() => {
    var items = document.querySelectorAll('.fade-item')
    for (let i = 0; i < items.length; ++i) {
      fadeIn(items[i], i * 200)
    }
    function fadeIn(item, delay) {
      setTimeout(() => {
        item.classList.add('fadein')
      }, delay)
    }

    // Tilt effect
    const el = document.querySelector('.mobile-wrapper')
    const elShadow = document.querySelector('.mobile-shadow')

    const elXPos = el.getBoundingClientRect().left
    const elYPos = el.getBoundingClientRect().top
    const width = el.getBoundingClientRect().width
    const height = el.getBoundingClientRect().height

    gsap.set(el, {
      transformPerspective: 900,
      transformOrigin: 'center center -10',
    })
    gsap.set(elShadow, {
      transformPerspective: 900,
      transformOrigin: 'center center -10',
    })

    el.parentElement.addEventListener('mousemove', e => {
      const elRelativeXPos = e.pageX - elXPos
      const elRelativeYPos = e.pageY - elYPos
      const xPos = (elRelativeXPos / width - 0.5) * 4
      const yPos = (elRelativeYPos / height - 0.5) * 4
      const rotationXValue = -7 * yPos
      const rotationYValue = 7 * xPos

      gsap.to(el, {
        rotationY: rotationYValue,
        rotationX: rotationXValue,
      })
      gsap.to(elShadow, {
        rotationY: rotationYValue * -1,
        rotationX: rotationXValue,
      })
    })
    el.parentElement.addEventListener('mouseleave', e => {
      gsap.to(el, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power4.out',
      })
      gsap.to(elShadow, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power4.out',
      })
    })
  }, [])
  return (
    <>
      <div className="relative min-h-screen min-w-screen">
        <div className="bg-shape-1"></div>
        <div className="bg-shape-2"></div>

        <div className="flex flex-col xl:flex-row items-center gap-1 xl:gap-24 justify-center min-h-screen min-w-screen relative z-10 xl:pl-16">
          <div className="hidden xl:block"></div>
          <div className="hidden 2xl:block"></div>
          <div className="relative flex justify-center items-center p-5 -mt-8 xl:mt-0">
            <div className="mobile-shadow"></div>
            <div className="mobile-wrapper m-0">
              <div className="top"></div>
              <div className="contact-info">
                <button className="arrow-left ml-2"></button>
                <img
                  src="/chat-app-css-illustration/images/avatar.jpg"
                  alt="avatar"
                />
                <div className="flex-1 flex flex-col gap-1 text-white">
                  <h2 className=" font-semibold text-[1.1rem]">Samuel Green</h2>
                  <span className="opacity-50">Available to Walk</span>
                </div>
                <button className="text-white text-lg rotate-90">...</button>
              </div>
              <div className="content">
                <div className="msg-wrapper">
                  <div className="chat-left fade-item">
                    That sounds great. I’d be happy with that.
                  </div>
                  <div className="chat-left fade-item">
                    Could you send over some pictures of your dog, please?
                  </div>

                  <div className="chat-right-album-wrapper mt-2">
                    <img
                      src="/chat-app-css-illustration/images/dog-image-1.jpg"
                      alt="dog-1"
                      className="fade-item"
                    />
                    <img
                      src="/chat-app-css-illustration/images/dog-image-2.jpg"
                      alt="dog-2"
                      className="fade-item"
                    />
                    <img
                      src="/chat-app-css-illustration/images/dog-image-3.jpg"
                      alt="dog-3"
                      className="fade-item"
                    />
                  </div>

                  <div className="chat-right fade-item ">
                    Here are a few pictures. She’s a happy girl!
                  </div>
                  <div className="chat-right fade-item ">Can you make it?</div>

                  <div className="chat-left fade-item mt-2">
                    She looks so happy! The time we discussed works. How long
                    shall I take her out for?
                  </div>

                  <div className="chat-left-time fade-item">
                    <span className="radio"></span>
                    <span className="desc">40 minute walk</span>
                    <b className="price">$29</b>
                  </div>
                  <div className="chat-left-time fade-item">
                    <span className="radio"></span>
                    <span className="desc">1 hour walk</span>
                    <b className="price">$49</b>
                  </div>
                </div>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="msg"
                    id="msg"
                    placeholder="Type a message..."
                  />
                  <button type="submit" className="arrow-right"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center xl:text-left -mt-24 xl:mt-0">
            <h1 className="text-3xl xl:text-[55px] font-medium leading-loose pb-1">
              Simple booking
            </h1>
            <p className="text-base xl:text-lg leading-relaxed w-[30ch] xl:w-[45ch] pb-16">
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
