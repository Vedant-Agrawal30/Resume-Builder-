// import React, { memo } from 'react';
// import { Lock, Mail, User2Icon } from 'lucide-react';


// const Login = () => {

//   const query = new URLSearchParams(window.location.search)
//   const urlState = query.get('state')

//   const [state, setState] = React.useState(urlState || "login")

//   const [formData, setFormData] = React.useState({
//     name: '',
//     email: '',
//     password: ''
//   })

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   return (
//     <div className='flex items-center justify-center min-h-screen bg-gray-50'>

//       <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
//         <h1 className="text-gray-900 text-3xl mt-10 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
//         <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
//         {state !== "login" && (
//           <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//             <User2Icon size={16} color='#6B7280' />
//             <input type="text" name="name" placeholder="Name" className="border-none outline-none ring-0" value={formData.name} onChange={handleChange} required />
//           </div>
//         )}
//         <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <Mail size={13} color='#6B7280' />
//           <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <Lock size={13} color='#6B7280' />
//           <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0" value={formData.password} onChange={handleChange} required />
//         </div>
//         <div className="mt-4 text-left text-green-500">
//           <button className="text-sm" type="reset">Forget password?</button>
//         </div>
//         <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity">
//           {state === "login" ? "Login" : "Sign up"}
//         </button>
//         <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-500 text-sm mt-3 mb-11">{state === "login" ? "Don't have an account?" : "Already have an account?"} <a href="#" className="text-green-500 hover:underline">click here</a></p>
//       </form>
//     </div>
//   );
// };

// export default memo(Login);


import React, { memo, useContext, useEffect, useState } from 'react';
import { Lock, Mail, User2Icon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import api from '../configs/api';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/authSlice';
import toast from 'react-hot-toast';



const Login = () => {
  const dispatch = useDispatch()
  // React Router hook for managing URL query params
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current ?state= value from URL
  const urlState = searchParams.get('state') || 'login';
  const [state, setState] = useState(urlState);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Sync React state when URL query changes (e.g., user manually edits URL)
  useEffect(() => {
    const current = searchParams.get('state') || 'login';
    setState(current);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await api.post(`/api/users/${state}`, formData)
        dispatch(login(data))
        localStorage.setItem('token',data.token)
        toast.success(data.message)
    } catch (error) {
      toast(error?.response?.data?.message || error.message)
    }
    // handle login/register API calls here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle login/register and update URL
  const toggleState = () => {
    const newState = state === 'login' ? 'register' : 'login';
    setState(newState);
    setSearchParams({ state: newState }); // updates URL without reload
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <form
        onSubmit={handleSubmit}
        className='sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white'
      >
        <h1 className='text-gray-900 text-3xl mt-10 font-medium'>
          {state === 'login' ? 'Login' : 'Sign up'}
        </h1>
        <p className='text-gray-500 text-sm mt-2'>
          Please {state === 'login' ? 'login' : 'sign up'} to continue
        </p>

        {state !== 'login' && (
          <div className='flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2'>
            <User2Icon size={16} color='#6B7280' />
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='border-none outline-none ring-0 w-full'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className='flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2'>
          <Mail size={13} color='#6B7280' />
          <input
            type='email'
            name='email'
            placeholder='Email id'
            className='border-none outline-none ring-0 w-full'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2'>
          <Lock size={13} color='#6B7280' />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='border-none outline-none ring-0 w-full'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mt-4 text-left text-green-500'>
          <button className='text-sm' type='reset'>
            Forget password?
          </button>
        </div>

        <button
          type='submit'
          className='mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity'
        >
          {state === 'login' ? 'Login' : 'Sign up'}
        </button>

        <p className='text-gray-500 text-sm mt-3 mb-11'>
          {state === 'login'
            ? "Don't have an account?"
            : 'Already have an account?'}
          <button
            type='button'
            onClick={toggleState}
            className='text-green-500 hover:underline ml-1'
          >
            click here
          </button>
        </p>
      </form>
    </div>
  );
};

export default memo(Login);
