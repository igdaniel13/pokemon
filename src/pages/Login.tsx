import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import logo from '../assets/pokemon-logo-png-0.png'
const Login = () => {




    return (
    <div className="w-6/12 pb-4 m-auto my-10 shadow-lg col-auto rounded-lg">
      
        <img src={logo} alt="logo" className='h-250px w-96 m-auto'/>

        <div className=" px-6 my-5 rounded-lg">
          <h3 className='text-2xl text-black font-semibold  '>Ready to take the next step?</h3>
          <p className='my-3 text-gray-700 '>create an account or sign in with any of the providers</p>

          <p className='text-gray-700 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quo. Incidunt delectus inventore laborum sunt? Odio sed autem officia tempore iure laudantium?</p>
        </div>

        <button className='w-60 xl:w-96  xl:text-2xl m-auto p-3 font-bold flex justify-evenly items-center rounded-lg border border-gray-700'><FcGoogle /> Continue with Google </button>
          
        <button className='w-60 xl:w-96  xl:text-2xl m-auto my-3 p-3 font-bold flex justify-evenly items-center rounded-lg border border-gray-700'><AiFillFacebook className='text-blue-600' /> Continue with Facebook </button> 
  

      </div>
  )
}

export default Login