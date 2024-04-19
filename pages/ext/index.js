// Theirs
import React from 'react'
import { withRouter } from 'next/router'
import Either from 'eitherx'

const COLUMN = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

// Ours
import EditorContainer from '../../components/EditorContainer'
import Meta, { MetaLinks } from '../../components/Meta'

class Index extends React.Component {
  componentDidMount() {
    if (window.workbox && window.workbox.register) {
      window.workbox.register()
    }
  }
  componentWillUnmount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister()
      })
    }
  }

  shouldComponentUpdate = () => false

  render() {
    return (
      <main className="main">
        <Meta />
        <MetaLinks />
        <Either>
          <div className="page">
            <EditorContainer router={this.props.router} snippet={this.props.snippet} />
          </div>
          <p>
            An unexpected error has occurred. Please{' '}
            <u>
              <a href="https://github.com/username/repo">file an issue here</a>
            </u>
            .
          </p>
        </Either>

        <style jsx>
          {`
            .main {
              ${COLUMN}
              /* margin-top: 6rem; */
              max-width: 800px;
              min-width: 784px;
              /* max-height: 600px; */
              padding: 13px;
            }
            .login-button-container {
              position: absolute;
              top: 1.4rem;
              right: 1rem;
            }
            .page {
              max-width: 100%;
              padding: 0 1rem;
            }
            @media (min-width: 1024px) {
              .main {
                ${COLUMN};
              }
              .page {
                padding: 0;
              }
            }
          `}
        </style>
      </main>
    )
  }
}

export default withRouter(Index)
