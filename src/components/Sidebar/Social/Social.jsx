import React from "react";
import facebook from "../../../assets/facebook.png";
import whatsapp from "../../../assets/whatsapp.png";
import instagram from "../../../assets/instagram.png";
import linkdin from "../../../assets/linkdin.png";

const Social = () => {
  return (
    <>
      <p className="font-semibold text-left mt-3 text-2xl">Social</p>
      <hr className="mb-2 bg-white" />
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <a href="#" target="_blank">
            <img src={facebook} className="h-8 w-8" title="Facebook" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="#" target="_blank">
            <img src={whatsapp} className="h-8 w-8" title="WhatsApp" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="#" target="_blank">
            <img src={instagram} className="h-8 w-8" title="Instagram" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/santu-de-812571158/"
            target="_blank"
          >
            <img src={linkdin} className="h-8 w-8" title="Linkdin" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
