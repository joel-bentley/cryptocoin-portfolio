import React, { Component } from 'react';
import { Modal, Button, Icon, Input } from 'semantic-ui-react';

import assetList from '../data/assetList.json';

class AddAssetModal extends Component {
  state = {
    modalOpen: false,
    assetName: '',
  };

  handleChange = (e, { value }) =>
    this.setState({ assetName: value.toUpperCase() });

  handleSubmit = () => {
    const { assetName } = this.state;
    if (assetList.includes(assetName)) {
      this.setState({ modalOpen: false });
      this.props.handleSubmit(assetName);
    } else {
      this.setState({ assetName: '' });
    }
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
        size="tiny"
      >
        <Modal.Header>Add Asset</Modal.Header>
        <Modal.Content>
          <Input
            list="assets"
            placeholder="Choose Name..."
            value={this.state.assetName}
            onChange={this.handleChange}
          />
          <datalist id="assets">
            {assetList.map(assetName => (
              <option value={assetName} key={assetName} />
            ))}
          </datalist>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.setState({ modalOpen: false })}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button onClick={this.handleSubmit}>
            <Icon name="plus" /> Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddAssetModal;
