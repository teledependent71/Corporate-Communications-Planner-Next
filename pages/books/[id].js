import React from 'react'
import Head from 'next/head'

import PropTypes from 'prop-types'

import booksPageInitialPathsA3555Resource from '../../resources/books-page-initial-paths-a3555'
import booksPageInitialProps8d06dResource from '../../resources/books-page-initial-props-8d06d'

const Books = (props) => {
  return (
    <>
      <div className="books-container">
        <Head>
          <title>Books - Corporate Communications Planner</title>
          <meta
            property="og:title"
            content="Books - Corporate Communications Planner"
          />
        </Head>
        <></>
      </div>
      <style jsx>
        {`
          .books-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Books.defaultProps = {
  booksEntity: [],
}

Books.propTypes = {
  booksEntity: PropTypes.array,
}

export default Books

export async function getStaticPaths() {
  const response = await booksPageInitialPathsA3555Resource({})
  return {
    paths: (response?.data || []).map((item) => {
      return {
        params: {
          id: (item?.id).toString(),
        },
      }
    }),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const response = await booksPageInitialProps8d06dResource({
    ...context?.params,
  })
  return {
    props: {
      booksEntity: response?.data?.[0],
      ...response?.meta,
    },
    revalidate: 60,
  }
}
