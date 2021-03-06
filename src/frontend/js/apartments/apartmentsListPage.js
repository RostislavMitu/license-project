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
      <div className="wrapper small-1">
        <div className="background-page">
          <div className="search-box-container">
            <li className="rental-property"><a>Rental Property</a></li>
            <div className="filter-wrapper">
              <ul className="filter">
                <div className="search-wrapper">
                  <input className="search-type" type="text" placeholder="Search by city, street, number of rooms" value={this.state.searchQuery}
                         onChange={this.onSearchQueryChange.bind(this)}/>
                </div>
                <li className="city-select">
                  <select className="filter__select" id="city" value={this.state.city}
                          onChange={this.onCityChange.bind(this)}>
                    <option value="">City</option>
                    <option value="Chisinau">Chisinau</option>
                    <option value="Cricova">Cricova</option>
                    <option value="Balti">Balti</option>
                  </select>
                </li>
                <li className="beds-select">
                  <select className="filter__select" id="beds">
                    <option value="">Beds</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                </li>
                <li className="floor-select">
                  <select className="filter__select" id="floor">
                    <option value="">Floor</option>
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
          </div>
        </div>
        <div className="product-list">
          <h2 className="title">Homes around the world</h2>
          <ApartmentList searchQuery={this.state.searchQuery} city={this.state.city} />
        </div>
      </div>
      );
  }
}

export default ApartmentsListPage;
