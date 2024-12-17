import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='position-relative p-0'>
        <div className='bg-image' style={{backgroundImage:'url("/src/assets/Home.jpeg")',height:'100vh',backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-center text-white bg-dark bg-opacity-50 p-4 rounded'>
              <h1>Transform your shopping experience—explore the latest trends and must-have items at irresistible prices!</h1>
              <a href="/products" className='btn btn-primary mt-3'>Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
