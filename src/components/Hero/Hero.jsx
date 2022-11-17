import React from 'react'
import imagemockups from '../../assets/image-mockups.png'
import introdesktop from '../../assets/bg-intro-desktop.svg'

export default function Hero() {
  return (
    <div className="mb-14 flex flex-col-reverse items-center justify-between bg-white md:mb-0 md:h-4/5 md:flex-row md:bg-gray-50">
      <div className="container mx-auto max-w-xl px-5 py-20 text-center md:text-left">
        <h1 className="mb-6 text-5xl text-slate-800 lg:text-6xl">
          Next generation digital banking
        </h1>
        <p className="pt-3 pb-6 text-lg text-slate-400 md:text-left ">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="rounded-full bg-green-500 bg-gradient-to-r from-green-500 to-cyan-500 px-7 py-3 text-sm font-bold text-white hover:brightness-125 focus:outline-none focus:ring lg:block">
          Request Invite
        </button>
      </div>

      <div
        className="md:h-full md:w-1/2"
        style={{ backgroundImage: `url(${introdesktop})` }}
      >
        <img
          src={imagemockups}
          alt="image-mockups"
          className="z-20 md:ml-52 md:max-w-2xl"
        />
      </div>
    </div>
  )
}
