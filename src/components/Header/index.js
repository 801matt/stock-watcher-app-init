import React from "react";
import styled from "styled-components";
import { Tablet, Desktop } from "../../sizing";

const InternalUseHeader = styled.header`
  margin-bottom: 1.875rem;
  .main-title {
    font-size: 2rem;
  }
  @media (min-width: ${Tablet}) {
    margin-left: 0.3125rem;
    .main-title {
      margin-bottom: 2.875rem;
      font-size: 3.5rem;
    }
  }
  @media (min-width: ${Desktop}) {
    margin-bottom: 1.875rem;
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
