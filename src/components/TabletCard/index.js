import React from "react";
import styled from "styled-components";
import {
  Green,
  LightGreen,
  DarkGreen,
  Red,
  LightRed,
  DarkRed,
  Caption
} from "../../colors";

const InternalUsetabletCard = styled.div`
  height: 10rem;
  display: flex;
  .tablet-card__visualizer {
    flex-basis: 6rem;
    flex-shrink: 0;
    background: linear-gradient(${LightRed}, ${DarkRed});
    display: flex;
    .tablet-card__high-low {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .tablet-card__range {
      flex-basis: 40%;
      position: relative;
      background: green;
      .tablet-card__bar {
        position: absolute;
        top: 1rem;
        right: 0.3375rem;
        width: 2px;
        height: 80%;
        background: white;
        .tablet-card__pointer {
          position: absolute;
          top: -0.375rem;
          right: 0.125rem;
          width: 0;
          height: 0;
          border-top: 0.375rem solid transparent;
          border-bottom: 0.375rem solid transparent;
          border-left: 0.75rem solid white;
        }
      }
    }
  }
`;

const TabletCard = () => {
  const current = 706.32;
  const high = 709.28;
  const low = 689.47;

  const getCurrentAsAPercentage = () => {
    let highMinusLow = high - low;
    let highMinusCurrent = high - current;
    let basePercentage = (highMinusCurrent / highMinusLow) * 100;
    let percentage = 100 - Math.floor(basePercentage);
    return percentage;
  };

  return (
    <InternalUsetabletCard>
      {getCurrentAsAPercentage()}
      <div className="tablet-card__visualizer">
        <div className="tablet-card__range">
          <div className="tablet-card__bar">
            <div className="tablet-card__pointer"></div>
          </div>
        </div>
        <div className="tablet-card__high-low">
          <div className="tablet-card__high">HIGH</div>
          <div className="tablet-card__low">LOW</div>
        </div>
      </div>
      <div className="tablet-card__text-data">
        <div className="tablet-card__company-name">ALPHABET</div>
        <div className="tablet-card__company">GOOG</div>
        <div className="tablet-card__current-price-data">
          <div className="tablet-card__current-price">PRICE</div>
          <div className="tablet-card__current-price-stats">
            <div className="tablet">A</div>
            <div className="tablet-card__points">POINTS</div>
            <div className="tablet-card__percentage">PERCENTAGE</div>
          </div>
        </div>
      </div>
    </InternalUsetabletCard>
  );
};

export default TabletCard;
