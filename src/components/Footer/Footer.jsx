import React from 'react'
import logowhite from '../../assets/logo-white.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import youtubeIcon from '../../assets/icon-youtube.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import instagramIcon from '../../assets/icon-instagram.svg'

export default function Footer() {
  return (
    //
    <div className="bg-[#2D314D] py-12">
      <div className="container grid grid-cols-1 justify-items-center gap-6 text-center lg:grid-cols-12 lg:gap-0">
        <div className="flex flex-col justify-between gap-y-4 lg:col-span-3 lg:justify-self-start">
          <img src={logowhite} alt="logo-white" className="mb-7" />
          <div className="flex items-center justify-between gap-x-4 text-white">
            <img
              src={facebookIcon}
              alt="icon-facebook"
              className="cursor-pointer"
            />
            <img
              src={youtubeIcon}
              alt="icon-youtube"
              className="cursor-pointer"
            />
            <img
              src={twitterIcon}
              alt="icon-twitter"
              className="cursor-pointer"
            />
            <img
              src={pinterestIcon}
              alt="icon-pinterest"
              className="cursor-pointer"
            />
            <img
              src={instagramIcon}
              alt="icon-instagram"
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* grid grid-cols-1 gap-2 py-1 lg:grid-rows-3 text-white text-sm lg:text-left lg:justify-self-start lg:col-span-5 lg:gap-x-24 lg:grid-flow-col-dense */}
        <div className="grid grid-cols-1 gap-2 py-1 text-sm text-white lg:col-span-5 lg:grid-flow-col-dense lg:grid-rows-3 lg:justify-start lg:gap-x-24 lg:text-left">
          <a href="#" className="cursor-pointer hover:underline">
            About Us
          </a>
          <a href="#" className="cursor-pointer hover:text-green-500">
            Contact
          </a>
          <a href="#" className="cursor-pointer hover:text-green-500">
            Blog
          </a>
          <a href="#" className="cursor-pointer hover:text-green-500">
            Careers
          </a>
          <a href="#" className="cursor-pointer hover:text-green-500">
            Support
          </a>
          <a href="#" className="cursor-pointer hover:text-green-500">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-col items-center justify-between lg:col-span-4 lg:items-end lg:justify-self-end">
          <button className="rounded-full bg-green-500 bg-gradient-to-r from-green-500 to-cyan-500 px-7 py-3 text-sm font-bold text-white hover:brightness-125 focus:outline-none focus:ring lg:block">
            Request Invite
          </button>
          <p className="py-6 text-sm text-gray-400">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}
