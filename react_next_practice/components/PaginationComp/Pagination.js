import React, { useState } from "react";
import { PaginationList } from "./PaginationList";

export default function Pagination(props) {
  //   const { postdata } = { ...props };
  //   console.log("Pagination", postdata.data);
  const [postdata, SetPostdata] = useState(props.postdata.data);
  const [PostData, Setpostdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  //   const onPageChange = (page, pageSize) => {
  //     setCurrentPage(page);
  //   };
  return (
    <>
      <h2>Pagination pages</h2>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {postdata.map((posts) => {
              //   console.log("pOSAT", posts);
              return (
                <>
                  <tr key={posts.id}>
                    <td>{posts.id}</td>
                    <td>{posts.title}</td>
                    <td>
                      <button class="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                  ;
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        {/* <PaginationList
          items={postdata.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        /> */}
      </div>
    </>
  );
}
