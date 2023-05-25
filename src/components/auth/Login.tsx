import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/pokemon-logo-png-0.png';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {AxiosResponse } from 'axios'

interface DataType {
  "sub"?: string,
  "name"?: string,
  "given_name"?: string,
  "family_name": string,
  "picture": string,
  "email"?: string,
  "email_verified"?: true,
  "locale"?: string
}

interface loginProps {
  handleUser: (obj: AxiosResponse<DataType>) => void
}



const Login = ({handleUser}:loginProps) => {

  const login: () => void = useGoogleLogin({

    onSuccess: async (response) => {
      try{
        const data = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            'Authorization': `Bearer ${response.access_token}`
          }
        })
        handleUser(data)
        console.log(data)
      } catch(err){
        console.log(err)
      }
    },
    
  })


    return (

      <main className='h-100vh w-100vw  flex justify-center items-center'>


        <div className=" h-100% lg:h-90% w-100% lg:w-50%  pb-4 my-10 shadow-lg rounded-lg">
        
          <img src={logo} alt="logo" className='h-250px w-60% m-auto '/>

          <div className=" px-12 my-3 rounded-lg">
            <h3 className='text-2xl text-black font-bold '>Ready to take the next step?</h3>
            <p className='my-3 text-gray-700 '>create an account or sign in with any of the providers</p>
            <p className='text-gray-700 my-4'>By creating an account or logging in, you understand and agree to our <a href='#' className='text-blue-700'>Terms</a>. You also acknowledge our <a href='#' className='text-blue-700'>Cookies</a> and <a href='#' className='text-blue-700'>Privacy</a> policies.</p>
          </div>

          <div id="use-google"></div>

          <button 
            className='w-60% md:w-50% lg:w-50%  
            md:text-2xl m-auto p-3 
            font-bold flex justify-evenly items-center 
            rounded-lg border border-gray-700'
            
            onClick={login}
          ><FcGoogle /> Continue with Google </button>
            
          <button className='w-60% md:w-50% lg:w-50%  md:text-2xl m-auto my-3 p-3 font-bold flex justify-evenly items-center rounded-lg border border-gray-700'><AiFillFacebook className='text-blue-600' /> Continue with Facebook </button> 
    

        </div>  
      </main>
  )
}

export default Login