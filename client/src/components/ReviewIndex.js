import React from 'react'

import axios from 'axios'

// import StarRating from './StarRating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function ReviewIndex() {

  const [reviews, setReviews] = React.useState(null)

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



  // SORT REVIEWS BY RATING

  const avgRating = []
  let totalRatings = 0
  // eslint-disable-next-line no-unused-vars
  const [sortedReviews, setSortedReviews] = React.useState(null)

  if (reviews) {
    reviews.map(review => (
      totalRatings += review.score
    ))
    const avg = totalRatings / reviews.length
    const ratingRounded = avg.toFixed(1)
    avgRating.push(ratingRounded)
  }

  const handleRatings = event => {
    event.preventDefault()
    const sortRatings = reviews.sort(function (a, b) {
      return b.score - a.score
    })
    setSortedReviews(sortRatings)
  }


  // STAR SYMBOLS

  const inactiveColor = '#ddd'
  const activeColor = '#ffa41d'
  const stars = Array.from({ length: 5 }, () => '★')

  return (
    <>
      <section className="container">
        <div className="columns">
          <div className="column is-9">
            <div className="ratings-wrapper">
              <h3 className="title">Average Rating: {avgRating[0]}</h3>
              <button className="button is-success" onClick={handleRatings}>Top Reviews</button>
            </div>
            <div className="box content">
              {reviews ?
                reviews.map(review => (
                  <>
                    <article className="post danger" key={review.id}>
                      <div className="media">
                        <div className="media-left">
                          <span className='icon userCircle'>
                            <FontAwesomeIcon icon={faUserCircle} />
                          </span>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">{review.name}</p>
                        </div>
                      </div>
                      <div className="media-left">
                        <div value={review.score}>
                          {stars.map((s, index) => {
                            let style = inactiveColor
                            if (index < review.score) {
                              style = activeColor
                            }
                            return (
                              <span className="star"
                                key={index}
                                style={{ color: style, width: 24, height: 24, fontSize: 24 }}
                              >{s}</span>
                            )
                          })}
                          {review.score}
                        </div>
                      </div>
                      <div className="content">
                        {review.comment}
                      </div>
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