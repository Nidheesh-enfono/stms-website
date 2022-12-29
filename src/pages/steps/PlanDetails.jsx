import React, { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import CreatableSelect from 'react-select/creatable'

const PlanDetails = ({
  school_name,
  address,
  phone,
  time_zone,
  country,
  setSchoolName,
  setAddress,
  setPhone,
  setTimeZone,
  handleSubmit,
  setCurrentStep,
  setCountry,
  loading,
}) => {
  //Get timezone list from open api
  const [timezones, setTimezones] = useState([])
  const [countries, setCountries] = useState([])
  const [lastActivityDate, setLastActivityDate] = useState('')
  const [lastActivityDateError, setLastActivityDateError] = useState(false)

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        const countries = data.map((country) => {
          return {
            value: country.name,
            label: country.name,
          }
        })
        setCountries(countries)
      })
  }, [])

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone')
      .then((res) => res.json())
      .then((data) => {
        const timezones = data.map((timezone) => {
          return {
            value: timezone,
            label: timezone,
          }
        })
        setTimezones(timezones)
      })
  }, [])

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
      <SelectField
        className="col-span-full"
        label="Time Zone"
        id="time_zone"
        name="time_zone"
        value={time_zone}
        style={{ marginBottom: '.6rem' }}
        onChange={(e) => setTimeZone(e.target.value)}
      >
        <option value="UTC">UTC</option>

        {/* {timeZoneList.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))} */}
      </SelectField>

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
