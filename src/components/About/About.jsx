import React from 'react'
import icononline from '../../assets/icon-online.svg'
import iconbudgeting from '../../assets/icon-budgeting.svg'
import icononboarding from '../../assets/icon-onboarding.svg'
import iconapi from '../../assets/icon-api.svg'

export default function About() {
  return (
    <div className="my-24 bg-gray-50 px-4 text-center text-gray-400 sm:my-0 xl:text-left">
      <div className="container pt-24 text-center sm:my-20 md:px-32 lg:px-52 lg:text-left xl:pl-10">
        <h2 className="my-5 text-4xl text-slate-700">Why choose Easybank?</h2>
        <p className="text-slate-400">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p className="text-slate-400">
          Control your finances like never before.
        </p>
      </div>

      <div className="flex flex-col md:ml-20 md:flex-row md:flex-wrap md:justify-around md:gap-y-8 lg:mr-20 lg:pb-24">
        <div className="my-10 px-4 sm:m-0 sm:px-8 md:w-5/12 xl:w-80">
          <img src={icononline} alt="icon-online" className="mx-auto xl:m-0" />
          <h3 className="my-5 text-2xl text-gray-700">Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="px-4 sm:px-8 md:w-5/12 xl:w-80">
          <img
            src={iconbudgeting}
            alt="icon-budgeting"
            className="mx-auto xl:m-0"
          />
          <h3 className="my-5 text-2xl text-gray-700">Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>

        <div className="my-10 px-4 sm:m-0 sm:px-8 md:w-5/12 xl:w-80">
          <img
            src={icononboarding}
            alt="icon-onboarding"
            className="mx-auto xl:m-0"
          />
          <h3 className="my-5 text-2xl text-gray-700">Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="px-4 sm:px-8 md:w-5/12 xl:w-80">
          <img src={iconapi} alt="icon-api" className="mx-auto xl:m-0" />
          <h3 className="my-5 text-2xl text-gray-700">Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  )
}
