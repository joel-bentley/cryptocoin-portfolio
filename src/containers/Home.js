import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import PortfolioOverview from '../components/PortfolioOverview';
import PortfolioTable from '../components/PortfolioTable';

import { actions } from '../reducers/portfolio';
import { selectors } from '../reducers/portfolio';

function Home(props) {
  return (
    <Fragment>
      <Segment>
        <PortfolioOverview overview={props.overview} />
      </Segment>
      <PortfolioTable
        portfolio={props.portfolio}
        addAsset={props.addAsset}
        removeAsset={props.removeAsset}
        editAsset={props.editAsset}
      />
    </Fragment>
  );
}

function mapStateToProps(state) {
  return selectors.calculateHoldings(state);
}

function mapDispatchToProps(dispatch) {
  return {
    addAsset: assetName => dispatch(actions.addAsset(assetName)),
    removeAsset: id => dispatch(actions.removeAsset(id)),
    editAsset: asset => dispatch(actions.editAsset(asset)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
