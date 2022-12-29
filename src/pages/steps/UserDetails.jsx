import React from 'react'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

const UserDetails = ({
  username,
  name,
  mobile,
  email,
  password,
  setUserName,
  setName,
  setEmail,
  setMobile,
  setPassword,
}) => {
  return (
    <div className="gap-y-8 gap-x-6 sm:grid-cols-2">
      <TextField
        label="Username"
        id="User_name"
        name="user_name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        autoComplete="user-name"
        style={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        label="Name"
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
        style={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        className="col-span-full"
        label="Mobile"
        id="mobile"
        name="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        type="number"
        autoComplete="mobile"

        //validate mobile
        onKeyPress={(e) => {
          if (e.target.value.length > 12) {
            e.preventDefault()
          } else if(/[a-zA-Z]/.test(e.key)){
            e.preventDefault()
          }          
        }}
        inputProps={{ maxLength: 12 }}
        style={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        className="col-span-full"
        label="Email address"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        autoComplete="email"
        style={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        className="col-span-full"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        style={{ marginBottom: '1rem' }}
        required
      />
    </div>
  )
}

export default UserDetails
