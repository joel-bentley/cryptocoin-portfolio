import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import PortfolioOverview from '../components/PortfolioOverview';
import PortfolioTable from '../components/PortfolioTable';

import { actions as assetsActions } from '../reducers/assets';
import { actions as ordersActions } from '../reducers/orders';
import { selectors } from '../reducers';

class Home extends Component {
  removeAssetAndOrders = assetName => {
    this.props.removeAsset(assetName);
    this.props.removeAllAssetOrders(assetName);
  };

  render() {
    return (
      <Fragment>
        <Segment>
          <PortfolioOverview overview={this.props.overview} />
        </Segment>
        <PortfolioTable
          portfolio={this.props.portfolio}
          addAsset={this.props.addAsset}
          removeAsset={this.removeAssetAndOrders}
          editAsset={this.props.editAsset}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return selectors.calculateHoldings(state);
}

function mapDispatchToProps(dispatch) {
  return {
    addAsset: assetName => dispatch(assetsActions.addAsset(assetName)),
    removeAsset: assetName => dispatch(assetsActions.removeAsset(assetName)),
    removeAllAssetOrders: assetName =>
      dispatch(ordersActions.removeAllAssetOrders(assetName)),
    editAsset: asset => dispatch(assetsActions.editAsset(asset)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
