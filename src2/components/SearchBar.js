import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: 'Search for notes!'
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
  }
  
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.state.placeholder}
      />
      <Link to={`../works/notes/search/${this.state.value}`}>
        <input
          type="submit"
          value="Search"
        />
      </Link>
    </form>
    );
  }
  }

  export default SearchBar;