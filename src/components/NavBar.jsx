import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/navBar.module.css'
import { useScrollDirection } from 'react-use-scroll-direction'
import Logo from '../assets/images/logo'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { variants, variants2 } from '../variants/variants';



const NavBar = () => {

    const { isScrollingDown, isScrollingUp } = useScrollDirection()

    const [showElement, setShowElement] = useState(true)

    useEffect(() =>{
        if(isScrollingDown){
            setShowElement(false)
        }else if(isScrollingUp){
            setShowElement(true)
        }
    },[isScrollingDown, isScrollingUp])

    const[iconShadow, setIconShadow]= useState(false)

    const enableShadow = () =>{
        setIconShadow(true);
    }

    const disableShadow = () =>{
        setIconShadow(false);
    }



  return (
    <div className={styles.container}>
        <div className={styles.boxContainer1} onMouseEnter={() => setShowElement(true)}>
            <motion.div className={styles.box1} style={{visibility:`${showElement? 'visible' : 'hidden'}`}} variants={variants} initial="visible" animate={showElement ? "visible" : "hidden"}>
                <h6 className={styles.deutsch}>Deutsch</h6>
                <h6 className={styles.l}>|</h6>
                <h6 className={styles.english}>English</h6>
                <h6 className={styles.privacy}>provider/privacy</h6>
            </motion.div>

            <div className={styles.logo}>
                <Logo style={{ width: "40px", height: "40px" }} viewBox="0 0 40 40"/>
            </div>

            <motion.div className={styles.box2} style={{visibility:`${showElement? 'visible' : 'hidden'}`}} variants={variants} initial="visible" animate={showElement ? "visible" : "hidden"}>
                <h6 className={styles.search}>Search <i className={`bi bi-search ${styles.searchIcon}`}></i> </h6>
                <h6 className={styles.login}>Login <FontAwesomeIcon icon={faChevronDown} className={styles.arrowDown}/> </h6>
            </motion.div>
        </div>

        <motion.div style={{visibility:`${showElement? 'visible' : 'hidden'}`}} variants={variants2} initial="visible" animate={showElement ? "visible" : "hidden"} className={styles.boxContainer2} onMouseEnter={() => setShowElement(true)}>
            <h6 className={styles.link} onMouseLeave={disableShadow} onMouseEnter={enableShadow} style={{opacity:`${iconShadow ? '0.5' : '1'}`}}>Art & Culture</h6>
            <h6 className={styles.link} onMouseLeave={disableShadow} onMouseEnter={enableShadow} style={{opacity:`${iconShadow ? '0.5' : '1'}`}}>Sustainability</h6>
            <h6 className={styles.link} onMouseLeave={disableShadow} onMouseEnter={enableShadow} style={{opacity:`${iconShadow ? '0.5' : '1'}`}}>Design</h6>
            <h6 className={styles.link} onMouseLeave={disableShadow} onMouseEnter={enableShadow} style={{opacity:`${iconShadow ? '0.5' : '1'}`}}>Innovation</h6>
            <h6 className={styles.link} onMouseLeave={disableShadow} onMouseEnter={enableShadow} style={{opacity:`${iconShadow ? '0.5' : '1'}`}}>Exclusive</h6>
            <h6 className={styles.link} onMouseLeave={disableShadow} onMouseEnter={enableShadow} style={{opacity:`${iconShadow ? '0.5' : '1'}`}}>Vehicles</h6>
        </motion.div>
    </div>
  )
}

export default NavBar