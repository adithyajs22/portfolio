import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    
    <div className={styles.navbar}>
      <div className={styles.left} >
       <a className={styles.home} href="#home">Adithya J S</a>
       </div>
       <div className={styles.right}>
       <a className={styles.about} href="#what-i-know">About</a>
       <a className={styles.skills} href="#skills">Skills</a>
      
       <a className={styles.projects}  href="#projects">Projects</a>
       <a className={styles.contact}href="#contacts">Contact</a>
       <a className={styles.resume} href='/resume.pdf' download> Download Resume</a>
       </div>
    </div>
    
  )
}

export default Navbar