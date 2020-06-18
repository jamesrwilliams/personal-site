import React from "react";
import "./page-header.scss";
import PropTypes from 'prop-types'

const PageHeader = ({ title, keyline }) => {
  return (
    <>
      <div className={"page-header fill-color " + (keyline ? 'accent-line' : '') }>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

PageHeader.propTypes = {
  keyline: PropTypes.bool,
};

PageHeader.defaultProps = {
  keyline: true,
};

export default PageHeader;
