import React, { useEffect, useState } from 'react'
import "./Lifestyle.css"

export default function Lifestyle() {
  const [data, setData] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(true)

  const togleModal = () => setIsOpen(!isOpen)
  const togleMenu = () => setIsOpenMenu(!isOpenMenu)
  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  const filtered = data.filter(val =>{
    return val.title.toLowerCase().includes(searchVal.toLowerCase())
  })
  return (<>
  <div className='header'>
            <div className='logosearch'>
                <div><p className='menu'><svg onClick={togleMenu} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></p></div>
                <img className='logo' src="Logotype.svg" alt=""/>
                <form action="" class="search-bar">
	                <input type="search" onChange={e => setSearchVal(e.target.value)} name="search" pattern=".*\S.*" required />
	                  <button class="search-btn" type="submit">
		                  <span>Search</span>
              	    </button>
                </form>
            </div>
            
            {
                  isOpenMenu?(<>
                    <hr className='hr'/>
            <div className='categoryes'>
                <p className='category'>Demos<span className='chevron'><i className="bi bi-chevron-down"></i></span>
                <ul className='posts'>
                    <li className='postsli'>Post Header <span><i className="bi bi-chevron-right"></i></span></li>
                     <hr  className='hrs'/>
                    <li className='postsli'>Post Layout <span><i className="bi bi-chevron-right"></i></span></li>
                    <hr  className='hrs'/>
                    <li className='postsli'>Share Buttons <span><i className="bi bi-chevron-right"></i></span></li>
                    <hr  className='hrs'/>
                    <li className='postsli'>Gallery Post <span><i className="bi bi-chevron-right"></i></span></li>
                    <hr  className='hrs'/>
                    <li className='postsli'>Video Post <span><i className="bi bi-chevron-right"></i></span></li>
                </ul></p>
                <p className='category'>Post<span className='chevron'><i className="bi bi-chevron-down"></i></span></p>
                <p className='category'>Features<span className='chevron'><i className="bi bi-chevron-down"></i></span></p>
                <p className='category'>Categories<span className='chevron'><i className="bi bi-chevron-down"></i></span></p>
                <p className='category'>Shop<span className='chevron'><i className="bi bi-chevron-down"></i></span></p>
                <p className='category'>Buy now</p>
            </div>
            <hr className='hr'/>
            </>
                  ):null
                }
            <div>
            </div>
        </div>
    <div className='Lifestyle'>
      
      {
        filtered.map((elm)=>{
          return(
            <div className='boxes' key={elm.img} onClick={togleModal}>
              <img src={elm.img} alt="" />
              <p className='tags'>{elm.tags}</p>
              <p className='title'>{elm.title}</p>
              <div className='about'>
                <b className='autor'>{elm.autor}</b>
                °
                <p className='date'>{elm.date}</p>
                °
                <p className='views'>{elm.views} Views</p>
              </div>
              <p className='text'>{elm.text}</p>
            </div>
          )
        })
      }
      {
        isOpen?(
          <div className='Popup'>
            <div className='Popuptext'>
            <p className='close' onClick={togleModal}>X</p>
            <h1>Open Popup</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque illo odit dolorem nobis ducimus similique vel excepturi aliquam praesentium, repellendus nam non recusandae possimus iusto odio id, corrupti culpa explicabo.</p>

            </div>
          </div>
        ):null
      }
    </div>
  </>

  )
}
