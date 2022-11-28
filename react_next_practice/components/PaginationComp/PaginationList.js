import React from "react";

export function PaginationList({ items, pageSize, currentPage, onPageChange }) {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) == 1) return null;

  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav>
        <ul className="pagination">
          {pages.map((page) => {
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item "
              }
            >
              <a className="page-link" href="#">
                {page} onClick={() => onPageChange(page)}
              </a>
            </li>;
          })}
          {/* <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1">
              1
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              3
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
