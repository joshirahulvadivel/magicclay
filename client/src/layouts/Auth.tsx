import React, { ReactNode } from "react";
import image1 from "../assets/image3.svg";
import react from "../assets/react.svg";
import logo from "../assets/logo.svg";

interface AuthProps {
  children: ReactNode;
  isSeller : boolean;
}

const Auth: React.FC<AuthProps> = ({ isSeller , children, }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden md:block bg-gray-100 relative">
      {
        isSeller ? ( <img src={image1} alt="Magic Clay" className="w-auto rounded-tr-3xl rounded-br-3xl h-full object-none" />) :
        ( <img src={react} alt="Magic Clay" className="w-auto h-full object-none" />)
      }
       
        <img src={logo} alt="Magic Clay" className="absolute top-4 left-4 w-auto h-auto z-10" />
      </div>
      {children}
    </div>
  );
};

export default Auth;
