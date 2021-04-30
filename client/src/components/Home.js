import React from 'react'

import ReviewForm from './ReviewForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Particles from 'react-tsparticles'

import logo from '../styles/images/SBlogo.png'

function Home() {

  const [showForm, setShowForm] = React.useState(false)

  const handleClick = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <header>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-5 is-offset-1">
                <h1 className="title is-1 is-spaced"><span className="logo-wrapper"><img src={logo} alt="Logo"/></span>
                Silver Bullet
                </h1>
                <h2 className="subtitle">
                Write a Review about the company that delivers he world’s leading products and services
                </h2>
              </div>
              <div className="column is-5 is-offset-1">
                {!showForm && (
                  <button className="button is-medium is-link is-rounded" onClick={handleClick}>
                  Give a Review
                  </button>
                )}
                {showForm && (
                  <div className="form-container">
                    <span><FontAwesomeIcon onClick={handleClick} className='' icon={faTimes} /></span>
                    <ReviewForm/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-halfheight">
          <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: '#0d47a1',
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: 'canvas',
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: '#ffffff',
                },
                links: {
                  color: '#ffffff',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outMode: 'bounce',
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        </section>
        
      </header>
    </>
  )
}
export default Home