import React, { Component } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

class RemoveAssetModal extends Component {
  state = {
    modalOpen: false,
  };

  handleSubmit = () => {
    this.setState({ modalOpen: false });
    this.props.handleSubmit(this.props.asset.name);
  };

  render() {
    const { buttonProps } = this.props;
    const { modalOpen } = this.state;

    return (
      <Modal
        trigger={
          <Button
            {...buttonProps}
            onClick={() => this.setState({ modalOpen: true })}
          />
        }
        open={modalOpen}
        onClose={() => this.setState({ modalOpen: false })}
      >
        <Modal.Header>Remove Asset</Modal.Header>
        <Modal.Content>
          <p>
            Are you sure you would like to remove this asset? (All transactions
            for this asset will also be deleted.)
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.setState({ modalOpen: false })}>
            <Icon name="remove" /> No
          </Button>
          <Button onClick={this.handleSubmit}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default RemoveAssetModal;
