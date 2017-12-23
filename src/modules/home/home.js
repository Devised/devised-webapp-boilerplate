import React from 'react'
import { Button } from 'antd'
import Page from '../core/page'


class Home extends React.Component {

  /**
   * constructor
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * render
   */
  render() {
    return (
      <Page>
        <Button type="primary">Hello.</Button>
      </Page>
    )
  }
}


export default Home
