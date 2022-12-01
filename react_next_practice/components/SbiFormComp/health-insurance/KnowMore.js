import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

const KnowMore = (props) => {
    const [isTruncated, setIsTruncated] = useState(true);
    const text = props.children;
    // const resultString = isTruncated ? text.slice(0, props.character) : text;
    const handleTruncated = () => {
      setIsTruncated(!isTruncated);
    };
  
    return (
      <>
        {/* {ReactHtmlParser(resultString)} */}
        <span
          className="mr-1"
          onClick={handleTruncated}
          style={{ color: "#00A9ED" }}
        >
          {/* {props.children.length >= props.character ? isTruncated
            ? "..More"
            : " Less" : null} */}
        </span>
      </>
    );
}

export default KnowMore