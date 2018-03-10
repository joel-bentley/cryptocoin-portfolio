import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { generateRandomId } from '../util/util';

class AddAssetModal extends Component {
  state = {
    modalOpen: false,
  };

  handleSubmit = newAsset => {
    this.setState({ modalOpen: false });
    this.props.handleSubmit(newAsset);
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
        closeIcon={<Button style={{ float: 'right' }}>Cancel</Button>}
        closeOnEscape={true}
      >
        <Modal.Header>Add Asset</Modal.Header>
        <Modal.Content>asdf</Modal.Content>
      </Modal>
    );
  }
}

export default AddAssetModal;
