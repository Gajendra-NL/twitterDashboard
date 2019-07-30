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
      <div class="layout">
        <div class="layout__navbar navbar">
          <div class="navbar__logo"><i class="fab fa-twitter"></i></div>
          <div class="navbar__search search">
            <input
              placeholder="Search Twitter"
              onChange={e => this.setState({ searchString: e.target.value })}
            />
            <i class="fas fa-search"></i>
          </div>
          <button class="navbar__search__button" onClick={() => this.props.saveSearchString(this.state.searchString)}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    saveSearchString: payload => dispatch({ type: 'SAVE_SEARCH_STRING', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
