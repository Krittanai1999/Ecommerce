import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../Sidebar/sidebar";

const AdminOrdersDetail = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>ORDER DETAILL</h2>
          </nav>

          

          <div class="container-fluid">
            <p>
              _________________________________________________________________
              _________________________________________________________________
              _________________________________________________________________
              ____________________________________
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminOrdersDetail;
