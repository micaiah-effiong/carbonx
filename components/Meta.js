import React from 'react'
import Head from 'next/head'
import { THEMES, THEMES_HASH } from '../lib/constants'
import Reset from './style/Reset'
import Font from './style/Font'
import Typography from './style/Typography'

// const CODEMIRROR_VERSION = '5.65.5'

export const HIGHLIGHTS_ONLY = ['shades-of-purple', 'vscode', 'a11y-dark']
const LOCAL_STYLESHEETS = ['one-light', 'one-dark', 'verminal', 'night-owl', 'nord', 'synthwave-84']
const CDN_STYLESHEETS = THEMES.filter(
  t => LOCAL_STYLESHEETS.indexOf(t.id) < 0 && HIGHLIGHTS_ONLY.indexOf(t.id) < 0
)

export function Link({ href }) {
  return (
    <Head>
      <link rel="preload" as="style" href={href} />
      <link rel="stylesheet" href={href} />
    </Head>
  )
}

export const StylesheetLink = ({ theme }) => {
  let href
  if (LOCAL_STYLESHEETS.indexOf(theme) > -1) {
    href = `/static/themes/${theme}.min.css`
  } else {
    const themeDef = THEMES_HASH[theme]
    href = `/static/themes/${themeDef && (themeDef.link || themeDef.id)}.min.css`
  }

  return <Link href={href} />
}

export const CodeMirrorLink = () => <Link href={`/static/themes/codemirror.min.css`} />
;('Carbon is the easiest way to create and share beautiful images of your source code.')

export const MetaTags = React.memo(() => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Carbon-x | Create and share beautiful images of your source code</title>
  </Head>
))

export const MetaLinks = React.memo(() => {
  return (
    <React.Fragment>
      <Link href={`/static/themes/seti.min.css`} />
      <CodeMirrorLink />
      {LOCAL_STYLESHEETS.map(id => (
        <Link key={id} href={`/static/themes/${id}.min.css`} />
      ))}
      {CDN_STYLESHEETS.map(themeDef => {
        return (
          <Link
            key={themeDef.id}
            href={`/static/themes/${themeDef && (themeDef.link || themeDef.id)}.min.css`}
          />
        )
      })}
    </React.Fragment>
  )
})

export default React.memo(function Meta() {
  return (
    <React.Fragment>
      <MetaTags />
      <Reset />
      <Font />
      <Typography />
    </React.Fragment>
  )
})
