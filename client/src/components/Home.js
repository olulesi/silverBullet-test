import React from 'react'

import ReviewForm from './ReviewForm'

function Home() {

  const [showForm, setShowForm] = React.useState(false)

  const handleClick = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="column is-6 is-offset-3">
              <h1 className="title has-text-centered">
                Silver Bullet Reviews
              </h1>
              <h2 className="subtitle has-text-centered">
                Write a Review about the company that delivers he world’s leading products and services
              </h2>
              {!showForm && (
                <button className="button is-link is-rounded" onClick={handleClick}>
                  Give a Review
                </button>
              )}
              {showForm && (
                <ReviewForm />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home