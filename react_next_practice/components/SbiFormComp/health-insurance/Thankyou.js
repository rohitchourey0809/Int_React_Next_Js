import React from "react";
// import imageLoader from '../../loader'
import Image from "next/image";

const Thankyou = (props) => {
  return (
    <div className="otpverify_thankyou">
      <figure className="okiCon">
        <Image
        //   loader={"rohit.jpg"}
          src="assets/images/thankyou_otpverified.svg"
          height={100}
          width={100}
          alt=""
        />
      </figure>
      <div className="text-center">
        <h2>Thank You!</h2>
        <p>
          Our product expert will get in touch
          <br /> with you shortly.
        </p>
        <div className="btns">
          <input
            type="submit"
            value="OK"
            class="btn"
            onClick={() => window.location.reload()}
          />
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
