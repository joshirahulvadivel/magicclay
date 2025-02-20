import InputField from "../../components/InputField";
import Button from "../../components/Button";
import RoleToggle from "../../components/RoleToggle";
import { useForm } from "react-hook-form";

import Auth from "../../layouts/Auth";

import axios from 'axios'


const Register = () => {
  

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('', (name, email,password))
    .then(result=> console.log(result))
    .catch(err=>console.log(err))
  }
  

  return (
      <Auth isSeller={true}>    
        <div className="w-full md:w-1/2 flex items-center justify-sta p-6">
          <div className="w-full max-w-md p-6 ">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            
            <form onSubmit={handlesubmit}>
              <InputField label="Name" type="text" placeholder="Enter name here" onChange={(e)=> setName(e.target.value)} />
              <InputField label="Email" type="email" placeholder="Enter your Email" onChange={(e)=> setMail(e.target.value)}  />
              <InputField label="Password" type="password" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)}  />
              <RoleToggle />

              <div className="flex items-center my-3">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">
                  I agree to all the <strong>Terms, Privacy Policy</strong>, and <strong>Fees</strong>.
                </span>
              </div>

              <Button text="Register" fullWidth />
            </form>

            <p className="text-center mt-3 text-sm">
              Already have an account? <a href="/login" className="font-bold">Log in.</a>
            </p>
          </div>
        </div>
      </Auth>
  );
};

export default Register;
