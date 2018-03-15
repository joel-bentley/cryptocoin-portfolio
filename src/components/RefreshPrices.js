import React, { Fragment } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import moment from 'moment';

function RefreshPrices({ getCurrentPrices, lastUpdateTime }) {
  return (
    <Fragment>
      <Button onClick={getCurrentPrices}>
        <Icon name="refresh" /> Get Current Prices
      </Button>
      {!!lastUpdateTime
        ? ` Last update was at ${moment(lastUpdateTime).format(
            'h:mma on dddd, MMMM Do, YYYY'
          )}.`
        : ' Prices have not been updated yet. Press button to left to get current prices.'}
      <div style={{ height: '1em' }} />
    </Fragment>
  );
}

export default RefreshPrices;
