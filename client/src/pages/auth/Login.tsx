import InputField from "../../components/InputField";
import Button from "../../components/Button";
// import RoleToggle from "../../components/RoleToggle";

import Auth from "../../layouts/Auth";




const Login = () => {
    return (
      <Auth isSeller={true}>
        <div className="w-full md:w-1/2 flex items-center justify-start ">
          <div className="w-full max-w-md p-6 ">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            
            <form>
             
              <InputField label="Email" type="email" placeholder="Enter your Email" />
              <InputField label="Password" type="password" placeholder="Enter your Password" />
              {/* <RoleToggle /> */}
  
              <div className="flex items-center my-3">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">
                  I agree to all the <strong>Terms, Privacy Policy</strong>, and <strong>Fees</strong>.
                </span>
              </div>
  
              <Button text="Login" fullWidth />
            </form>
  
            <p className="text-center mt-3 text-sm">
              do not have an account? <a href="/" className="font-bold">Register</a>
            </p>
          </div>
        </div>
        </Auth>
    );
  };
  
  export default Login;
  