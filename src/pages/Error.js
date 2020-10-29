import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      <div>
        <img
          src="https://cdn.dribbble.com/users/1033824/screenshots/5905597/404-dribbble.gif"
          alt=""
        />
        <h3 className="errorMessage">
          Sorry, the page you tried cannot be found
        </h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: white;
  text-align: center;
  img {
    width: 450px;
    height: 450px;
    margin-top: -200px;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
