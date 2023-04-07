import React from 'react'
import { useState } from 'react'

const Card = ({ qr }) => {

  const [fullName, setFullName] = useState('Pablo Escales');
  const [role, setRole] = useState('Frontend Web Developer');

  const handleRoleChange = (event) => {
    const newRole = event.target.value
    setRole(newRole)
  }

  const handleFullNameChange = (event) => {
    const newFullName = event.target.value
    setFullName(newFullName)
  }


  return (
    <>
      <main className='main'>
          <form className='form' >
            <h1>Create your QR code</h1>
            <input
              onChange={handleFullNameChange}
              // value={search}
              name='query'
              placeholder="Full name..."
            />
            <input
              onChange={handleRoleChange}
              // value={search}
              name='query'
              placeholder="Role..."
            />
            <button type='submit'>Save</button>
        </form>
      </main>

        <div className='container'>
            <h2>{fullName}</h2>
            <h3>{role}</h3>
            <img src={qr} alt="QR_Code" width='100%' />
            <p>Scan the QR code to visit my website</p>
        </div>
    </>
  )
}

export default Card
