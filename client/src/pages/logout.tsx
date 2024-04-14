import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../features/layout/layout'
import Logout from '../features/auth/Logout'

const pageTitle = 'Logout'

const LogoutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <Logout />
    </Layout>
  )
}

export default LogoutPage

export const Head: HeadFC = () => <title>{pageTitle}</title>
