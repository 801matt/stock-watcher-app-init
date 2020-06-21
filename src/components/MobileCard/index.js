import React from "react";
import styled from "styled-components";
import { Caption, Green, Red } from "../../colors";
import ArrowUp from "../../assets/arrowUp";
import ArrowDown from "../../assets/arrowDown";

const InternalUseMobileCard = styled.div`
  background: white;
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 0 24px 0px rgba(0, 0, 0, 0.12);
  .mobile-card__section {
    display: flex;
    justify-content: space-between;
    .mobile-card__company-name {
      font-size: 0.875rem;
      font-weight: 800;
      text-transform: uppercase;
    }
    .mobile-card__company-symbol {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      color: ${Caption};
    }
    .mobile-card__price {
      font-size: 1.125rem;
    }
    .mobile-card__stats {
      display: flex;
      & > div {
        margin-left: 0.5rem;
      }
    }
    .posative {
      color: ${Green};
    }
    .negative {
      color: ${Red};
    }
  }
`;

const MobileCard = () => {
  const name = "Alphabet In. Cl...";
  const symbol = "GOOG";
  const current = 706.32;
  const open = 691;

  // CREATE A ROUND FUNCTION THAT GENERAGES THE DESIRED DECIMAL POINTS
  const round = (value, decimals) =>
    Number(Math.round(value + "e" + decimals) + "e-" + decimals);

  // CALCULATE STOCK DATA BASED ON PROPS
  const status = current > open ? "posative" : "negative";
  const points = round(current - open, 2);
  const percentage = round(((current - open) / open) * 100, 2);

  return (
    <InternalUseMobileCard>
      <div className="mobile-card__section top">
        <div className="mobile-card__company-name">{name}</div>
        <div className="mobile-card__price">706.32</div>
      </div>
      <div className="mobile-card__section bottom">
        <div className="mobile-card__company-symbol">{symbol}</div>
        <div className={`mobile-card__stats ${status}`}>
          <div className="mobile-card__arrow">
            {status === "posative" ? (
              <ArrowUp fill={Green} width={8} />
            ) : (
              <ArrowDown fill={Red} width={8} />
            )}
          </div>
          <div className="mobile-card__points">{points}</div>
          <div className="mobile-card__percentage">({percentage}%)</div>
        </div>
      </div>
    </InternalUseMobileCard>
  );
};

export default MobileCard;
