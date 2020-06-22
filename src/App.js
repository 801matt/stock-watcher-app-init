import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import { Tablet, Desktop, MaxWidth } from "./sizing";
import AddForm from "./components/AddForm";
import Dashboard from "./components/Dashboard";
import StockData from "./stock-data";

const InternalUseApp = styled.div`
  padding: 1rem;
  max-width: ${MaxWidth};
  margin: 0 auto;
  @media (min-width: ${Tablet}) {
    /* CREATE UNIFORM PADDING WRAPPER TO ACCOUNT FOR CARDS MARGIN >= TABLET */
    padding: calc(2rem - 0.3125rem);
  }
`;

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [errorState, setErrorState] = useState("");

  const handleAddStockClicked = val => {
    // CREATE A TRIMMED VERSION OF THE USER INPUT
    const userInput = val.trim().toUpperCase();
    // CHECK IF THE USER INPUT === A STOCK SYMBOL
    const symbolExists = StockData.some(el => el.symbol === userInput);
    if (symbolExists) {
      // CHECK TO SEE IF STOCK ALREADY EXISTS IN STOCKDATA OBJECT
      const alreadyExistsInStockDataObject = stocks.some(
        el => el.symbol === userInput
      );
      if (!alreadyExistsInStockDataObject) {
        const newStocks = [...stocks];
        const newStock = StockData.filter(x => x.symbol === userInput);
        newStocks.push(newStock[0]);
        setStocks(newStocks);
        setErrorState("");
      } else {
        setErrorState("Stock already added.");
      }
    } else {
      setErrorState("Please enter a valid stock symbol.");
    }
  };
  console.log(stocks);

  return (
    <InternalUseApp>
      <Header />
      <AddForm
        errorState={errorState}
        addStockClicked={stockSymbol => handleAddStockClicked(stockSymbol)}
      />
      <Dashboard StockData={stocks} />
    </InternalUseApp>
  );
};

export default App;
