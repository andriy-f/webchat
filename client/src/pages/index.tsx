import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../layout'
import { serverUrl } from '../config'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>Main page</div>
      <div>
        Server url: {serverUrl}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
