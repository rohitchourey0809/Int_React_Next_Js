import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ReactHtmlParser from "react-html-parser";

const HealthExclusions = (props) => {
    return (
        <div>
          <div className="mid_Tabsection">
            <Tabs defaultActiveKey="home1" id="" className="mb-3">
              <Tab
                eventKey="home1"
                title={ReactHtmlParser(props.hiiText.split(":")[0])}
              >
                <div className="planbenifit_detail2">
                  {ReactHtmlParser(props.hiiText.split(":")[1] + ":")}
                  {ReactHtmlParser(props.hiiContent)}
                  <div className="col_custom">
                    <div className="d-flex flex2">
                      <a
                        href="https://content.sbigeneral.in/uploads/90ade7e39d5e481f9aeb772a19a30234.pdf"
                        className="dcinfo"
                        target="blank"
                      >
                        Download Customer Information Sheet
                      </a>
                      <a
                        href="https://content.sbigeneral.in/uploads/977fc90ab12640b8bb0d4ed3b600d819.pdf"
                        target="blank"
                      >
                        Download Comprehensive Health Insurance with Affordable
                        Premium Details
                      </a>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Exclusions"
                title={ReactHtmlParser(props.hiieText.split(":")[0])}
              >
                <div className="planbenifit_detail2">
                  {ReactHtmlParser(props.hiieText.split(":")[1] + ":")}
                  {ReactHtmlParser(props.hiieContent)}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      );
}

export default HealthExclusions