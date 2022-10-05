import "./SignIn.css";
import {FaFireAlt} from "react-icons/fa";
import {FcGoogle
} from "react-icons/fc";

const SignIn = () => {
  return (
    <section className="sign_in_container">
        <h3><FaFireAlt/> </h3>
        <a href="#" className="btn_block"> <span><FcGoogle /></span> Sign In with Google</a>
        <h4>Click on the button to sign in using your google</h4>
    <h1>Or</h1>
    <hr />
    <a href="#" className="btn_block"> <span><FcGoogle /></span> Create Account</a>
    </section>
  )
}

export default SignIn;