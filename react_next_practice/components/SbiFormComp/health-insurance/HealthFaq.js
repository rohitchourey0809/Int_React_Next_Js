import React from "react";
import ReactHtmlParser from "react-html-parser";

const HealthFaq = (props) => {
    const contentArr = props.hfaqContent.split("Q:");

    return (
      <div className="healthfaq_content">
        {ReactHtmlParser(props.hfaqText)}
  
        <div className="accordion" id="HealthFAQ">
          <div className="accordion-item">
            <h2 className="accordion-header" id="a0">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#healthfaq"
                aria-expanded="true"
                aria-controls="healthfaq"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[1].split("A:")[0]
                  : ""}
              </button>
            </h2>
            <div
              id="healthfaq"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[1].split("A:")[1]
                  : ""}{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="a1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[2].split("A:")[0]
                  : ""}
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">{props.hfaqContent
                  ? props.hfaqContent.split("Q:")[2].split("A:")[1]
                  : ""}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="a2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[3].split("A:")[0]
                  : ""}
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">{props.hfaqContent
                  ? props.hfaqContent.split("Q:")[3].split("A:")[1]
                  : ""}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="a3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[4].split("A:")[0]
                  : ""}
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">{props.hfaqContent
                  ? props.hfaqContent.split("Q:")[4].split("A:")[1]
                  : ""}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="a4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[5].split("A:")[0]
                  : ""}
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">{props.hfaqContent
                  ? props.hfaqContent.split("Q:")[5].split("A:")[1]
                  : ""}</div>
            </div>
          </div>
  
          <div className="accordion-item">
            <h2 className="accordion-header" id="a5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[6].split("A:")[0]
                  : ""}{" "}
              </button>
            </h2>
            <div
              id="collapse6"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">{props.hfaqContent
                  ? props.hfaqContent.split("Q:")[6].split("A:")[1]
                  : ""}</div>
            </div>
          </div>
  
          <div className="accordion-item">
            <h2 className="accordion-header" id="a6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse7"
                aria-expanded="false"
                aria-controls="collapse7"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[7].split("A:")[0]
                  : ""}
              </button>
            </h2>
            <div
              id="collapse7"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">{props.hfaqContent
                  ? props.hfaqContent.split("Q:")[7].split("A:")[1]
                  : ""}</div>
            </div>
          </div>
  
          <div className="accordion-item">
            <h2 className="accordion-header" id="a7">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse8"
                aria-expanded="false"
                aria-controls="collapse8"
              >
                {props.hfaqContent
                  ? props.hfaqContent.split("Q:")[8].split("A:")[0]
                  : ""}{" "}
              </button>
            </h2>
            <div
              id="collapse8"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#HealthFAQ"
            >
              <div className="accordion-body">{props.hfaqContent
                  ? props.hfaqContent.split("Q:")[8].split("A:")[1]
                  : ""}</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HealthFaq