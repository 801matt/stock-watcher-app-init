import React from "react";
import styled from "styled-components";
import { Type, Button } from "../../colors";
import { Tablet, Desktop } from "../../sizing";

const InternalUseAddForm = styled.section`
  margin: 1rem 0;
  .add-stock__form {
    display: flex;
    .add-stock__input {
      appearance: none;
      flex: 0 1 17.125rem;
      height: 3rem;
      padding: 0 1rem;
      font-size: 1rem;
      background: transparent;
      color: ${Type};
      border: solid 1px ${Type};
      border-radius: 2px;
      margin-right: 0.5rem;
      &::placeholder {
        color: ${Type};
      }
    }
    .add-stock__button {
      flex-basis: 4.8125rem;
      flex-shrink: 0;
      appearance: none;
      border: none;
      border-radius: 2px;
      background: ${Button};
      color: white;
      text-transform: uppercase;
      font-size: 0.8125;
      font-weight: 700;
      cursor: pointer;
    }
    .large {
      display: none;
    }
  }
  @media (min-width: ${Tablet}) {
    .add-stock__form .small {
      display: none;
    }
    .add-stock__form .large {
      display: block;
      flex-basis: 8.8125rem;
    }
  }
`;

const AddForm = () => {
  return (
    <InternalUseAddForm>
      <form className="add-stock__form">
        <input
          className="add-stock__input"
          type="text"
          placeholder="Enter stock symbol"
        />
        <button className="add-stock__button small">Add</button>
        <button className="add-stock__button large">Add stock</button>
      </form>
    </InternalUseAddForm>
  );
};

export default AddForm;
