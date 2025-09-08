import React from 'react'

import style from "./pagetitle.module.css"

const PageTitle = ({title}) => {
  return (
    <div className={style.container}>
      <hr />
      <span>{title}</span>
    </div>
  )
}

export default PageTitle
