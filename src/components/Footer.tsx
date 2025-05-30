import React from "react";
import Instagram from "../assets/icons/Instagram";
import Facebook from "../assets/icons/Facebook";
import Twitter from "../assets/icons/Twitter";
import Phone from "../assets/icons/Phone";

const Footer = () => {
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold text-blue1 capitalize">
        Ready to work together with us?
      </h1>
      <p className="my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum vero
        iste nobis optio quidem, officia asperiores nemo aliquid explicabo ad
        veritatis atque consectetur nesciunt amet reprehenderit reiciendis
        cumque ex. Animi!
      </p>
      <div className="w-full flex flex-col gap-5">
        <button className="flex align-center justify-center border border-blue1 w-full bg-blue1 text-white py-3 px-5 font-semibold">
          BUILD A PROJECT WITH US
        </button>
        <button className="flex align-center justify-center border border-blue1 w-full text-blue1 py-3 px-5 font-semibold">
          BUILD A CAREER WITH US
        </button>
      </div>
      <div className="my-5 w-full">
        <h2 className="text-xl font-semibold mb-5 mt-10 text-blue1">
          ANY QUERIES? FEEL FREE TO SEND OUT AN EMAIL
        </h2>
        <textarea
          name=""
          id=""
          className="w-full border-2 .border-blue1"
          rows={4}
        />
        <button className="flex align-center justify-center border border-blue1 w-full bg-blue1 text-white py-3 px-5 font-semibold">
          LET'S TALK CONSTRUCTION
        </button>
      </div>
      <div className="flex align-middle justify-center gap-5">
        <Instagram />
        <Facebook />
        <Twitter />
        <Phone />
      </div>
      <p className="text-center my-5">Copyright © 2025. All rights reserved.</p>
    </div>
  );
};

export default Footer;
