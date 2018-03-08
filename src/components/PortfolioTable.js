import React from 'react';
import { Table } from 'semantic-ui-react';

const PortfolioTable = ({ portfolio }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Asset</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Quantity</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Average Cost</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Market Value</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Book Value</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            Unrealized Gain
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">% of Portfolio</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {portfolio.map(asset => {
          const unrealizedGainColor =
            asset.unrealizedGain >= 0 ? 'black' : 'red';

          const unrealizedGainMarkup = (
            <div style={{ color: unrealizedGainColor }}>
              $ {asset.unrealizedGain.toFixed(2)}
              <div style={{ fontSize: 'smaller' }}>
                {(100 * asset.unrealizedGainPercent).toFixed(1)} %
              </div>
            </div>
          );
          return (
            <Table.Row key={asset.name}>
              <Table.Cell textAlign="center">{asset.name}</Table.Cell>
              <Table.Cell textAlign="center">{asset.quantity}</Table.Cell>
              <Table.Cell textAlign="center">
                $ {asset.price.toFixed(2)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                $ {asset.marketValue.toFixed(2)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                $ {asset.averageCost.toFixed(2)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                $ {asset.bookValue.toFixed(2)}
              </Table.Cell>
              <Table.Cell textAlign="center">{unrealizedGainMarkup}</Table.Cell>
              <Table.Cell textAlign="center">
                {(100 * asset.portfolioPercent).toFixed(1)} %
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default PortfolioTable;
