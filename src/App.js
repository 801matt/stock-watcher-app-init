import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import AddForm from "./components/AddForm";
import Dashboard from "./components/Dashboard";

const InternalUseApp = styled.div`
  padding: 1rem;
`;

const App = () => {
  return (
    <InternalUseApp>
      <Header />
      <AddForm />
      <Dashboard />
    </InternalUseApp>
  );
};

export default App;
