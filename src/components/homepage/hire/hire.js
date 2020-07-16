import React from "react";
import "./hire.scss";
import PropTypes from 'prop-types'

const HireBlock = ({mode}) => {
  return (
    <>
      <section className={"hire container mode-" + mode } id="hire">
        <h2>Let's build something together</h2>
        <p>Have a project you think I could help with? Even if it's just an idea, I'd love see if there is anything I can help with. Here are some ways we can start an awesomely productive conversation about your project:</p>
      </section>
    </>
  );
};

HireBlock.propTypes = {
  mode: PropTypes.oneOf(['default', 'narrow']),
};

HireBlock.defaultProps = {
  mode: `default`,
};

export default HireBlock;
