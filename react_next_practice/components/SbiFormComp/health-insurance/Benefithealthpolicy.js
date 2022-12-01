import React, { useState } from "react";
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Scrollbars } from "react-custom-scrollbars";
import KnowMore from "./KnowMore";
import ReactHtmlParser from "react-html-parser";
import imageLoader from '../../loader'
import Image from 'next/image'

const Benefithealthpolicy = (props) => {
    const [policyitemresponsive, setpolicyitemresponsive] = useState({
        0: {
          items: 1,
          stagePadding: 0,
          autoplay: true,
        },
        768: {
          items: 2,
          stagePadding: 0,
        },
        1024: {
          items: 3,
          stagePadding: 0,
          nav: true,
          dots: false,
        },
      });
      console.log("hh ", props.hib);
      return (
        <div>
          {ReactHtmlParser(props.hbqa.split("?")[0] + "?")} 
          {ReactHtmlParser(props.hbqa.split("?")[1])}
          <div className="healthplan_item">
            {props.hib.length > 0 && (
              <OwlCarousel
                className="owl-theme"
                margin={20}
                responsive={policyitemresponsive}
              >
                {props.hib.map((ele, key) => (
                  <div class="item" key={key}>
                    <div className="Iconimg">
                      <Image loader={imageLoader}
                        src={
                          ele.keyword == "HIPB1"
                            ? 'assets/images/MHE.svg'
                            : ele.keyword == "HIPB2"
                            ? 'assets/images/PHCost.svg'
                            :  ele.keyword == "HIPB3"
                            ? 'assets/images/CashlessFacility.svg'
                            : ele.keyword == "HIPB4"
                            ? 'assets/images/heart-care.svg'
                            :  ele.keyword == "HIPB5"
                            ? 'assets/images/Union 109.svg'
                            : 'assets/images/Union 108.svg'
                        }
                        loading="lazy"
                        alt=""
                        height={54}
                        width={72}
                        layout='fixed' objectFit="contain"
                      />{" "}
                    </div>{" "}
                    <br />
                    <h5>{ele.content_en.split(":")[0]}</h5>
                    <div className="item_descroptionH2">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={190}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <p>
                          <KnowMore character="100">
                            {ele.content_en.split(":")[1]}
                          </KnowMore>
                        </p>
                      </Scrollbars>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      );
}

export default Benefithealthpolicy