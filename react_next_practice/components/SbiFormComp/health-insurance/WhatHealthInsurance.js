import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Scrollbars } from "react-custom-scrollbars";
import ReactHtmlParser from "react-html-parser";
import imageLoader from '../../loader'
import Image from 'next/image'
import KnowMore from "./KnowMore";

const WhatHealthInsurance = (props) => {
  return (
    <>
    <div className="topsectionH">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 class="accordion-header" id="0">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              {props.healthInsurenceQuestion}{" "}
            </button>
          </h2>
          <div
            id="collapse1"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {ReactHtmlParser(props.healthInsurenceAnswer)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottomsectionH">
      {ReactHtmlParser(props.typesOfHealthInsurence)}{" "}
      <div className="btm_tabsection">
        <Tabs defaultActiveKey="home" id="" className="mb-3">
          <Tab
            eventKey="home"
            title={
              props.healthInsurencetypes.length > 0
                ? props.healthInsurencetypes[0].split(":")[0]
                : ""
            }
          >
            {props.healthInsurencetypes.length > 0
              ? ReactHtmlParser(
                  props.healthInsurencetypes[0].split(":")[1] + ":"
                )
              : ""}
            <div className="planbenifit_detail">
              <div className="row">
                {props.ihip.map((el, key) => (
                  <div className="col-md-4" key={key}>
                    <figure className="imgCard">
                      <Image loader={imageLoader}
                        height={181}
                        width={388}
                        src={
                          el.keyword == "IHIP1"
                            ? 'assets/images/iipolicy.svg'
                            : el.keyword == "IHIP2"
                            ? 'assets/images/ffplan.svg'
                            :  'assets/images/gminsurance.svg'
                        }
                        loading="lazy"
                        alt=""
                        layout='fixed' objectFit="contain"
                      />
                    </figure>
                    {ReactHtmlParser(el.content_en.split(":")[0])}
                    <div className="inforeadMore">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={140}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <p>
                          <KnowMore character="100">
                            {el.content_en.split(":")[1]}
                          </KnowMore>
                        </p>
                      </Scrollbars>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title={
              props.healthInsurencetypes.length > 0
                ? props.healthInsurencetypes[1].split(":")[0]
                : ""
            }
          >
            {props.healthInsurencetypes.length > 0
              ? ReactHtmlParser(
                  props.healthInsurencetypes[1].split(":")[1] + ":"
                )
              : ""}
            <div className="planbenifit_detail">
              <div className="row">
                {props.dbp.map((el, key) => (
                  <div className="col-md-4" key={key}>
                    <figure className="imgCard">
                      <Image loader={imageLoader}
                        src={
                          el.keyword == "DBL1"
                            ? 'assets/images/critical_illness_plan.svg'
                            : el.keyword == "DBL2"
                            ? 'assets/images/personal_accident_plan.svg'
                            : 'assets/images/doctor-helping-patient-with-fractured-leg.svg'
                        }
                        loading="lazy"
                        alt=""
                        height={100}
                        width={100}
                        layout='fixed' objectFit="contain"
                      />
                    </figure>
                    {ReactHtmlParser(el.content_en.split(":")[0])}
                    <div className="inforeadMore">
                      <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={140}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <p>
                          <KnowMore character="100">
                            {el.content_en.split(":")[1]}
                          </KnowMore>
                        </p>
                      </Scrollbars>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </>
  )
}

export default WhatHealthInsurance