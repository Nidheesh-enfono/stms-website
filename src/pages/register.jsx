import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'

import { AuthLayout } from '@/components/AuthLayout'
import { Logo } from '@/components/Logo'

import UserDetails from './steps/UserDetails'
import PlanDetails from './steps/PlanDetails'

// import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'

import { UseContextProvider } from '../contexts/StepperContext'

import axios from 'axios'

import toast from 'react-hot-toast'

import Router from 'next/router'

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = ['User Details', 'Plan Details']

  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  const [username, setUserName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const [school_name, setSchoolName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [time_zone, setTimezone] = useState('')
  const [last_activity_date, setLastActivityDate] = useState('')
  const [country, setCountry] = useState('')

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            username={username}
            name={name}
            email={email}
            mobile={mobile}
            password={password}
            setUserName={setUserName}
            setName={setName}
            setEmail={setEmail}
            setMobile={setMobile}
            setPassword={setPassword}
          />
        )
      case 2:
        return (
          <PlanDetails
            school_name={school_name}
            address={address}
            phone={phone}
            time_zone={time_zone}
            last_activity_date={last_activity_date}
            country={country}
            setSchoolName={setSchoolName}
            setAddress={setAddress}
            setPhone={setPhone}
            setTimezone={setTimezone}
            setLastActivityDate={setLastActivityDate}
            setCountry={setCountry}
            handleSubmit={handleSubmit}
            setCurrentStep={setCurrentStep}
            loading={loading}
          />
        )
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep

    if (username.trim() === '') {
      setErr('Username is required')
      toast('Username is required')
      return
    } else if (
      mobile.trim() === '' ||
      mobile.length < 10 ||
      mobile.length > 12
    ) {
      setErr('Username is required')
      toast('Valid mobile number is required')
      return
    } else if (
      email.trim() === '' ||
      !email.includes('@') ||
      !email.includes('.') ||
      email.length < 5 ||
      email.length > 50 ||
      email.indexOf(' ') >= 0 ||
      email.indexOf('..') >= 0 ||
      email.indexOf('@.') >= 0 ||
      email.indexOf('.@') >= 0 ||
      email.indexOf('@') !== email.lastIndexOf('@') ||
      email.indexOf('.') !== email.lastIndexOf('.')
    ) {
      setErr('Email is required')
      toast('Valid email is required')
      return
    } else if (
      password.trim() === '' ||
      password.length < 6 ||
      password.length > 20 ||
      password.indexOf(' ') >= 0 ||
      password.indexOf('..') >= 0
    ) {
      setErr('Password is required')
      toast('Password is required')
      return
    }

    direction === 'next' ? newStep++ : newStep--
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length + 1 && setCurrentStep(newStep)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let payload = {
      user: {
        username,
        name,
        email,
        mobile,
      },
      name: school_name,
      address,
      phone,
      time_zone,
      country: 1,
    }

    let error = undefined

    if (username.trim() === '') {
      error = 'Username is required'
    } else if (
      mobile.trim() === '' ||
      mobile.length < 10 ||
      mobile.length > 12
    ) {
      error = 'Valid mobile number  is required'
    } else if (
      email.trim() === '' ||
      !email.includes('@') ||
      !email.includes('.') ||
      email.length < 5 ||
      email.length > 50 ||
      email.indexOf(' ') >= 0 ||
      email.indexOf('..') >= 0 ||
      email.indexOf('@.') >= 0 ||
      email.indexOf('.@') >= 0 ||
      email.indexOf('@') !== email.lastIndexOf('@') ||
      email.indexOf('.') !== email.lastIndexOf('.')
    ) {
      error = 'Email is required'
    } else if (
      password.trim() === '' ||
      password.length < 6 ||
      password.length > 20 ||
      password.indexOf(' ') >= 0 ||
      password.indexOf('..') >= 0
    ) {
      error = 'Please provide a valid password (6-20)'
    } else if (school_name.trim() === '') {
      error = 'School name is required'
    } else if (address.trim() === '') {
      error = 'Address is required'
    } else if (phone.trim() === '') {
      error = 'Phone is required'
    }

    if (error) {
      toast.error(error)
      return
    }

    setLoading(true)

    axios
      .post(
        'https://dev.enfono.com/api_STMS_saas/api/v1/utilities/onboarding_driving_school/',
        {
          user: {
            username,
            name,
            email,
            mobile,
            password,
          },
          name: school_name,
          address,
          phone,
          time_zone: 'UTC',
          country: 1,
        }
      )
      .then(() => {
        setLoading(false)
        toast.success('Registration Successful')
        Router.push('/')
      })
      .catch((e) => {
        setLoading(false)
        const message =
          (e.response && e.response.data && e.response.data.message) ||
          e.message ||
          e.toString()
        toast.error(message.toString())
      })
  }

  return (
    <>
      <Head>
        <title>Sign Up - STMS</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>

          <div className="mt-16">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>

          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>
      </AuthLayout>
    </>
  )
}
