import React, { Component } from 'react'
import { Container, Header, Dropdown, Divider } from 'semantic-ui-react'
import { TWzipcode } from 'react-twzipcode'
import MyTWzipcode from './MyTWzipcode'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>react-twzipcode</Header>
        <Divider/>
        <Header as="h3">Basic</Header>
        <TWzipcode />
        <Divider/>
        <Header as="h3">With default value</Header>
        <TWzipcode defaultCity='臺北市'/>
        <br/>
        <TWzipcode defaultCity='臺北市' defaultDist='中正區' />
        <Header as="h3">Customer</Header>
        <TWzipcode className="ui selection dropdown" />
        <br/>
        <MyTWzipcode />
        <br/>
        <MyTWzipcode />
        <br/>
        <MyTWzipcode defaultCity='臺北市' />
        <br/>
        <MyTWzipcode defaultCity='臺北市' defaultDist='中正區' />
        
      </Container>
    )
  }
}