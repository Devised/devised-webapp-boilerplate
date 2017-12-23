import React from 'react'
import { Layout } from 'antd'

class Page extends React.Component {

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
      <div className="core-page">
        <Layout className="core-page-layout">
          <Layout.Content className="core-page-content">
            {this.props.children}
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}

export default Page
