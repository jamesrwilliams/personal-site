import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';

const SearchBoxElement = styled.div`
  padding: 2rem 0;

  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
    line-height: 1.5715;
    border: 1px solid #d9d9d9;
    font-size: 14px;
    padding: 4px 11px;
    border-radius: 2px;
  }
`;

class SearchBox extends React.Component {
  timerId = null;

  constructor(props) {
    super(props);

    this.state = {
      value: props.currentRefinement,
    };
  }

  onChangeDebounced = (event) => {
    const { refine, delay } = this.props;
    const { value } = event.currentTarget;

    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => refine(value), delay);

    this.setState(() => ({
      value,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <SearchBoxElement>
        <Container>
          <input
            value={value}
            onChange={this.onChangeDebounced}
            placeholder="Search posts..."
          />
        </Container>
      </SearchBoxElement>
    );
  }
}

SearchBox.propTypes = {
  currentRefinement: PropTypes.string,
  refine: PropTypes.func,
  delay: PropTypes.number,
};

SearchBox.defaultProps = {
  currentRefinement: '',
  refine: '',
  delay: '',
};

export default SearchBox;
