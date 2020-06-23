// import React, { Component, Fragment} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Books from './components/Books';
// import BookPage from './components/BookPage';
// import './App.css';


//  function getParcelData(url = '', data = {}) {
//   // Default options are marked with *
//     return fetch(url, {
//         method: 'get', 
//         headers: {
//             'Content-Type': 'application/json',
//             'X-MC-AUTH': 'aaf18da9-34db-4c4d-9bdb-645c37364dd6'
//         },
//     })
//     .then(data => data.json()); // parses JSON response into native Javascript objects 
// }
import React, { Component } from 'react';


class FetchApproach extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    const API = 'https://hn.algolia.com/api/v1/search?query=';
    const DEFAULT_QUERY = 'redux';

    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default FetchApproach;