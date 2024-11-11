import React from "react";

function Loading() {
  return (
      <div className="d-flex justify-content-center text-center w-100 simmer">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  );
}

export default Loading;
