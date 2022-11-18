import React from 'react'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

const PlanDetails = ({
  school_name,
  address,
  phone,
  time_zone,
  setSchoolName,
  setAddress,
  setPhone,
  setTimeZone,
  handleSubmit,
  setCurrentStep,
  loading,
}) => {
  return (
    <>
      <TextField
        label="School Name"
        id="school_name"
        name="school_name"
        type="text"
        value={school_name}
        onChange={(e) => setSchoolName(e.target.value)}
        autoComplete="school_name"
        style={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        label="Address"
        id="address"
        name="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        autoComplete="address"
        style={{ marginBottom: '1rem' }}
        required
      />

      <TextField
        label="Phone"
        id="phone"
        name="phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        autoComplete="phone"
        style={{ marginBottom: '1rem' }}
        required
      />

      <SelectField
        className="col-span-full"
        label="Time Zone"
        id="time_zone"
        name="time_zone"
        value={time_zone}
        style={{ marginBottom: '1rem' }}
        onChange={(e) => setTimeZone(e.target.value)}
      >
        <option value="UTC">UTC</option>
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
