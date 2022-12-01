import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
import { Scrollbars } from "react-custom-scrollbars";
import KnowMore from "./KnowMore";
import * as AppConstant from "../../components/AppConstant";
import Axios from "../../Services/Shared/Axios";

const HealthplanItem = (props) => {
    const itemresponsive = {
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
      };
      const [productArr, setProductArr] = useState([]);
      
    
      const fetchRetailProduct = async () => {
        Axios({
          url: "/products?productcategories=6&_sort=sort_order:ASC",
          method: "GET",
        })
          .then(async (res) => {
            let arr = [];
            let data = {};
            for (let i in res.data) {
              let temp = res.data[i].key;
              if (res.data[i].key.includes("health-insurance/")) {
                temp = res.data[i].key.replace("health-insurance/", "");
              }
              data = { ...res.data[i] };
              data["buyNow"] = await fetchProductData(temp);
              arr.push(data);
            }
            setProductArr(arr);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const fetchProductData = (key) => {
        let temp = "";
        return new Promise((resolve, reject) => {
          Axios({
            url: "/productdata?key=" + key,
            method: "GET",
          })
            .then((res) => {
              for (let i in res.data[0].buttons) {
                if (res.data[0].buttons[i].name == "Get Quote") {
                  temp = res.data[0].buttons[i].slug;
                  break;
                } else {
                  temp = "";
                }
              }
              resolve(temp);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      };
      useEffect(() => {
        fetchRetailProduct();
      }, []);
      return (
        <div className="healthplan_item customIn">
          {productArr.length > 0 && (
            <OwlCarousel
              className="owl-theme"
              margin={20}
              responsive={itemresponsive}
            >
              {productArr.map((p, key) => (
                <div class="item" key={key}>
                  <div className="Iconimg">
                    <img
                      src={`${AppConstant.BASE_URL}${p.icon.url}`}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                  <h3>{p.Name_en}</h3>
                  <div className="">
                  <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={190}
                        hideTracksWhenNotNeeded
                        className="bg-dark-scroll"
                      >
                        <p>
                        <KnowMore character="90">
                          {p.Details_en}
                        </KnowMore>
                        </p>
                      </Scrollbars>
                  </div>
                  <div className="item_linkH">
                    <a href={p.key} className="knowmore">
                      Know More
                    </a>
                    {p.buyNow != "" ? (
                      <a
                        href={process.env.REACT_APP_TRANSACTION_API_URL + p.buyNow}
                        target="_blank"
                        className="buynow"
                      >
                        Buy Now
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      );
}

export default HealthplanItem