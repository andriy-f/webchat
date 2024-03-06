import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../layout'
import Chat from '../features/chat/Chat'

const pageTitle = 'Home'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <Chat />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>{pageTitle}</title>
