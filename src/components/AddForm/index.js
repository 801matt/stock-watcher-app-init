import React, { useState } from "react";
import styled from "styled-components";
import { Type, Button, Red } from "../../colors";
import { Tablet, Desktop } from "../../sizing";

const InternalUseAddForm = styled.section`
  margin: 1rem 0;
  .add-stock__form {
    display: flex;
    .add-stock__input-and-hint {
      position: relative;
      flex: 0 1 17.125rem;
      margin-right: 0.5rem;
      .add-stock__input {
        appearance: none;
        height: 3rem;
        width: 100%;
        padding: 0 1rem;
        font-size: 1rem;
        background: transparent;
        color: ${Type};
        border: solid 1px ${Type};
        border-radius: 2px;
        &::placeholder {
          color: ${Type};
        }
      }
      .add-stock__hint {
        display: none;
        position: absolute;
        top: -1.375rem;
        left: 0.5rem;
        font-size: 0.75rem;
        color: ${Red};
      }
    }
    .add-stock__button {
      height: 3rem;
      align-self: flex-end;
      flex-basis: 4.8125rem;
      flex-shrink: 0;
      appearance: none;
      border: none;
      border-radius: 2px;
      color: white;
      background: ${Button};
      box-shadow: 0 20px 18px -12px rgba(40, 76, 201, 0.3);
      text-transform: uppercase;
      font-size: 0.8125;
      font-weight: 700;
      cursor: pointer;
    }
    .large {
      display: none;
    }
  }
  .add-stock__form.error {
    .add-stock__input-and-hint {
      .add-stock__input {
        border: solid 1px ${Red};
      }
      .add-stock__hint {
        display: block;
      }
    }
  }
  @media (min-width: ${Tablet}) {
    margin: 1.5rem 0 2.5rem 0.3125rem;
    .add-stock__form .small {
      display: none;
    }
    .add-stock__form .large {
      display: block;
      flex-basis: 8.8125rem;
    }
  }
`;

const AddForm = ({ errorState, addStockClicked }) => {
  const [inputValue, setInputValue] = useState("");
  const getErrorState = errorState ? "error" : "no-error";

  const handleOnChange = e => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addStockClicked(inputValue);
    setInputValue("");
  };

  return (
    <InternalUseAddForm>
      <form
        onSubmit={inputValue => handleFormSubmit(inputValue)}
        className={`add-stock__form ${getErrorState}`}
      >
        <div className="add-stock__input-and-hint">
          <div className="add-stock__hint">{errorState}</div>
          <input
            value={inputValue}
            onChange={handleOnChange}
            className="add-stock__input"
            type="text"
            placeholder="Enter stock symbol"
            // required
          />
        </div>
        <button className="add-stock__button small">Add</button>
        <button type="submit" className="add-stock__button large">
          Add stock
        </button>
      </form>
    </InternalUseAddForm>
  );
};

export default AddForm;
