import React from 'react'
import classes from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default Layout
