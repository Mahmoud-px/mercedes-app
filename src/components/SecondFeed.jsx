import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/secondFeed.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useAnimation } from 'framer-motion';
import { item2 } from '../variants/variants';




const SecondFeed = () => {

    const [box1, setBox1] = useState(true)
    const [box2, setBox2] = useState(false)
    const [box3, setBox3] = useState(false)

    const enter1 = () =>{
        setBox2(false)
        setBox3(false);
        setBox1(true);
    }

    const enter2 = () =>{
        setBox1(false);
        setBox3(false);
        setBox2(true);
    }

    const enter3 = () =>{
        setBox1(false);
        setBox2(false);
        setBox3(true);
    }

    const target1 = useRef(null)
    const target2 = useRef(null)
    const target3 = useRef(null)

    const scrollTo1 = () =>{
        target1.current.scrollIntoView({
            behavior: 'auto', 
            block: 'center',
            inline: 'center',
        })
    }
    const scrollTo2 = () =>{
        target2.current.scrollIntoView({
            behavior: 'auto', 
            block: 'center',
            inline: 'center',
        })
    }
    const scrollTo3 = () =>{
        target3.current.scrollIntoView({
            behavior: 'auto', 
            block: 'center',
            inline: 'center',
        })
    }

    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(target1.current, {
            scrollTrigger: {
            trigger: target1.current,
            start: 'top 80%', // Element enters viewport at 80% of its height
            end: 'top 20%', // Element exits viewport at 20% of its height
            onEnter: enter1,
            onEnterBack: enter1,
            toggleActions: "play reverse play reverse",
            //   onLeave: handleExitViewport,
            once: false, // Set to true if you want the function to be triggered only once
            },
        });

        gsap.to(target2.current, {
            scrollTrigger: {
            trigger: target2.current,
            start: 'top 80%', // Element enters viewport at 80% of its height
            end: 'top 20%', // Element exits viewport at 20% of its height
            onEnter: enter2,
            onEnterBack: enter2,
            toggleActions: "play reverse play reverse",
            //   onLeave: handleExitViewport,
            once: false, // Set to true if you want the function to be triggered only once
            },
        });
        
        gsap.to(target3.current, {
            scrollTrigger: {
                trigger: target3.current,
                start: 'top 80%', // Element enters viewport at 80% of its height
                end: 'top 20%', // Element exits viewport at 20% of its height
                onEnter: enter3,
                onEnterBack: enter3,
                toggleActions: "play reverse play reverse",
                //   onLeave: handleExitViewport,
                once: false, // Set to true if you want the function to be triggered only once
            },
        });
    },[])
    
    
  return (
    <div className={styles.container}>

        <div className={styles.boxContainer}>
            <div className={styles.mainBox}>
                <h2 className={styles.mainTitle} onClick={scrollTo1} style={{opacity: `${box1 ? '1' : '0.3'}`}}>Purchase</h2>
                <h2 className={styles.mainTitle} onClick={scrollTo2} style={{opacity: `${box2 ? '1' : '0.3'}`}}>Finance</h2>
                <h2 className={styles.mainTitle} onClick={scrollTo3} style={{opacity: `${box3 ? '1' : '0.3'}`}}>Services</h2>
            </div>
            <motion.div variants={item2} initial="hidden" animate={box1 ? 'visible' : 'hidden'} className={styles.box1}  style={{visibility: `${box1 ? 'visible' : 'hidden'}`}}>
                <h6 className={styles.secondTitle}>Vehicles</h6>
                <h6 className={styles.secondTitle}>Accessories</h6>
                <h6 className={styles.secondTitle}>Mercedes me</h6>
                <h6 className={styles.secondTitle}>Lifestyle Collection</h6>
                <h6 className={styles.secondTitle}>Classic Cars</h6>
            </motion.div>
            <motion.div variants={item2} initial="hidden" animate={box2 ? 'visible' : 'hidden'} className={styles.box2} style={{visibility: `${box2 ? 'visible' : 'hidden'}`}}>
                <h6 className={styles.secondTitle}>Leasing</h6>
                <h6 className={styles.secondTitle}>Rent</h6>
                <h6 className={styles.secondTitle}>Insurance</h6>
            </motion.div>
            <motion.div variants={item2} initial="hidden" animate={box3 ? 'visible' : 'hidden'} className={styles.box3} style={{visibility: `${box3 ? 'visible' : 'hidden'}`}}>
                <h6 className={styles.secondTitle}>Mercedes me</h6>
                <h6 className={styles.secondTitle}>Service & Parts</h6>
                <h6 className={styles.secondTitle}>Driving Aids</h6>
            </motion.div>
        </div>
        
        <div className={styles.boxContainer1} ref={target1}></div>

        <div className={styles.boxContainer2} ref={target2}></div>

        <div className={styles.boxContainer3} ref={target3}></div>
    </div>
  )
}

export default SecondFeed