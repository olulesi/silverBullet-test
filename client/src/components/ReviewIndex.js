import React from 'react'

import axios from 'axios'

// import StarRating from './StarRating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function ReviewIndex() {

  const [reviews, setReviews] = React.useState(null)
  // eslint-disable-next-line no-unused-vars
  const [sortedReviews, setSortedReviews] = React.useState(null)
  const avgRating = []
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

  const stars = Array.from({ length: 5 }, () => '☆')

  console.log(stars)

  return (
    <>
      <section className="container">
        <div className="columns">
          <div className="column is-9">
            <div className="column">
              <h3 className="title">Average Rating: {avgRating[0]}</h3>
              <button className="button is-success" onClick={handleRatings}>Sort Reviews by Score</button>
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