import React from "react";
import styled from "styled-components";
import { Desktop } from "../../sizing";
import {
  Green,
  LightGreen,
  DarkGreen,
  Red,
  LightRed,
  DarkRed,
  Caption
} from "../../colors";
import ArrowUp from "../../assets/arrowUp";
import ArrowDown from "../../assets/arrowDown";

const InternalUseTabletCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  .tablet-card {
    background: white;
    height: 10rem;
    width: calc(50% - 0.625rem);
    display: flex;
    margin: 0.3125rem;
    box-shadow: 0 0 24px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    /* CREATE THE DESIGNS FOR THE STOCK DATA VISUALIZER ON THE LEFT OF THE CARD */
    .tablet-card__visualizer {
      flex-basis: 6rem;
      flex-shrink: 0;
      display: flex;
      .tablet-card__high-low {
        padding: 0.8125rem 0.2125rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.75rem;
        font-weight: 700;
        color: white;
      }
      .tablet-card__range {
        flex-basis: 40%;
        position: relative;
        .tablet-card__bar {
          position: absolute;
          top: 1rem;
          right: 0.3375rem;
          width: 2px;
          height: 80%;
          .tablet-card__pointer {
            position: absolute;
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
    /* SET THE CUSTOM DESIGN FOR POSITIVE STOCK VISUALIZER */
    .tablet-card__visualizer.positive {
      background: linear-gradient(${LightGreen}, ${DarkGreen});
      .tablet-card__range {
        .tablet-card__bar {
          background: linear-gradient(white, transparent);
        }
      }
    }

    /* SET THE CUSTOM DESIGN FOR NEGATIVE STOCK VISUALIZER */
    .tablet-card__visualizer.negative {
      background: linear-gradient(${LightRed}, ${DarkRed});
      .tablet-card__range {
        .tablet-card__bar {
          background: linear-gradient(transparent, white);
        }
      }
    }

    /* CREATE THE DESIGNS FOR THE TEXT DATA ON THE RIGHT SIDE OF THE CARD */
    .tablet-card__text-data {
      padding: 1rem 0 1rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .tablet-card__company-identifiers {
        .tablet-card__company-name {
          white-space: nowrap;
          max-width: 10.75rem;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 1.125rem;
          font-weight: 800;
          text-transform: uppercase;
        }
        .tablet-card__company-symbol {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          color: ${Caption};
        }
      }
    }
    .tablet-card__current-price-data {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      .tablet-card__current-price {
        font-size: 1.75rem;
        margin-right: 0.75rem;
      }
      .tablet-card__current-price-stats {
        display: flex;
        & > div {
          margin-left: 0.25rem;
        }
        &:first-child {
          margin-left: 0;
        }
        .tablet-card__arrow {
        }
        .tablet-card__points {
        }
        .tablet-card__percentage {
        }
      }
      /* SET COLORS FOR POSITIVE STOCK STATUS */
      .tablet-card__current-price-stats.positive {
        color: ${Green};
      }
      /* SET COLORS FOR NEGATIVE STOCK STATUS */
      .tablet-card__current-price-stats.negative {
        color: ${Red};
      }
    }
    .tablet-card__open-high-low {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      max-width: 75%;
      .tablet-card__open-high-low--item {
        display: flex;
        font-size: 0.75rem;
        font-weight: 600;
        margin: 0 1rem 0.25rem 0;
        .tablet-card__open-high-low--text {
          margin-right: 0.3125rem;
          color: ${Caption};
          text-transform: uppercase;
        }
        .tablet-card__open-high-low--value {
        }
      }
    }
  }

  /* MAKE ADJUSTMENTS TO TABLET CARD FOR SIZES >= DESKTOP */
  @media (min-width: ${Desktop}) {
    .tablet-card {
      height: 8.625rem;
      width: calc(33% - 0.625rem);
      .tablet-card__text-data {
        .tablet-card__company-identifiers {
          .tablet-card__company-name {
            max-width: 15.1875rem;
          }
        }
      }
      .tablet-card__current-price-data {
        .tablet-card__currnet-price {
        }
        .tablet-card__current-price-stats {
        }
      }
      .tablet-card__open-high-low {
        max-width: 100%;
      }
    }
  }
`;

const TabletCard = ({ StockData }) => {
  return (
    <InternalUseTabletCard>
      {StockData.map(stock => {
        // CREATE AN ALGORYTHM THAT CALCULATES THE PERCENTAGE OF NUM X BETWEEN TWO POINTS A, B
        const getPercentage = () => {
          const a = stock.priceHigh - stock.priceCurrent;
          const b = stock.priceHigh - stock.priceLow;
          const x = (a / b) * 100;
          const percentage = 100 - Math.round(x);
          return percentage;
        };

        // CREATE A ROUND FUNCTION THAT GENERAGES THE DESIRED DECIMAL POINTS
        const round = (value, decimals) =>
          Number(Math.round(value + "e" + decimals) + "e-" + decimals);

        // CALCULATE STOCK DATA BASED ON PROPS
        const status =
          stock.priceCurrent > stock.priceOpen ? "positive" : "negative";
        const diffPoints = round(stock.priceCurrent - stock.priceOpen, 2);
        const diffPercentage = round(
          ((stock.priceCurrent - stock.priceOpen) / stock.priceOpen) * 100,
          2
        );

        // CALCULATE THE PRICES WITH COMMAS FOR VALUES >= 1,000
        const numberWithCommas = x => {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        // CREATE THE CSS VALUE FOR THE PRICE VISUALIZER POINTER
        const visualizerPointerValue = `calc((100% - ${getPercentage()}%) - 6px)`;
        return (
          <div className="tablet-card" key={stock.id}>
            <div className={`tablet-card__visualizer ${status}`}>
              <div className="tablet-card__range">
                <div className="tablet-card__bar">
                  <div
                    className="tablet-card__pointer"
                    style={{ top: visualizerPointerValue }}
                  ></div>
                </div>
              </div>
              <div className="tablet-card__high-low">
                <div className="tablet-card__high">{stock.priceHigh}</div>
                <div className="tablet-card__low">{stock.priceLow}</div>
              </div>
            </div>
            <div className="tablet-card__text-data">
              <div className="tablet-card__company-identifiers">
                <div className="tablet-card__company-name">{stock.name}</div>
                <div className="tablet-card__company-symbol">
                  {stock.symbol}
                </div>
              </div>
              <div className="tablet-card__current-price-data">
                <div className="tablet-card__current-price">
                  {numberWithCommas(stock.priceCurrent)}
                </div>
                <div className={`tablet-card__current-price-stats ${status}`}>
                  <div className="tablet-card__arrow">
                    {status === "positive" ? (
                      <ArrowUp fill={Green} width={8} />
                    ) : (
                      <ArrowDown fill={Red} width={8} />
                    )}
                  </div>
                  <div className="tablet-card__points">{diffPoints}</div>
                  <div className="tablet-card__percentage">
                    ({diffPercentage}%)
                  </div>
                </div>
              </div>
              <div className="tablet-card__open-high-low">
                <div className="tablet-card__open-high-low--item">
                  <div className="tablet-card__open-high-low--text">Open</div>
                  <div className="tablet-card__open-high-low--value">
                    {stock.priceOpen}
                  </div>
                </div>
                <div className="tablet-card__open-high-low--item">
                  <div className="tablet-card__open-high-low--text">High</div>
                  <div className="tablet-card__open-high-low--value">
                    {stock.priceHigh}
                  </div>
                </div>
                <div className="tablet-card__open-high-low--item">
                  <div className="tablet-card__open-high-low--text">Low</div>
                  <div className="tablet-card__open-high-low--value">
                    {stock.priceLow}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </InternalUseTabletCard>
  );
};

export default TabletCard;
