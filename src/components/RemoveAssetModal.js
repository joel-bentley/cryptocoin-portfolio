import React, { Component, Fragment } from 'react';
import { Confirm, Button } from 'semantic-ui-react';

class RemoveAssetModal extends Component {
  state = {
    modalOpen: false,
  };

  handleSubmit = id => {
    this.setState({ modalOpen: false });
    this.props.handleSubmit(id);
  };

  render() {
    const { buttonProps, asset } = this.props;
    const { modalOpen } = this.state;

    return (
      <Fragment>
        <Button
          {...buttonProps}
          onClick={() => this.setState({ modalOpen: true })}
        />
        <Confirm
          open={modalOpen}
          onCancel={() => this.setState({ modalOpen: false })}
          onConfirm={() => this.handleSubmit(asset.id)}
        />
      </Fragment>
    );
  }
}

export default RemoveAssetModal;
