import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Segment, Header } from 'semantic-ui-react';

import PortfolioOverview from '../components/PortfolioOverview';
import PortfolioTable from '../components/PortfolioTable';

import { selectors } from '../reducers/portfolio';

function Home(props) {
  return (
    <Fragment>
      <Header as="h3" block attached="top">
        Portfolio
      </Header>
      <Segment attached>
        <PortfolioOverview overview={props.overview} />
        <PortfolioTable portfolio={props.portfolio} />
      </Segment>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return selectors.calculateHoldings(state);
}

export default connect(mapStateToProps)(Home);
