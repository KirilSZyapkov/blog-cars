import React from 'react'

import style from './NotFound.module.css';


function NotFound() {
  return (
    <img className={style.notFound} src = '/static/not_found.png' alt='Not Found 404' />
  )
}

export default NotFound;