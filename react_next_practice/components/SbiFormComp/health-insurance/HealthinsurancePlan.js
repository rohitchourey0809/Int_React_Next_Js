import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import KnowMore from "./KnowMore";
import ReactHtmlParser from "react-html-parser";
import imageLoader from '../../loader'
import Image from 'next/image'

const HealthinsurancePlan = (props) => {
    return (
        <div className="chooseH_content">
          <div className="row">
            {props.chahpArr.map((ele, key) => (
              <div className="col-md-3" key={key}>
                <div className="hptextarea">
                  <figure className="IconHplan">
                    <Image loader={imageLoader}
                      height={63}
                      width={63}
                      src={
                        ele.keyword == "CAHIP1" ?
                        'assets/images/coverage.svg' :
                        ele.keyword == "CAHIP2" ?
                        'assets/images/affordability.svg' :
                        ele.keyword == "CAHIP3" ?
                        'assets/images/nhcoverage.svg' :
                        ele.keyword == "CAHIP4" ?
                        'assets/images/hcsratio.svg' : ""
                      }
                      loading="lazy"
                      alt=""
                      layout='fixed' objectFit="contain"
                    />
                  </figure>
                  {ReactHtmlParser(ele.content_en.split(":")[0])}
                  <Scrollbars
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={250}
                    hideTracksWhenNotNeeded
                    className="bg-dark-scroll"
                  >
                    <p>
                      <KnowMore character="110">
                        {ele.content_en.split(":")[1]}
                      </KnowMore>
                    </p>
                  </Scrollbars>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default HealthinsurancePlan