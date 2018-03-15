import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

class RemoveAssetModal extends Component {
  state = {
    modalOpen: false,
  };

  handleSubmit = () => {
    this.setState({ modalOpen: false });
    this.props.handleSubmit(this.props.asset.name);
  };

  render() {
    const { buttonProps, asset } = this.props;
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
            Are you sure you would like to remove {asset.name} from your
            portfolio? (All transactions for {asset.name} will also be deleted.)
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.setState({ modalOpen: false })}>
            Cancel
          </Button>
          <Button color="blue" onClick={this.handleSubmit}>
            Yes, remove {asset.name}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default RemoveAssetModal;
