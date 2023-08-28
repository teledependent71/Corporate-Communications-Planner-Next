import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Corporate Communications Planner</title>
          <meta
            property="og:title"
            content="test-page - Corporate Communications Planner"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_pli88m) => (
            <>
              <h1>{context_pli88m?.name}</h1>
            </>
          )}
          initialData={props.contextPli88mProp}
          persistDataDuringLoading={true}
          key={props?.contextPli88mProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
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

export default TestPage

export async function getStaticProps(context) {
  const contextPli88mProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextPli88mProp: contextPli88mProp?.data?.[0],
    },
  }
}
