import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

class Photo extends Component {
	state = {
		albumId: [],
		url: ''
	}

	componentDidMount() {
		axios.get('http://localhost:3001/')
	}
 render() {
   return (
     
   )
 }
}

export default Photo