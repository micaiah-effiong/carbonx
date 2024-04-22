import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Announcement from './Announcement'

const COLUMN = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class Page extends React.Component {
  render() {
    const { children, enableHeroText, flex } = this.props
    return (
      <main className="main mb3">
        <Meta />
        <>
          <Announcement />
          <Header enableHeroText={enableHeroText} />
          <div className="page">{children}</div>
        </>

        <Footer />

        <style jsx>
          {`
            .main {
              ${flex ? COLUMN : ''}
              margin-top: 6rem;
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

export default Page
