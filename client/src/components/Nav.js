import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {

  return (

    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/" className="button is-light">
                <strong>Add Another Review</strong>
              </Link>
              <Link to="/reviews" className="button is-light">
                <strong>Reviews</strong>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )


}
export default Nav