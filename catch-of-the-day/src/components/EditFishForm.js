import React, { Component } from 'react';

class EditFishForm extends Component {
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className='fish-edit'>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}>
        </input>
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}>
        </input>
        <select
          type="text"
          name='status'
          onChange={this.handleChange}
          value={this.props.fish.status}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}>
        </textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}>
        </input>
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;