import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, <br />I'm Priti Giramkar</h1>
            <p className={styles.description}>Creative Full Stack Developer transforming caffeine and code into sleek, high-performing web applications with Java, Spring Boot, and React.js.<br/> Reach out if you'd like to learn more !!!</p>
            <div className={styles.buttonContainer}>
            <a className={styles.contactBtn} href="mailto:pritigiramkar20@gmail.com">Contact Me</a>
            <a className={styles.resumeBtn} href="https://drive.google.com/file/d/1xZBzdu8ZV9hlZ8hDRa3SWZdNpYSYERPH/view?usp=sharing">Resume</a>
            </div> 
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/pritiheroImage.png")} alt="" />
        <div className={styles.topBlur}/>
        <div className={styles.BottomBlur}/>
    </section>
  )
}
