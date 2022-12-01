// import Axios from "../../../Services/Shared/AxiosInsurence";
import Axios from "axios";

export const generateOTP = (mobileNo) => {
  console.log(mobileNo);
  return new Promise((resolve, reject) => {
    Axios({
      url: "http://localhost:8081/getotp",
      method: "POST",
      data: { mobile_no: mobileNo },
    })
      .then((res) => {
        console.log("Otp response,s", res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const validateOTP = (mobileNo, otp) => {
  console.log(mobileNo);
  return new Promise((resolve, reject) => {
    Axios({
      url: "http://localhost:8081/validate-otp",
      method: "POST",
      data: {
        mobile_no: mobileNo,
        otp: otp,
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const callLeadService = (values) => {
  return new Promise((resolve, reject) => {
    const postData = {
      first_name: values.first_name,
      last_name: values.last_name,
      mobile_number: values.mobile_number,
      email: values.email,
      whatsappMessage: values.whatsappMessage,
      product_name: "Health Insurance",
      source_page: "Core Page Lead",
    };
    Axios({
      url: "http://localhost:8081/call-lead-service",
      method: "POST",
      data: postData,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
