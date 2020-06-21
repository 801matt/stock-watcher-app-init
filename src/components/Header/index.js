import React from "react";
import styled from "styled-components";

const InternalUseHeader = styled.header`
  margin-bottom: 1.875rem;
  .main-title {
    font-size: 2rem;
  }
  @media (min-width: 48rem) {
    margin-bottom: 2.875;
    .main-title {
      font-size: 3.5rem;
    }
  }
`;

const Header = () => {
  return (
    <InternalUseHeader>
      <h1 className="main-title">Stock Watcher</h1>
    </InternalUseHeader>
  );
};

export default Header;
