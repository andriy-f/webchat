import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../layout'
import { serverUrl } from '../config'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        About page
      </h1>
      <div>
        Server: {serverUrl}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>About Page</title>
