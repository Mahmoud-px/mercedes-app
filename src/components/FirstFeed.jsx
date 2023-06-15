import React from 'react'
import styles from '../styles/firstFeed.module.css'
import img1 from '../assets/images/img1.avif'
import img3 from '../assets/images/img3.avif'
import img5 from '../assets/images/img5.avif'
import img2 from '../assets/images/img2.avif'
import img4 from '../assets/images/img4.avif'
import img6 from '../assets/images/img6.avif'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'



const FirstFeed = () => {
  return (
    <div className={styles.container}>
        <div className={styles.feed1}>
            <div className={styles.boxContainer1}>
                <div className={styles.box}>
                    <h6 className={styles.title1} data-aos="fade-up">Sustainability</h6>
                    <h4 className={styles.title2} data-aos="fade-up">Land, Sea, Air.</h4>
                    <img src={img1} alt="img1" className={styles.img1} data-aos="fade-up"/>
                </div>
                <div className={styles.box}>
                    <h6 className={styles.title1} data-aos="fade-up">Exclusive</h6>
                    <h4 className={styles.title2} data-aos="fade-up">Haute Voiture.</h4>
                    <img src={img3} alt="img3" className={styles.img3} data-aos="fade-up"/>
                </div>
                <div className={styles.box}>
                    <h6 className={styles.title1} data-aos="fade-up">Vehicles</h6>
                    <h4 className={styles.title2} data-aos="fade-up">The G manufaktur - Icons of Unique.</h4>
                    <img src={img5} alt="img5" className={styles.img5} data-aos="fade-up"/>
                </div>
            </div>

            <div className={styles.boxContainer2}>
                <div className={styles.box}>
                    <h6 className={styles.title1} data-aos="fade-up">Zeitgeist</h6>
                    <h4 className={styles.title2} data-aos="fade-up">Neon Legacy.</h4>
                    <img src={img2} alt="img2" className={styles.img2} data-aos="fade-up"/>
                </div>
                <div className={styles.box}>
                    <h6 className={styles.title1} data-aos="fade-up">Sustainibility</h6>
                    <h4 className={styles.title2} data-aos="fade-up">An auction to fund a global fellowship.</h4>
                    <img src={img4} alt="img4" className={styles.img4} data-aos="fade-up"/>
                </div>
            </div>
        </div>

        <div className={styles.feed2}>
            <img src={img6} alt="img6" className={styles.img6}/>
            <div className={styles.feedBox}>
                <h6 className={styles.title1} data-aos="fade-up">Greatness made to last.</h6>
                <h1 className={styles.title2} data-aos="fade-up">The Grand Mercedes</h1>
                <button className={styles.button} data-aos="fade-up">Discover more</button>
            </div>
        </div>

        <div className={styles.feed3}>
            <h2 className={styles.title}>Follow Mercedes-Benz</h2>
            <div className={styles.icons}>
                <img src={icon1} alt="icon" className={styles.icon} data-aos="fade-up"/>
                <img src={icon2} alt="icon" className={styles.icon} data-aos="fade-up"/>
                <img src={icon3} alt="icon" className={styles.icon} data-aos="fade-up"/>
                <img src={icon4} alt="icon" className={styles.icon} data-aos="fade-up"/>
                <img src={icon5} alt="icon" className={styles.icon} data-aos="fade-up"/>
                <img src={icon6} alt="icon" className={styles.icon} data-aos="fade-up"/>
            </div>
        </div>
    </div>
  )
}

export default FirstFeed