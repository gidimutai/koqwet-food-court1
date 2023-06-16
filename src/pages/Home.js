import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'
import '../styles/HomeStyles.css'
import background from '../images/New folder/backgr.jpg'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${background})`}} >
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best of Kenyan cuisine </p>
          <Link to='/menu'>
            <button>
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home