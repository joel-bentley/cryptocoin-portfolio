import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

function PortfolioOverview({ overview }) {
  const totalUnrealizedGainColor =
    overview.totalUnrealizedGain >= 0 ? 'black' : 'red';

  const totalUnrealizedGainMarkup = (
    <div style={{ color: totalUnrealizedGainColor, marginTop: '-1em' }}>
      $ {overview.totalUnrealizedGain.toFixed(2)}
      <div style={{ fontSize: 'smaller' }}>
        {(100 * overview.totalUnrealizedGainPercent).toFixed(1)} %
      </div>
    </div>
  );

  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h5">Total Market Value</Header>
          $ {overview.totalMarketValue.toFixed(2)}
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Header as="h5">Total Book Value</Header>
          $ {overview.totalBookValue.toFixed(2)}
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Header as="h5">Total Unrealized Gain</Header>
          {totalUnrealizedGainMarkup}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PortfolioOverview;
