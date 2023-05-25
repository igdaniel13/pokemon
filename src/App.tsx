import { GoogleOAuthProvider } from "@react-oauth/google";
import {lazy, useState} from 'react';
import {AxiosResponse } from 'axios'

const Login = lazy( () => import( "./components/auth/Login"));
const RootLayout = lazy(()=> import( "./components/layouts/RootLayout"));

const clientId = '1089195485936-5qimadg7tq24rp9bl3bkqs5ssp9vihu7.apps.googleusercontent.com'

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

function App() {
  const [user, setUser] = useState<AxiosResponse<DataType>>()

  const handleUser = (obj: AxiosResponse<DataType>) => {
    setUser(obj)
  }

  console.log(user)

  if(!user)
     return (
      <>
        <GoogleOAuthProvider clientId={clientId}>
          <Login handleUser={handleUser} /> 
        </GoogleOAuthProvider>
      </>
    )


  return (
    <div>
      <RootLayout />

      <h1>
        {user.data.name}
      </h1>
    </div>
  )
}

export default App