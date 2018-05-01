import React from 'react';
import ApartmentList from './apartmentsList';

class ApartmentsListPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      city: '',
      beds: '',
      floor: ''
    };
  }

  onSearchQueryChange(event) {
    this.setState({
      searchQuery: event.currentTarget.value
    });
  }

  onCityChange(event) {
    this.setState({
      city: event.currentTarget.value
    });
  }

  render() {
    return (
      <div className="wrapper small-1-3">
        <div className="filter-wrapper">
          <ul className="filter">
            <li>
              <label className="filter__label" htmlFor="city">City</label>
              <select className="filter__select" id="city" value={this.state.city} onChange={this.onCityChange.bind(this)}>
                <option value="">All</option>
                <option value="Chisinau">Chisinau</option>
                <option value="Cricova">Cricova</option>
                <option value="Balti">Balti</option>
              </select>
            </li>
            <li>
              <label className="filter__label" htmlFor="beds">Beds</label>
              <select className="filter__select" id="beds">
                <option value="">All</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </li>
            <li>
              <label className="filter__label" htmlFor="floor">Floor</label>
              <select className="filter__select" id="floor">
                <option value="">All</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="product-list">
          <h2 className="title">Homes around the world</h2>
          <div className="search-wrapper">
            <input type="text" placeholder="search..." value={this.state.searchQuery} onChange={this.onSearchQueryChange.bind(this)} />
          </div>
          <ApartmentList searchQuery={this.state.searchQuery} city={this.state.city} />
        </div>
      </div>
      );
  }
}

export default ApartmentsListPage;
