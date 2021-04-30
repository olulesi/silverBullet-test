import React from 'react'

import axios from 'axios'

function ReviewIndex() {

  const [reviews, setReviews] = React.useState(null)

  let totalRatings = 0

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/reviews/')
        setReviews(data)
        // console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const avgRating = []

  if (reviews) {
    reviews.map(review => (
      totalRatings += review.score
    ))
    const avg = totalRatings / reviews.length
    const ratingRounded = avg.toFixed(1)
    avgRating.push(ratingRounded)
  }

  return (
    <>
      <section className="container">
        <div className="columns">
          <div className="column is-9">
            <h3 className="title">Average Rating: {avgRating[0]}</h3>
            <div className="box content">
              {reviews ?
                reviews.map(review => (
                  <>
                    <article className="post danger" key={review.id}>
                      <h4>{review.comment}</h4>
                    </article>
                  </>
                ))
                :
                <p>... loading</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ReviewIndex