import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
// import { generateRandomId } from '../util/util';

const AssetEditModal = ({
  open,
  trigger,
  asset,
  handleCancel,
  handleSubmit,
}) => {
  return (
    <Modal
      trigger={trigger}
      open={open}
      onClose={handleCancel}
      closeIcon={<Button style={{ float: 'right' }}>Cancel</Button>}
      closeOnEscape={true}
    >
      <Modal.Header>Edit Asset</Modal.Header>
      <Modal.Content>asdf</Modal.Content>
    </Modal>
  );
};

export default AssetEditModal;
