import loginImg from "../assets/Images/Singup.jpeg"
import Template from "../components/core/Template"

function Login() {
  return (
    <Template
      title="Enter Your details here"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login