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
                    <h6 className={styles.title1}>Sustainability</h6>
                    <h4 className={styles.title2}>Land, Sea, Air.</h4>
                    <img src={img1} alt="img1" className={styles.img1}/>
                </div>
                <div className={styles.box}>
                    <h6 className={styles.title1}>Exclusive</h6>
                    <h4 className={styles.title2}>Haute Voiture.</h4>
                    <img src={img3} alt="img3" className={styles.img3}/>
                </div>
                <div className={styles.box}>
                    <h6 className={styles.title1}>Vehicles</h6>
                    <h4 className={styles.title2}>The G manufaktur - Icons of Unique.</h4>
                    <img src={img5} alt="img5" className={styles.img5}/>
                </div>
            </div>

            <div className={styles.boxContainer2}>
                <div className={styles.box}>
                    <h6 className={styles.title1}>Zeitgeist</h6>
                    <h4 className={styles.title2}>Neon Legacy.</h4>
                    <img src={img2} alt="img2" className={styles.img2}/>
                </div>
                <div className={styles.box}>
                    <h6 className={styles.title1}>Sustainibility</h6>
                    <h4 className={styles.title2}>An auction to fund a global fellowship.</h4>
                    <img src={img4} alt="img4" className={styles.img4}/>
                </div>
            </div>
        </div>

        <div className={styles.feed2}>
            <img src={img6} alt="img6" className={styles.img6}/>
            <div className={styles.feedBox}>
                <h6 className={styles.title1}>Greatness made to last.</h6>
                <h1 className={styles.title2}>The Grand Mercedes</h1>
                <button className={styles.button}>Discover more</button>
            </div>
        </div>

        <div className={styles.feed3}>
            <h2 className={styles.title}>Follow Mercedes-Benz</h2>
            <div className={styles.icons}>
                <img src={icon1} alt="icon" className={styles.icon}/>
                <img src={icon2} alt="icon" className={styles.icon}/>
                <img src={icon3} alt="icon" className={styles.icon}/>
                <img src={icon4} alt="icon" className={styles.icon}/>
                <img src={icon5} alt="icon" className={styles.icon}/>
                <img src={icon6} alt="icon" className={styles.icon}/>
            </div>
        </div>
    </div>
  )
}

export default FirstFeed