import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/pokemon-logo-png-0.png';
import { useEffect } from 'react';


const Login = () => {

  // const handleCallbackResponse = (response) => {
  //     console.log(response.credential)
  // }

  useEffect(() => {
      // global google

      // google.account.id.initialize({
      //   client_id: '1089195485936-5qimadg7tq24rp9bl3bkqs5ssp9vihu7.apps.googleusercontent.com',
      //   callback: handleCallbackResponse
      // });

      // google.account.id.renderButton(
      //   document.getElementById('use-google'),
      //   {theme: 'outline', size: 'large'}
      // )
    }, [])



    return (

      <main className='h-100vh bg-red-200 flex justify-center items-center'>


        <div className="w-100% h-100% lg:h-90% lg:h- lg:w-6/12 pb-4 my-10 shadow-lg rounded-lg">
        
          <img src={logo} alt="logo" className='h-250px w-96 m-auto '/>

          <div className=" px-12 my-3 rounded-lg">
            <h3 className='text-2xl text-black font-bold '>Ready to take the next step?</h3>
            <p className='my-3 text-gray-700 '>create an account or sign in with any of the providers</p>
            <p className='text-gray-700 my-4'>By creating an account or logging in, you understand and agree to our <a href='#' className='text-blue-700'>Terms</a>. You also acknowledge our <a href='#' className='text-blue-700'>Cookies</a> and <a href='#' className='text-blue-700'>Privacy</a> policies.</p>
          </div>

          <div id="use-google"></div>

          <button className='w-60 xl:w-96  xl:text-2xl m-auto p-3 font-bold flex justify-evenly items-center rounded-lg border border-gray-700'><FcGoogle /> Continue with Google </button>
            
          <button className='w-60 xl:w-96  xl:text-2xl m-auto my-3 p-3 font-bold flex justify-evenly items-center rounded-lg border border-gray-700'><AiFillFacebook className='text-blue-600' /> Continue with Facebook </button> 
    

        </div>
      </main>
  )
}

export default Login