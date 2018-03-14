import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon, Input, Select } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { formatDate } from '../util';

import { actions as ordersActions } from '../reducers/orders';
import { selectors as ordersSelectors } from '../reducers/orders';

class EditOrders extends Component {
  state = {
    editingId: null,
    dateInput: null,
    typeInput: null,
    quantityInput: null,
    priceInput: null,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleChangeDate = date => {
    this.setState({
      dateInput: date,
    });
  };

  render() {
    const {
      editingId,
      dateInput,
      typeInput,
      quantityInput,
      priceInput,
    } = this.state;
    const { assetOrders, addOrder, removeOrder, editOrder } = this.props;

    return (
      <Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Date</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Order Type</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Quantity</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Edit/Remove
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {assetOrders.map(order => (
              <Table.Row key={order.id}>
                {order.id === editingId ? (
                  <Fragment>
                    <Table.Cell textAlign="center">
                      <div className="ui input">
                        <DatePicker
                          name="dateInput"
                          selected={dateInput}
                          onChange={this.handleChangeDate}
                          dateFormat="YYYY-MM-DD"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Select
                        name="typeInput"
                        value={typeInput}
                        options={[
                          { text: 'BUY', value: 'BUY' },
                          { text: 'SELL', value: 'SELL' },
                        ]}
                        onChange={this.handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Input
                        name="quantityInput"
                        value={quantityInput}
                        onChange={this.handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Input
                        name="priceInput"
                        label="$"
                        value={!!priceInput ? priceInput : ''}
                        onChange={this.handleChange}
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        color="blue"
                        content="Save"
                        onClick={() => {
                          editOrder({
                            id: editingId,
                            date: dateInput,
                            type: typeInput,
                            quantity: parseFloat(quantityInput),
                            price: parseFloat(priceInput),
                          });
                          this.setState({ editingId: null });
                        }}
                      />
                      <Button
                        color="orange"
                        content="Cancel"
                        onClick={() => this.setState({ editingId: null })}
                      />
                    </Table.Cell>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Table.Cell textAlign="center">
                      {formatDate(order.date)}
                    </Table.Cell>
                    <Table.Cell textAlign="center">{order.type}</Table.Cell>
                    <Table.Cell textAlign="center">{order.quantity}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {order.price && `$ ${order.price}`}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon="write"
                        circular
                        color="teal"
                        onClick={() =>
                          this.setState({
                            editingId: order.id,
                            dateInput: moment(order.date),
                            typeInput: order.type,
                            quantityInput: order.quantity,
                            priceInput: order.price,
                          })
                        }
                      />
                      <Button
                        icon="delete"
                        circular
                        color="orange"
                        onClick={() => removeOrder(order.id)}
                      />
                    </Table.Cell>
                  </Fragment>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Button style={{ float: 'right' }} onClick={addOrder}>
          <Icon name="plus" /> Add an Order
        </Button>
        <div style={{ height: '2em' }} />
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    assetOrders: ordersSelectors.getAssetOrders(state, props.asset.name),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addOrder: () => dispatch(ordersActions.addOrder()),
    removeOrder: orderId => dispatch(ordersActions.removeOrder(orderId)),
    editOrder: order => dispatch(ordersActions.editOrder(order)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOrders);
