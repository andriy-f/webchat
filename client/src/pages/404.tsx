import * as React from 'react'
import { Link, type HeadFC, type PageProps } from 'gatsby'
import Layout from '../features/layout/layout'

const paragraphStyles = {
  marginBottom: 48
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4
}

const pageTitle = '404: Not found'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development'
          ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
            )
          : null}
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
