import React from 'react'

import { useHistory } from 'react-router-dom'
import useForm from '../utils/useForm'
import axios from 'axios'


function ReviewForm() {
  const history = useHistory()
  const { formdata, errors, handleChange, setErrors } = useForm({
    name: '',
    comment: '',
    score: '',
  })

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/reviews/', formdata)
      history.push('/reviews')
      console.log(data)
    } catch (err) {
      setErrors(err.response.data)

    }
  }

  // const handleScoreChange = (value) => {
  //   setRating(value)
  // }

  const inactiveColor = '#ddd'
  const activeColor = '#f00'
  const stars = Array.from({ length: 5 }, () => '★')

  return (

    <>
      <div className="columns">
        <form className="column is-10 is-offset-1 box" onSubmit={handleSubmit}>
          <div className="field">
            <div className="field">
              <label htmlFor="name" className="label">Name</label>
              <div className="control">
                <input
                  className={`input ${errors.name ? 'is-danger' : ''}`}
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={formdata.name}
                />
              </div>
              {errors.name && <p className="help is-danger">{errors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="score" className="label">Rating</label>
              <div className="control" value={formdata.score} name="score">
                <input
                  className={`input ${errors.score ? 'is-danger' : ''}`}
                  placeholder="Rating"
                  name="score"
                  type="number"
                  onChange={handleChange}
                  value={formdata.score}
                />
                {stars.map((s, index) => {
                  let style = inactiveColor
                  if (index < formdata.score) {
                    style = activeColor
                  }
                  return (
                    <span className="star"
                      aria-hidden="true"
                      onClick={handleChange}
                      key={index}
                      style={{ color: style, width: 24, height: 24, fontSize: 24 }}
                    >{s}</span>
                  )
                })}
                {formdata.score}
              </div>
              {errors.score && <p className="help is-danger">{errors.score}</p>}
            </div>
            <div className="field">
              <label htmlFor="comment" className="label">Comment</label>
              <div className="control">
                <textarea
                  className={`textarea ${errors.comment ? 'is-danger' : ''}`}
                  placeholder="Comment...."
                  name="comment"
                  onChange={handleChange}
                  value={formdata.comment}
                  id="comment"
                />
              </div>
              {errors.comment && <p className="help is-danger">{errors.comment}</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-danger is-fullwidth">Submit My Review</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )


}
export default ReviewForm