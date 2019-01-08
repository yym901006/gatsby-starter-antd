import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Button
        type="primary"
        onClick={() => {
          console.info('test')
        }}
      >
        <Link to="/page-2/">Go to page 2</Link>
      </Button>
    </Layout>
  )
}

export default IndexPage
