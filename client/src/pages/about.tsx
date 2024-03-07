import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../layout'
import { serverUrl } from '../config'

import { MyH2 } from '../common/MyComponents'

const pageTitle = 'About'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='About'>
      <p>
        This is a simple chat application based on Websockets
      </p>
      <section>
        <MyH2>Features</MyH2>
        <ul className='list-disc list-inside'>
          <li>Real-time chat</li>
          <li>Authentication</li>
        </ul>
      </section>
      <section>
        <MyH2>Technologies</MyH2>
        <ul className='list-disc list-inside'>
          <li>React</li>
          <li>Websockets</li>
        </ul>
      </section>
      <section>
        <MyH2>Limitations</MyH2>
        <ul className='list-disc list-inside'>
          <li>Only messages sent after you connect are shown</li>
        </ul>
      </section>
      <section>
        <MyH2>Server</MyH2>
        <ul className='list-disc list-inside'>
          <li>URL: {serverUrl}</li>
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>{pageTitle}</title>
