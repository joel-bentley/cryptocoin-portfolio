import React, { Component } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button>
            <Icon name="remove" /> No
          </Button>
          <Button>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default RemoveAssetModal;
