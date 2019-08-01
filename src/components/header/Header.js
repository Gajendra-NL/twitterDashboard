import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // Set the default state of the component
    this.state = {
      searchString: '',
    };
  }

  render() {
    return (
      <div className="layout">
        <div className="layout__navbar navbar">
          <div className="navbar__logo"><i className="fab fa-twitter"></i></div>
          <div className="navbar__search search">
            <input
              placeholder="Search Twitter"
              onChange={e => this.setState({ searchString: e.target.value })}
            />
            <i className="fas fa-search"></i>
          </div>
          <button className="navbar__search__button" onClick={this.onPressNewSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }

  onPressNewSearch = () => {
    this.props.onClickNewSearch();
    this.props.onNewSearch(this.state.searchString);
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onNewSearch: payload => dispatch({ type: 'NEW_SEARCH', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
