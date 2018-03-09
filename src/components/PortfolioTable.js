import React, { Component, Fragment } from 'react';
import { Table, Button, Confirm, Icon } from 'semantic-ui-react';

import AssetEditModal from './AssetEditModal';

import 'cryptocoins-icons/webfont/cryptocoins.css';
import 'cryptocoins-icons/webfont/cryptocoins-colors.css';

class PortfolioTable extends Component {
  state = {
    editModalOpen: false,
    removeModalOpen: false,
  };

  handleEditSubmit = asset => {};

  handleRemoveConfirm = id => {
    this.setState({ removeModalOpen: false });
    this.props.removeAsset(id);
  };

  render() {
    const { portfolio } = this.props;
    const { editModalOpen, removeModalOpen } = this.state;

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
                    <AssetEditModal
                      open={editModalOpen}
                      trigger={
                        <Button
                          icon="write"
                          circular
                          color="teal"
                          onClick={() => this.setState({ editModalOpen: true })}
                        />
                      }
                      asset={asset}
                      handleCancel={() =>
                        this.setState({ editModalOpen: false })
                      }
                      handleSubmit={this.handleEditSubmit}
                    />
                    <Button
                      icon="delete"
                      circular
                      color="orange"
                      onClick={() => this.setState({ removeModalOpen: true })}
                    />
                    <Confirm
                      open={removeModalOpen}
                      onCancel={() => this.setState({ removeModalOpen: false })}
                      onConfirm={() => this.handleRemoveConfirm(asset.id)}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <div style={{ height: '1em' }} />
        <AssetEditModal
          open={editModalOpen}
          trigger={
            <Button
              style={{ float: 'right' }}
              color="blue"
              onClick={() => this.setState({ editModalOpen: true })}
            >
              <Icon name="plus" /> Add Coin
            </Button>
          }
          asset={{}}
          handleCancel={() => this.setState({ editModalOpen: false })}
          handleSubmit={this.handleEditSubmit}
        />
      </Fragment>
    );
  }
}

export default PortfolioTable;
