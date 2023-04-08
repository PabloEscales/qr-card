import React from 'react'
import { useState } from 'react'

export function Card ({ qr }) {

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
        <form className='form'>
          <h1>Create your QR code</h1>
          <input style={{padding: '5px', border: 'solid 3px' , borderColor: '', borderRadius: '8px', marginRight: '6px'}}
            onChange={handleFullNameChange}
            placeholder="Full name..."
          />
          <input style={{padding: '5px', border: 'solid 3px' , borderColor: '', borderRadius: '8px', marginRight: '6px'}}
            onChange={handleRoleChange}
            placeholder="Role..."
          />
          <button style={{padding: '5px', border: 'solid 3px' , borderColor: 'orange', borderRadius: '8px'}} type='submit'>Share</button>
        </form>
      </main>

      <card className='container'>
        <h2>{fullName}</h2>
        <h3>{role}</h3>
        <img src={qr} alt="QR_Code" width='100%' />
        <p>Scan the QR code to visit my website</p>
      </card>
    </>
  )
}
