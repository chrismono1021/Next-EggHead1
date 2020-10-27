import NextApp from 'next/app'
import {CacheProvider} from '@emotion/core'
import {MDXProvider} from '@mdx-js/react'
import {ViewerProvider} from 'context/viewer-context'
import {DefaultSeo, SocialProfileJsonLd} from 'next-seo'
import {cache} from 'emotion' // Use only { cache } from 'emotion'. Don't use { css }.
import AppLayout from 'components/app/Layout'
import mdxComponents from 'components/mdx'
import defaultSeoConfig from 'next-seo.json'
import {useURL} from 'hooks/useUrl'
import '../styles/index.css'
import '@reach/listbox/styles.css'
import '@reach/dialog/styles.css'
// import '@reach/tabs/styles.css'
import Router from 'next/router'
import {ConvertkitProvider} from 'hooks/use-convertkit'

declare global {
  interface Window {
    ahoy: any
  }
}

Router.events.on('routeChangeComplete', () => window.ahoy.trackView())

export default class App extends NextApp {
  render() {
    const {Component, pageProps} = this.props
    return (
      <>
        <DefaultSeo {...defaultSeoConfig} />
        <SocialProfileJsonLd
          type="Organization"
          name="egghead.io"
          url={useURL()}
          sameAs={['https://twitter.com/eggheadio']}
        />
        <ConvertkitProvider>
          <ViewerProvider>
            <MDXProvider components={mdxComponents}>
              <CacheProvider value={cache}>
                <AppLayout>
                  <Component {...pageProps} />
                </AppLayout>
              </CacheProvider>
            </MDXProvider>
          </ViewerProvider>
        </ConvertkitProvider>
      </>
    )
  }
}
