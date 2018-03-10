import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

class EditAssetModal extends Component {
  state = {
    modalOpen: false,
  };

  handleSubmit = updatedAsset => {
    this.setState({ modalOpen: false });
    this.props.handleSubmit(updatedAsset);
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
        closeIcon={<Button style={{ float: 'right' }}>Cancel</Button>}
        closeOnEscape={true}
      >
        <Modal.Header>Edit Asset</Modal.Header>
        <Modal.Content>asdf</Modal.Content>
      </Modal>
    );
  }
}

export default EditAssetModal;
