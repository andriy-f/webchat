import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../features/layout/layout'
import { serverUrl } from '../config'

import { MyH2 } from '../common/MyComponents'
import ExternalLink from '../common/ExternalLink'

const pageTitle = 'About'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='About'>
      <p>
        This is a simplified chat application based on Websockets.
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
          <li>
            <ExternalLink href='https://react.dev/'>React
            </ExternalLink> with <ExternalLink href='https://www.gatsbyjs.com/'>
              Gatsby</ExternalLink></li>
          <li>
            <ExternalLink
              href='https://tailwindcss.com/'
            >TailwindCSS</ExternalLink>
          </li>
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

export default AboutPage

export const Head: HeadFC = () => <title>{pageTitle}</title>
