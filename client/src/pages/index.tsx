import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../layout'
import Chat from '../features/chat/Chat'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Main page
      </h1>
      <Chat />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
