import React from 'react'
import Head from 'next/head'

import PropTypes from 'prop-types'

import authorsPageInitialPathsF4770Resource from '../../resources/authors-page-initial-paths-f4770'
import authorsPageInitialProps08104Resource from '../../resources/authors-page-initial-props-08104'

const Authors = (props) => {
  return (
    <>
      <div className="authors-container">
        <Head>
          <title>Authors - Corporate Communications Planner</title>
          <meta
            property="og:title"
            content="Authors - Corporate Communications Planner"
          />
        </Head>
        <></>
      </div>
      <style jsx>
        {`
          .authors-container {
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

Authors.defaultProps = {
  authorsEntity: [],
}

Authors.propTypes = {
  authorsEntity: PropTypes.array,
}

export default Authors

export async function getStaticPaths() {
  const response = await authorsPageInitialPathsF4770Resource({})
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
  const response = await authorsPageInitialProps08104Resource({
    ...context?.params,
  })
  return {
    props: {
      authorsEntity: response?.data?.[0],
      ...response?.meta,
    },
    revalidate: 60,
  }
}
