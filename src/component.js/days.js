import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar} from "react-bootstrap"

const Days = () => {
  return (
    <div>
        <Navbar className="col-12 p-2">
        
          <Link className='linkDay' to={"/"}> ختار اليوم</Link>
          <Link className='linkDay' to={"/saturday"}> السبت</Link>
          <Link className='linkDay' to={"/sunday"}> الاحد</Link>
          <Link className='linkDay' to={"/monday"}> الاثنين</Link>
          <Link className='linkDay' to={"/tusday"}>  الثلاثاء</Link>
          <Link className='linkDay' to={"/wednesday"}> الاربعاء</Link>
          <Link className='linkDay' to={"/thursday"}> الخميس</Link>
          </Navbar>
    </div>
  )
}

export default Days