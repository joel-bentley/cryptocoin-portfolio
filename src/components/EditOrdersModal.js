import React, { Component } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

import EditOrders from '../containers/EditOrders';

class EditOrdersModal extends Component {
  state = {
    modalOpen: false,
  };

  render() {
    const { buttonProps, asset } = this.props;
    const { modalOpen } = this.state;

    return (
      <Modal
        size="large"
        trigger={
          <Button
            {...buttonProps}
            onClick={() => this.setState({ modalOpen: true })}
          />
        }
        open={modalOpen}
        onClose={() => this.setState({ modalOpen: false })}
      >
        <Modal.Header>Add/Edit {asset.name} Orders </Modal.Header>
        <Modal.Content>
          <EditOrders asset={asset} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.setState({ modalOpen: false })}>
            <Icon name="checkmark" /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditOrdersModal;
