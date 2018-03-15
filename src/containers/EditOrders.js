import React from 'react';
import { connect } from 'react-redux';

import { actions as ordersActions } from '../reducers/orders';
import { selectors as ordersSelectors } from '../reducers/orders';

import EditOrdersTable from '../components/EditOrdersTable';

function EditOrders(props) {
  return <EditOrdersTable {...props} />;
}

function mapStateToProps(state, props) {
  return {
    assetOrders: ordersSelectors.getAssetOrders(state, props.asset.name),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addOrder: assetName => dispatch(ordersActions.addOrder(assetName)),
    removeOrder: orderId => dispatch(ordersActions.removeOrder(orderId)),
    editOrder: order => dispatch(ordersActions.editOrder(order)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOrders);
