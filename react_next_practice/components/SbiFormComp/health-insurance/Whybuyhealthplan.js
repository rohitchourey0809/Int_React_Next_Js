import React from "react";
import ReactHtmlParser from "react-html-parser";
import imageLoader from '../../loader'
import Image from 'next/image'

const Whybuyhealthplan = (props) => {
    return (
        <div class="Hbox_content">
          {ReactHtmlParser(props.buyHionlineText)}
          <ul>
            <li>
              <span>
                <Image loader={imageLoader} height={38} width={28} src='assets/images/locationh.svg' loading="lazy" alt="" layout='fixed' objectFit="contain"/>
              </span>
              <p>{props.buyHionlineContent.split("p1:")[1]}</p>{" "}
            </li>
            <li>
              <span>
                <Image loader={imageLoader} height={41} width={42} src='assets/images/medical-sign.svg' loading="lazy" alt="" layout='fixed' objectFit="contain"/>
              </span>
              <p>{props.buyHionlineContent.split("p1:")[2]}</p>
            </li>
            <li>
              <span>
                <Image loader={imageLoader} height={41} width={42} src='assets/images/support.svg' loading="lazy" alt="" layout='fixed' objectFit="contain"/>
              </span>
              <p>{props.buyHionlineContent.split("p1:")[3]}</p>
            </li>
            <li>
              <span>
                <Image loader={imageLoader} height={41} width={41} src='assets/images/onlinemarketing.svg' loading="lazy" alt="" layout='fixed' objectFit="contain"/>
              </span>
              <p>{props.buyHionlineContent.split("p1:")[4]}</p>
            </li>
            <li>
              <span>
                <Image loader={imageLoader} height={42} width={42} src='assets/images/cpl.svg' loading="lazy" alt="" layout='fixed' objectFit="contain"/>
              </span>
              <p>{props.buyHionlineContent.split("p1:")[5]}</p>{" "}
            </li>
          </ul>
        </div>
      );
}

export default Whybuyhealthplan