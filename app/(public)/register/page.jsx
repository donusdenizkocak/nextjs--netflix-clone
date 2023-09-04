"use client";

import React from 'react'

 const Register= () => {
const [firstName, setFirstName] = useState()
const [lastName, setLastName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

//*birleştirilmis state
// const [info, setInfo] = useState({
//     firstName : '',
//     lastName :'',
//     email :'',
//     password: ''
// })
// const { email, password, firstName, lastName } = info;


  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bgg-no-repeat bg-center bg-fixed bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
            <div className="flex justify-center">
              <div className='bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                <form onSubmit={handleSubmit}>
                  <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                    Sign Up
                  </h2>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                    name='floating_text'
                    className='peer'
                    type='text'
                    required
                    placeholder=' '
                    onChange={(e)=> setFirstName(e.target.value)} 
                     />
                     <label htmlFor='floating_text'>First Name</label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                    name='floating_text'
                    className='peer'
                    type='text'
                    required
                    placeholder=' '
                    onChange={(e)=> setLastName(e.target.value)} 
                     />
                     <label htmlFor='floating_text'>Last Name</label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                    name='floating_email'
                    className='peer'
                    type='email'
                    required
                    placeholder=' '
                    onChange={(e)=> setEmail(e.target.value)} 
                     />
                     <label htmlFor='floating_text'>Email</label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                    name='floating_password'
                    className='peer'
                    type='password'
                    required
                    placeholder=' '
                    onChange={(e)=> setPassword(e.target.value)} 
                     />
                     <label htmlFor='floating_text'>Password</label>
                  </div>
                  <button className="btn-danger" type="submit">
                    Register
                  </button>
                   <button
                    className="flex justify-between text-center items-center btn-danger"
                    type="button"
                   
                   >
                    Continue with Google
                    <GoogleIcon color="currentColor" />
                   </button>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Register;