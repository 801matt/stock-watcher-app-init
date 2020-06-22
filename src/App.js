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
    padding: 2rem;
  }
`;

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [errorState, setErrorState] = useState(false);

  const handleAddStockClicked = val => {
    const handleValidInput = stockID => {
      console.log(stockID.id);
      setErrorState(false);
    };
    const handleInvalidInput = () => {
      setErrorState(true);
    };
    // SET ERROR TO TRUE IF INPUT IS EMPTY
    // CHECK IF THE USER INPUT === A STOCK SYMBOL
    const symboleExists = () => {
      return StockData.some(el => {
        return el.symbol === val;
      });
    };
    if (symboleExists()) {
      const newStocks = [...stocks];
      const newStock = StockData.filter(x => x.symbol === val);
      newStocks.push(newStock[0]);
      setStocks(newStocks);
      // console.log(newStock);
    } else {
      setErrorState(true);
    }
  };
  console.log(stocks);

  return (
    <InternalUseApp>
      <Header />
      <AddForm
        hasError={errorState}
        addStockClicked={stockSymbol => handleAddStockClicked(stockSymbol)}
      />
      <Dashboard StockData={StockData} />
    </InternalUseApp>
  );
};

export default App;
