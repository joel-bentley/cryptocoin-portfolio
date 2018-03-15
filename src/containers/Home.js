import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import RefreshPrices from '../components/RefreshPrices';
import PortfolioOverview from '../components/PortfolioOverview';
import PortfolioTable from '../components/PortfolioTable';

import { actions as assetsActions } from '../reducers/assets';
import { actions as ordersActions } from '../reducers/orders';
import { selectors } from '../reducers';
import { selectors as timeSelectors } from '../reducers/time';

class Home extends Component {
  removeAssetAndOrders = assetName => {
    this.props.removeAsset(assetName);
    this.props.removeAllAssetOrders(assetName);
  };

  getCurrentPrices = () => {
    const assetList = this.props.portfolio.map(asset => asset.name);
    this.props.getCurrentPrices(assetList);
  };

  render() {
    return (
      <Fragment>
        <RefreshPrices
          getCurrentPrices={this.getCurrentPrices}
          lastUpdateTime={this.props.lastUpdateTime}
        />
        <PortfolioOverview overview={this.props.overview} />
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
  return {
    ...selectors.calculateHoldings(state),
    lastUpdateTime: timeSelectors.getLastUpdateTime(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addAsset: assetName => dispatch(assetsActions.addAsset(assetName)),
    removeAsset: assetName => dispatch(assetsActions.removeAsset(assetName)),
    removeAllAssetOrders: assetName =>
      dispatch(ordersActions.removeAllAssetOrders(assetName)),
    getCurrentPrices: assetList =>
      dispatch(assetsActions.fetchCurrentPrices(assetList)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
