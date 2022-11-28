import React, { useEffect, useState } from "react";
import Pagination from "../../components/PaginationComp/Pagination";
import axios from "axios";

export default function PaginetionNext() {
  const [postdata, Setpostdata] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const postdata = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      Setpostdata(postdata);
    };

    getPost();
  }, []);

  return (
    <>
      <Pagination postdata={postdata} />
    </>
  );
}
