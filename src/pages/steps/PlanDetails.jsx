import React from 'react'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import CreatableSelect from 'react-select/creatable';

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

  //county list
  const countryList = [
    { value: 1, label: 'India' },
    { value: 2, label: 'USA' },
    { value: 3, label: 'UK' },
    { value: 4, label: 'Canada' },
    { value: 5, label: 'Australia' },
    { value: 6, label: 'New Zealand' },
    { value: 7, label: 'Singapore' },
    { value: 8, label: 'Malaysia' },
    { value: 9, label: 'Sri Lanka' },
    { value: 10, label: 'Bangladesh' },
    { value: 11, label: 'Nepal' },
    { value: 12, label: 'Pakistan' },
    { value: 13, label: 'Bhutan' },
    { value: 14, label: 'Afghanistan' },
    { value: 15, label: 'Austria' },
    { value: 16, label: 'Belgium' },
    { value: 17, label: 'Bulgaria' },
    { value: 18, label: 'Cyprus' },
    { value: 19, label: 'Czech Republic' },
    { value: 20, label: 'Denmark' },
    { value: 21, label: 'Estonia' },
    { value: 22, label: 'Finland' },
    { value: 23, label: 'France' },
    { value: 24, label: 'Germany' },
    { value: 25, label: 'Greece' },
    { value: 26, label: 'Hungary' },
    { value: 27, label: 'Ireland' },
    { value: 28, label: 'Italy' },
    { value: 29, label: 'Latvia' },
    { value: 30, label: 'Lithuania' },

  ]

  //time zone list
  const timeZoneList = [
    { value: 'UTC', label: 'UTC' },
    { value: 'IST', label: 'IST' },
    { value: 'EST', label: 'EST' },
    { value: 'CST', label: 'CST' },
    { value: 'MST', label: 'MST' },
    { value: 'PST', label: 'PST' },
    { value: 'AST', label: 'AST' },
    { value: 'GMT', label: 'GMT' },
    { value: 'BST', label: 'BST' },
    { value: 'CET', label: 'CET' },
    { value: 'EET', label: 'EET' },
    { value: 'MSK', label: 'MSK' },
    { value: 'WAT', label: 'WAT' },
    { value: 'CAT', label: 'CAT' },
    { value: 'EAT', label: 'EAT' },
    { value: 'NET', label: 'NET' },
    { value: 'PLT', label: 'PLT' },
    { value: 'IST', label: 'IST' },
    { value: 'VST', label: 'VST' },
    { value: 'CTT', label: 'CTT' },
    { value: 'JST', label: 'JST' },
    { value: 'ACT', label: 'ACT' },
    { value: 'AET', label: 'AET' },
    { value: 'SST', label: 'SST' },
    { value: 'NST', label: 'NST' },
    { value: 'MIT', label: 'MIT' },
    { value: 'HST', label: 'HST' },
    { value: 'AST', label: 'AST' },
    { value: 'PNT', label: 'PNT' },
    { value: 'MST', label: 'MST' },
    { value: 'PRT', label: 'PRT' },
    { value: 'CNT', label: 'CNT' },
    { value: 'AGT', label: 'AGT' },
    { value: 'BET', label: 'BET' },
    { value: 'ART', label: 'ART' },
    { value: 'CLT', label: 'CLT' },
    { value: 'ECT', label: 'ECT' },
    { value: 'IET', label: 'IET' },
    { value: 'PST', label: 'PST' },
    { value: 'PNT', label: 'PNT' },
    { value: 'AGT', label: 'AGT' },
  ]

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
        <option value="">Choose</option>
        {timeZoneList.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
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
