import React from "react";
import { Link } from "react-router-dom";

function SideBars() {
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar"
        style={{ width: "250px" }}
      >
        <Link
          to={'/'}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </Link>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to={"/"}
              className="nav-link text-white text-decoration-none"
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to={"/create-post"}
              className="nav-link text-white text-decoration-none"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBars;
