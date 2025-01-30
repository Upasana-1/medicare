import React from "react";
import { Stethoscope, HeartPulse } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-blue-500 font-bold text-2xl">
      {/* Medical Cross */}
     

      {/* Stethoscope Icon */}
      <Stethoscope className="w-6 h-6 text-blue-500" />

      {/* Text Logo */}
      <span className="text-gray-800">Medi<span className="text-blue-500">Care</span></span>

      {/* Heartbeat Line */}
      <HeartPulse className="w-6 h-6 text-red-500" />
    </div>
  );
};

export default Logo;
