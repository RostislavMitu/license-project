import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_APARTMENT = gql`
  mutation createApartment($title: String!, $city: String!, $rooms: Int!, $price: String!, $description: String!) {
    createApartment(title: $title, city: $city, rooms: $rooms, price: $price, description: $description) {
      id
      title,
      city,
      rooms,
      price,
      description
    }
  }
`;

export default class AddApartmentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      city: '',
      rooms: '',
      price: '',
      description: ''
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onRoomsChange = this.onRoomsChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  onCityChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  onRoomsChange(event) {
    this.setState({
      rooms: event.target.value
    });
  }

  onPriceChange(event) {
    this.setState({
      price: event.target.value
    });
  }

  onDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return (
      <Mutation mutation={ADD_APARTMENT}>
        {(addApartment) => (
          <form className="sign-form">
            <div className="input-wrapper">
              <label className="offscreen" htmlFor="title">Title</label>
              <input id="title" className="sign-form__input" type="text" placeholder="Title" onChange={this.onTitleChange} value={this.state.title} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="city" className="offscreen">City</label>
              <input id="city" className="sign-form__input" type="text" placeholder="City" onChange={this.onCityChange} value={this.state.city} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="rooms" className="offscreen">Rooms</label>
              <input id="rooms" className="sign-form__input" type="number" placeholder="Rooms" onChange={this.onRoomsChange} value={this.state.rooms} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="price" className="offscreen">Price</label>
              <input id="price" className="sign-form__input" type="number" min="1" step="any" placeholder="Price" onChange={this.onPriceChange} value={this.state.price} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="description">Description</label>
              <textarea id="description" className="sign-form__input" />
            </div>
            <div className="input-wrapper">
              <input className="sign-form__input submit" id="add_apartment" type="button" value="Add" onClick={() => {
                addApartment({ variables: this.state }).then(() => window.location.reload());
              }} />
            </div>
          </form>
        )}
      </Mutation>
    );
  }
}
