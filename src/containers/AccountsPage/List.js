import React, { Component, PropTypes } from 'react';

import Ul from 'components/Ul';
import ListItem from './ListItem';


export class List extends Component {
  constructor(props) {
    super(props);
  }

  editItem = () => {
    console.log('Edit');
  }

  deleteItem = () => {
    console.log('Delete');
  }

  saveItem = () => {
    console.log('Save');
  }

  cancelItemEditing = () => {
    console.log('Cancel');
  }

  renderItems = () => {
    return this.props.accounts.map((account, i) => {
      return (
        <ListItem
          account={account}
          cancelItemEditing={this.cancelItemEditing}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          key={i}
          saveItem={this.saveItem}
        />
      );
    });
  }

  render() {
    return (
      <Ul>
        {this.renderItems()}
      </Ul>
    );
  }
}

List.propTypes = {
  // TODO
};

export default List;
