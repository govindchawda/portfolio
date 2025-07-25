import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className='navbar-section'>
        <div className="">
          <div className="container">
            <div>
              <nav>
                <div className='logo'>
                  <h1><b><span>GO</span>VIND</b></h1>
                </div>
             <ul>
                  <li><a href="" className='active'>Home</a></li>
                  {/* <li><a href="">about</a></li> */}
                  <li><a href="/Portfolio">Poftfolio</a></li>
                  {/* <li><a href="">secvices</a></li> */}
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
