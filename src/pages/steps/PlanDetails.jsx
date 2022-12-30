import React, { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import Select from 'react-select'

const PlanDetails = ({
  school_name,
  address,
  phone,
  time_zone,
  country,
  setSchoolName,
  setAddress,
  setPhone,
  setTimezoneValue,
  handleSubmit,
  setCurrentStep,
  setCountry,
  loading,
}) => {
  //Get timezone list from open api
  const [timezones, setTimezones] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch(
      'https://app.stms.one/api_stms_saas/api/v1/admin_panel/countries/?limit=300'
    )
      .then((res) => res.json())
      .then((data) => {
        const countries = data?.data.results?.map((country) => {
          return {
            value: country.id,
            label: country.name,
          }
        })
        setCountries(countries)
      })
  }, [])

  useEffect(() => {
    if (!country) return
    fetch(
      `https://app.stms.one/api_stms_saas/api/v1/admin_panel/country/${country}/timezones/?limit=300`
    )
      .then((res) => res.json())
      .then((data) => {
        const timezones = data?.result?.map((timezone) => {
          return {
            value: timezone,
            label: timezone,
          }
        })
        setTimezones(timezones)
      })
  }, [country])


  return (
    <>
      <TextField
        label="Academy Name"
        id="school_name"
        name="school_name"
        type="text"
        value={school_name}
        onChange={(e) => setSchoolName(e.target.value)}
        autoComplete="school_name"
        style={{ marginBottom: '.6rem' }}
        required
      />
      <TextField
        label="Academy Address"
        id="address"
        name="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        autoComplete="address"
        style={{ marginBottom: '.6rem' }}
        required
      />

      <TextField
        label="Academy Phone"
        id="phone"
        name="phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        autoComplete="phone"
        onKeyPress={(e) => {
          if (e.target.value.length > 12) {
            e.preventDefault()
          } else if (/[a-zA-Z]/.test(e.key)) {
            e.preventDefault()
          }
        }}
        inputProps={{ maxLength: 12 }}
        style={{ marginBottom: '.6rem' }}
        required
      />
      <div style={{ marginBottom: '.6rem' }}>
        <label
          htmlFor="country"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <Select
          className="col-span-full"
          label="Country"
          id="country"
          name="country"
          defaultValue={country}
          isSearchable
          options={countries}
          onChange={(value) => setCountry(value.value)}
        />
      </div>
      <div style={{ marginBottom: '.6rem' }}>
        <label
          htmlFor="time_zone"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Time Zone
        </label>
        <Select
          className="col-span-full"
          label="Time Zone"
          id="time_zone"
          name="time_zone"
          defaultValue={time_zone}
          isSearchable
          options={timezones}
          onChange={(value) => setTimezoneValue(value.value)}
        />
      </div>
      <div className="col-span-full mt-10">
        <Button
          onClick={(e) => setCurrentStep(1)}
          variant="solid"
          color="gray"
          className="mb-5 w-full"
        >
          <span className="mr-5">
            <span aria-hidden="true">&larr;</span> Go Back
          </span>
        </Button>
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="solid"
          style={{ backgroundColor: '#333333' }}
          className="w-full"
          loading={loading}
        >
          <span>
            Sign up <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </>
  )
}

export default PlanDetails
