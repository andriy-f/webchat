
import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../features/layout/layout'
import Login from '../features/auth/Login'

const pageTitle = 'Login'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <Login />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>{pageTitle}</title>
