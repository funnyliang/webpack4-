import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount(){
    console.log(this.props.match)
  }
  render() {
    return (<h2>List {this.props.match.params.id}</h2>);
  }
}

export default List;
