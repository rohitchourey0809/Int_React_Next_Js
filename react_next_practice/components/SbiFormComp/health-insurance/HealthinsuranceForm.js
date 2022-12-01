import React, { useState } from "react";
import { Formik, useFormik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import Otpfield from "./Otpfield";
import Thankyou from "./Thankyou";
import Spinner from "react-bootstrap/Spinner";
import {
  callLeadService,
  generateOTP,
  validateOTP,
} from "./services/HealthInsuranceService";
import TimerComponent from "./TimerComponent";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
// import "rohit.jpg" from '../../loader'
import Image from "next/image";

const HealthinsuranceForm = (props) => {
  const [thankyou, setthankyou] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [isVerifyOTP, setIsVerifyOTP] = useState(false);
  const [isResendOTP, setIsResendOTP] = useState(false);
  const [countResndOTP, setCountResndOTP] = useState(0);
  const [loading, setLoading] = useState(false);
  const intialValues = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    tandc: false,
    whatsappMessage: false,
    otp: "",
  };

  const onSuccess = () => {
    window.location.reload();
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, "First Name must be two charcters")
      .max(50, "First Name not more than fifty charcters")
      .required("First Name is Required"),
    last_name: Yup.string()
      .min(2, "Last Name must be two charcters")
      .max(50, "Last Name not more than fifty charcters")
      .required("Last Name is Required"),
    mobile_number: Yup.string()
      .min(10, "Mobile Number must be 10 digists")
      .max(10, "Mobile Number must be 10 digists")
      .matches(/^[0]?[6789]\d{9}$/, "Invalid mobile number")
      .required("Mobile Number is Required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is Required"),
    tandc: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const handleSubmit = (values, action) => {
    console.log("values ", values);
    if (!isOTP) {
      generateOTP(values.mobile_number)
        .then((res) => {
          action.setSubmitting(false);
          setIsResendOTP(true);
          setIsOTP(true);
        })
        .catch((err) => {
          action.setSubmitting(false);
          setIsResendOTP(false);
          action.setErrors({
            mobile_number: err.response.data.message,
          });
          console.log(err);
        });
    } else if (isOTP) {
      if (values.otp == "") {
        action.setSubmitting(false);
        action.setErrors({
          otp: "Please Enter the OTP",
        });
      } else if (values.otp.length < 4) {
        action.setSubmitting(false);
        action.setErrors({
          otp: "Please Enter the 4 digits OTP",
        });
      } else {
        setIsResendOTP(false);
        validateOTP(values.mobile_number, values.otp)
          .then((res) => {
            action.setSubmitting(false);
            setLoading(true);
            callLeadService(values)
              .then((res) => {
                setLoading(false);
                setIsVerifyOTP(true);
              })
              .catch((err) => {
                setLoading(false);
                setIsVerifyOTP(false);
                console.log(err);
              });
          })
          .catch((err) => {
            setIsResendOTP(false);
            action.setSubmitting(false);
            setLoading(false);
            setIsVerifyOTP(false);
            if (err.response.status == 400) {
              action.setErrors({
                otp: err.response.data.message,
              });
            }
          });
      }
    }
  };

  return (
    <div
      style={{
        marginLeft: "500px",
        // border: "5px solid red",
        alignItems: "center",
      }}
    >
      <section className="health_insurance_form">
        <div className="container">
          <div className="healthform_card">
            <div className="row">
              <div className="col-md-5 img_gp">
                <Image
                  // loader={"rohit.jpg"}
                  src="/assets/images/hinsurance_graphic.svg"
                  layout="fixed"
                  objectFit="contain"
                  loading="lazy"
                  alt=""
                  height={429}
                  width={526}
                />
              </div>
              <div className="col-md-7">
                <div
                  className={
                    !loading ? "H_formblock" : "H_formblock loadershow"
                  }
                >
                  {" "}
                  {loading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : isVerifyOTP ? (
                    <Thankyou buttonHandler={onSuccess} />
                  ) : (
                    <Formik
                      initialValues={intialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue,
                        setErrors,
                        /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <h2>{props.healthInsuranceFormHeading}</h2>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First name"
                                  name="first_name"
                                  value={values.first_name}
                                  onChange={(e) => {
                                    let value = e.target.value;
                                    value = value.replace(/[^A-Za-z\s]/gi, "");
                                    setFieldValue("first_name", value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <label for="ename">First name</label>
                              </div>
                              {touched.first_name && errors.first_name ? (
                                <span style={{ color: "red" }}>
                                  {errors.first_name}
                                </span>
                              ) : null}
                            </div>
                            <div className="col-md-6 pr-0">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last Name"
                                  name="last_name"
                                  value={values.last_name}
                                  onChange={(e) => {
                                    let value = e.target.value;
                                    value = value.replace(/[^A-Za-z\s]/gi, "");
                                    setFieldValue("last_name", value);
                                  }}
                                  onBlur={handleBlur}
                                />

                                <label for="lname">Last Name</label>
                              </div>
                              {touched.last_name && errors.last_name ? (
                                <span style={{ color: "red" }}>
                                  {errors.last_name}
                                </span>
                              ) : null}
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Mobile No."
                                  name="mobile_number"
                                  value={values.mobile_number}
                                  maxlength="10"
                                  onChange={(e) => {
                                    console.log("jj ", errors);
                                    const value = e.target.value.replace(
                                      /\D/g,
                                      ""
                                    );
                                    setIsVerifyOTP(false);
                                    setIsOTP(false);
                                    setIsResendOTP(false);
                                    setCountResndOTP(0);
                                    setFieldValue("mobile_number", value);
                                  }}
                                  onBlur={handleBlur}
                                />

                                <label for="ephone">Mobile No.</label>
                              </div>
                              {touched.mobile_number && errors.mobile_number ? (
                                <span style={{ color: "red" }}>
                                  {errors.mobile_number}
                                </span>
                              ) : null}
                            </div>
                            <div className="col-md-6 pr-0">
                              <div className="form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email ID"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <label for="eaddress">Email ID</label>
                              </div>
                              {touched.email && errors.email ? (
                                <span style={{ color: "red" }}>
                                  {errors.email}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="condition_allow">
                            <label class="formGrp customCheckBox ">
                              I Accept the{" "}
                              <a
                                href="https://www.sbigeneral.in/portal/website-terms-usage"
                                target="_blank"
                              >
                                Terms &#38; Conditions{" "}
                              </a>
                              *
                              <input
                                type="checkbox"
                                class="gaClass"
                                data-ga-val="AgreeTerms"
                                value={values.tandc}
                                checked={values.tandc == true}
                                name="tandc"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <span class="checkmark"></span>
                              <span class="error-message"></span>
                            </label>
                            <div class="ermsg">
                              {errors.tandc ? (
                                <span style={{ color: "red" }}>
                                  {errors.tandc}
                                </span>
                              ) : null}
                            </div>
                            <label class="form-group customCheckBox ">
                              I allow SBI General to communicate with me over
                              WhatsApp
                              <input
                                type="checkbox"
                                class="gaClass"
                                data-ga-val="whatapp and conditions"
                                value={values.whatsappMessage}
                                checked={values.whatsappMessage == true}
                                name="whatsappMessage"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <span class="checkmark"></span>
                              <span class="error-message"></span>
                            </label>
                          </div>
                          {/* ----after click on button-- */}
                          <div className="otp_verify">
                            <div className="row">
                              {isOTP ? (
                                <div className="col-md-9">
                                  <Otpfield
                                    name="otp"
                                    value={values.otp}
                                    onChange={(v) => {
                                      setFieldValue("otp", v);
                                    }}
                                    verify={isVerifyOTP}
                                    reintialize={isResendOTP}
                                  >
                                    <a
                                      href="javascript: void(0)"
                                      className="refreshBtn"
                                    >
                                      {values.otp.length == 4 ? (
                                        <Image
                                          // loader={"rohit.jpg"}
                                          src="/assets/images/otp_verified.svg"
                                          alt=""
                                          height={100}
                                          width={100}
                                        />
                                      ) : countResndOTP == 3 ? (
                                        "You can't resend otp more than 3 times"
                                      ) : isResendOTP ? (
                                        <TimerComponent
                                          reset={() => {
                                            setIsResendOTP(false);
                                          }}
                                        />
                                      ) : (
                                        <OverlayTrigger
                                          // placement="bottom"
                                          delay={{ show: 250, hide: 400 }}
                                          overlay={
                                            <Tooltip>Resend OTP</Tooltip>
                                          }
                                        >
                                          <Image
                                            // loader={"rohit.jpg"}
                                            height={100}
                                            width={100}
                                            src="assets/images/refresh.svg"
                                            alt=""
                                            onClick={(e) => {
                                              e.preventDefault();
                                              generateOTP(values.mobile_number)
                                                .then((res) => {
                                                  setErrors({
                                                    otp: "",
                                                  });
                                                  setFieldValue("otp", "");
                                                  setIsResendOTP(true);
                                                  setCountResndOTP(
                                                    countResndOTP + 1
                                                  );
                                                  setIsOTP(true);
                                                })
                                                .catch((err) => {
                                                  setIsResendOTP(false);
                                                  setErrors({
                                                    otp: err.response.data
                                                      .message,
                                                  });
                                                  console.log(err);
                                                });
                                            }}
                                          />
                                        </OverlayTrigger>
                                      )}
                                    </a>
                                    {errors.otp ? (
                                      <span style={{ color: "red" }}>
                                        {errors.otp}
                                      </span>
                                    ) : null}
                                  </Otpfield>
                                </div>
                              ) : null}
                              <div className="col-md-3">
                                <div className="btns">
                                  <button
                                    type="submit"
                                    // onClick={() => setthankyou(!thankyou)}
                                    id=""
                                    // value={!isOTP ? "Get Quote" : "Verify"}
                                    class="btn"
                                    disabled={isSubmitting}
                                  >
                                    {!isOTP ? "Get Quote" : "Verify"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthinsuranceForm;
