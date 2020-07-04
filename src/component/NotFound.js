import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound d-flex flex-column justify-content-center align-items-center h-70 w-70">
        <p className="mt-4 px-2 h4 text-center">Page Not Found</p>
        <p className="px-2 h5 text-center">
          Sorry We couldn't find this country
        </p>
        <img className="img-fluid px-2" src="/not_found.png" alt="notfound" />
      </div>
    );
  }
}
export default NotFound;
