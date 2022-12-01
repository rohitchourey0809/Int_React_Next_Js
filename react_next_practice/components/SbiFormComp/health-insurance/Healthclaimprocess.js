import React from 'react';
import ReactHtmlParser from "react-html-parser";
import imageLoader from '../../loader'
import Image from 'next/image'

const Healthclaimprocess = (props) => {
    return (
        <div className='claimprocess_block'>
            {ReactHtmlParser(props.hcpText)}
            <ul>
                <li>
                    <div className='bullet'><span><Image loader={imageLoader} src="assets/images/step1.svg" loading='lazy' alt='' height={40} width={40} layout='fixed' objectFit="contain"/></span></div>
                    <div className='graphicH'><Image loader={imageLoader} src="assets/images/hp1.svg" loading='lazy' alt=''  height={117} width={118} layout='fixed' objectFit="contain"/></div>
                    <div className='txtH'>{props.hcpContent.split("p1:")[1]}</div>
                </li>
                <li>
                    <div className='bullet'><span><Image loader={imageLoader} src="assets/images/step2.svg" loading='lazy' alt='' height={40} width={40} layout='fixed' objectFit="contain"/></span></div>
                    <div className='graphicH'><Image loader={imageLoader} src="assets/images/helpline.svg" loading='lazy' alt=''   height={117} width={118} layout='fixed' objectFit="contain"/></div>
                    <div className='txtH'>{props.hcpContent.split("p1:")[2]}</div>
                </li>
                <li>
                    <div className='bullet'><span><Image loader={imageLoader} src="assets/images/step3.svg" loading='lazy' alt='' height={40} width={40} layout='fixed' objectFit="contain"/></span></div>
                    <div className='graphicH'><Image loader={imageLoader} src="assets/images/cp3.svg" loading='lazy' alt=''  height={117} width={118} layout='fixed' objectFit="contain"/></div>
                    <div className='txtH'>{props.hcpContent.split("p1:")[3]}</div>
                </li>
                <li>
                    <div className='bullet'><span><Image loader={imageLoader} src="assets/images/step4.svg" loading='lazy' alt='' height={40} width={40} layout='fixed' objectFit="contain"/></span></div>
                    <div className='graphicH'><Image loader={imageLoader} src="assets/images/cp4.svg" loading='lazy' alt=''  height={117} width={118} layout='fixed' objectFit="contain"/></div>
                    <div className='txtH'>{props.hcpContent.split("p1:")[4]}</div>
                </li>
                <li>
                    <div className='bullet'><span><Image loader={imageLoader} src="assets/images/step5.svg" loading='lazy' alt='' height={40} width={40} layout='fixed' objectFit="contain"/></span></div>
                    <div className='graphicH'><Image loader={imageLoader} src="assets/images/cp5.svg" loading='lazy' alt=''  height={117} width={118} layout='fixed' objectFit="contain"/></div>
                    <div className='txtH'>{props.hcpContent.split("p1:")[5]}</div>
                </li>
                <li>
                    <div className='bullet'><span><Image loader={imageLoader} src="assets/images/step6.svg" loading='lazy' alt='' height={40} width={40} layout='fixed' objectFit="contain"/></span></div>
                    <div className='graphicH'><Image loader={imageLoader} src="assets/images/cp6.svg" loading='lazy' alt=''  height={117} width={118} layout='fixed' objectFit="contain"/></div>
                    <div className='txtH'>{props.hcpContent.split("p1:")[6]}</div>
                </li>
                <li>
                    <div className='bullet'><span><Image loader={imageLoader} src="assets/images/step7.svg" loading='lazy' alt='' height={40} width={40} layout='fixed' objectFit="contain"/></span></div>
                    <div className='graphicH'><Image loader={imageLoader} src="assets/images/cp7.svg" loading='lazy' alt=''  height={117} width={118} layout='fixed' objectFit="contain"/></div>
                    <div className='txtH'>{props.hcpContent.split("p1:")[7]}</div>
                </li>
               
            </ul>
        </div>
    )
}

export default Healthclaimprocess