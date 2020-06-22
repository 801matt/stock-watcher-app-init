import React, { useState, useEffect } from "react";
import MobileCard from "../MobileCard";
import TabletCard from "../TabletCard";
import { Tablet } from "../../sizing";
import styled from "styled-components";

const InternalUseDashboard = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  .dashboard__tablet-card {
    display: none;
  }
  @media (min-width: ${Tablet}) {
    .dashboard__mobile-card {
      display: none;
    }
    .dashboard__tablet-card {
      display: block;
    }
  }
`;

// GET WINDOW WIDTH

const Dashboard = ({ StockData }) => {
  return (
    <InternalUseDashboard>
      <div className="dashboard__mobile-card">
        <MobileCard StockData={StockData} />
      </div>
      <div className="dashboard__tablet-card">
        <TabletCard StockData={StockData} />
      </div>
    </InternalUseDashboard>
  );
};

export default Dashboard;
