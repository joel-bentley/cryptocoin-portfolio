import React from 'react';
import { connect } from 'react-redux';

import PortfolioOverview from '../components/PortfolioOverview';
import PortfolioTable from '../components/PortfolioTable';

import { selectors } from '../reducers/portfolio';

function Home(props) {
  return (
    <div>
      <PortfolioOverview overview={props.overview} />
      <PortfolioTable portfolio={props.portfolio} />
    </div>
  );
}

function mapStateToProps(state) {
  return selectors.calculateHoldings(state);
}

export default connect(mapStateToProps)(Home);
