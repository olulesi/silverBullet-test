import React from 'react'

import ReviewForm from './ReviewForm'

function Home() {

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="column is-6 is-offset-3">
              <h1 className="title has-text-centered">
                Silver Bullet Reviews
              </h1>
              <h2 className="subtitle has-text-centered">
                Write a Review about the company that delivers he world’s leading products and services
              </h2>
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home