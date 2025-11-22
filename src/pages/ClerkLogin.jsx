import { SignIn } from "@clerk/clerk-react"

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'> {/* height minus navbar height */}
      <SignIn signUpUrl="/register"/>
    </div>
  )
}

export default Login