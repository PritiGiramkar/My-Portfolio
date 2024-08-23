import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
            <div className={styles.contact}>
            <h3>Contact</h3>
            <p>Feel Free to Reach out !!!</p>
            </div>
                <ul className={styles.links}> 
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="" />
                        <a href="mailto:pritigiramkar20@gmail.com">pritigiramkar20@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
                        <a href="http://www.linkedin.com/in/priti-giramkar">linkedin.com/priti-giramkar</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                        <a href="https://github.com/PritiGiramkar">github.com/PritiGiramkar</a>
                    </li>
                </ul>
    </footer>
  )
}
