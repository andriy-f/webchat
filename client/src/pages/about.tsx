import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../layout'
import { serverUrl } from '../config'

const pageTitle = 'About'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='About'>
      <div>
        Server: {serverUrl}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>{pageTitle}</title>
