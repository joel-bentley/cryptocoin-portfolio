import React, { Component, Fragment } from 'react';
import { Table, Icon } from 'semantic-ui-react';

import AddAssetModal from './AddAssetModal';
import EditAssetModal from './EditAssetModal';
import RemoveAssetModal from './RemoveAssetModal';

import 'cryptocoins-icons/webfont/cryptocoins.css';
import 'cryptocoins-icons/webfont/cryptocoins-colors.css';

class PortfolioTable extends Component {
  render() {
    const { portfolio, addAsset, editAsset, removeAsset } = this.props;

    return (
      <Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Asset</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Quantity</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Latest Price
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Market Value
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Book Value</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Unrealized Gain
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Edit/Remove
              </Table.HeaderCell>
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
                  <Table.Cell textAlign="center">
                    <i
                      className={`cc ${asset.name}`}
                      style={{ fontSize: 'xx-large' }}
                    />
                    <br />
                    <strong style={{ letterSpacing: 1 }}>{asset.name}</strong>
                  </Table.Cell>
                  <Table.Cell textAlign="center">{asset.quantity}</Table.Cell>
                  <Table.Cell textAlign="center">
                    $ {asset.price.toFixed(2)}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    $ {asset.marketValue.toFixed(2)}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    $ {asset.bookValue.toFixed(2)}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    {unrealizedGainMarkup}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <EditAssetModal
                      buttonProps={{
                        icon: 'write',
                        circular: true,
                        color: 'teal',
                      }}
                      asset={asset}
                      handleSubmit={editAsset}
                    />
                    <RemoveAssetModal
                      buttonProps={{
                        icon: 'delete',
                        circular: true,
                        color: 'orange',
                      }}
                      asset={asset}
                      handleSubmit={removeAsset}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <div style={{ height: '1em' }} />
        <AddAssetModal
          buttonProps={{
            content: (
              <div>
                <Icon name="plus" /> Add Coin
              </div>
            ),
            style: { float: 'right' },
            color: 'blue',
          }}
          handleSubmit={addAsset}
        />
      </Fragment>
    );
  }
}

export default PortfolioTable;
