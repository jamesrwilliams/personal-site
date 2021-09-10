import styled from 'styled-components';

const Container = styled.div`
    max-width: 840px;
    margin: 0 1rem;
    padding: 0 1rem;
    transition: all 1s ease;

    @media screen and (min-width: 700px) {
      margin: 0 auto;
    }
`;

export default Container;
