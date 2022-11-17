import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import google from '../../google.png';

const SignUp = () => {
   const [error, setError] = useState('');
   const [pass, setPass] = useState('');
   const {createUser} = useContext(AuthContext);
   
   const handleSubmit = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      if (password.length < 6) {
         setPass('Password should be 6 characters')
         return;
      }
      
      if (password !== confirm) {
         setError('Your Password did not match !!!');
         return;
      }

      createUser(email, password)
      .then(result => console.log(result.user))
      .catch(error => console.error('error', error))
      console.log(email, password, confirm);
      form.reset();
}
  
   return (
      <section className="p-6">
         <form onSubmit={handleSubmit} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-5 rounded-md drop-shadow-[-15px_15px_0_rgba(0,0,0,0.25)] bg-orange-200 ng-untouched ng-pristine ng-valid">
            <h2 className="w-full text-3xl font-bold leading-tight text-center">Sign Up</h2>
            <div>
               <label htmlFor="name" className="block mb-1 ml-1">Name</label>
               <input id="name" type="text" placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-400" />
            </div>
            <div>
               <label htmlFor="email" className="block mb-1 ml-1">Email</label>
               <input id="email" type="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-400" />
            </div>
            <div>
               <label htmlFor="password" className="block mb-1 ml-1">Password <span className='text-red-600'> {pass}</span></label>
               <input id="password" type="password" placeholder="Password" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-400" />
            </div>
            <div>
               <label htmlFor="confirm" className="block mb-1 ml-1">Confirm Password<span className='text-red-600'> {error}</span></label>
               <input id="confirm" type="password" placeholder="Confirm Password" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-400" />
            </div>
            <div>
               <button type="submit" className="w-full px-4 py-3 font-semibold text-lg rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-red-500 focus:ring-red-500 hover:ring-red-500 text-white">Sign Up</button>
            </div>
            <h5 className='text-center'>Already have an account? <Link className='text-red-500 font-bold' to='/login' >Sign In</Link></h5>
            <div className='flex justify-between items-center'>
               <hr className='w-[40%] border-black ml-3'></hr>
               <h1 className='font-bold'>Or</h1>
               <hr className='w-[40%] border-black mr-3'></hr>
            </div>
            <div>
               <button type="submit" className="w-full px-4 py-2 font-semibold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-white items-center flex justify-center focus:ring-red-500 hover:ring-red-500"><img src={google} className='h-8 mr-2' alt="" /> Continue with Google</button>
            </div>
         </form>
      </section>
   );
};

export default SignUp;