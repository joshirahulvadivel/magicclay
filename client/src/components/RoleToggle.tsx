import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoleToggle = () => {
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
    if (newRole === "seller") {
      navigate("/"); 
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-md p-1 mb-4">
      <button
        className={`w-1/2 py-2 text-center rounded-md ${
          role === "buyer" ? "bg-black text-white" : "text-gray-600"
        }`}
        onClick={() => handleRoleChange("buyer")} 
      >
        Buyer
      </button>
      <button
        className={`w-1/2 py-2 text-center rounded-md ${
          role === "seller" ? "bg-black text-white" : "text-gray-600"
        }`}
        onClick={() => handleRoleChange("seller")}
      >
        Seller
      </button>
    </div>
  );
};

export default RoleToggle;
