import React from "react";
import "./page-header.scss";
import PropTypes from 'prop-types'

const PageHeader = ({ title }) => {
  return (
    <>
      <div className={"page-header" }>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
