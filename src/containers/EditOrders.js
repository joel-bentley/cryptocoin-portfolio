import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon } from 'semantic-ui-react';

import { actions as ordersActions } from '../reducers/orders';
import { selectors as ordersSelectors } from '../reducers/orders';

class EditOrders extends Component {
  render() {
    const { asset, assetOrders } = this.props;

    return <Fragment>asdf</Fragment>;
  }
}

function mapStateToProps(state, props) {
  return {
    assetOrders: ordersSelectors.getAssetOrders(state, props.asset.name),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addOrder: order => dispatch(ordersActions.addOrder(order)),
    removeOrder: order => dispatch(ordersActions.removeOrder(order)),
    editOrder: order => dispatch(ordersActions.editOrder(order)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOrders);
