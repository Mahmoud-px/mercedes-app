import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/theatre.module.css'
import ReactPlayer from 'react-player'
import trailer1 from '../assets/videos/trailer3.mp4'
import trailer2 from '../assets/videos/trailer4.mp4'
import ScrollTrigger from 'react-scroll-trigger';
import LinearProgress from '@mui/material/LinearProgress';
import { motion, useAnimation } from 'framer-motion';
import { group, item } from '../variants/variants';



const Theatre = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)
    },[])

    const [isPlaying1, setIsPlaying1] = useState(false)
    const [isMuted1, setIsMuted1] = useState(true)
    const togglePause1 = () =>{
        setIsPlaying1(prev => !prev)
        setIsMuted1(false)
    }

    const [isPlaying2, setIsPlaying2] = useState(false)
    const [isMuted2, setIsMuted2] = useState(true)
    const togglePause2 = () =>{
        setIsPlaying2(prev => !prev)
        setIsMuted2(false)
    }

    const [translateY, setTranslateY] = useState(null)
    
    const handleEnter1 = () =>{
        setIsPlaying2(false)
        setTranslateY(false)
        setIsPlaying1(true)
    }
    const handleEnter2 = () =>{
        setIsPlaying1(false)
        setTranslateY(true)
        setIsPlaying2(true)
    }

    const handleScroll = () =>{
        if(translateY){
            handleEnter2()
        }
        else if(!translateY){
            handleEnter1()
        }
    }
    
    const exitTheatre = () =>{
        setIsPlaying1(false)
        setIsPlaying2(false)
    }

    const [progress1, setProgress1] = React.useState(0);
    const [progress2, setProgress2] = React.useState(0);

    const endingVideo1 = () =>{
        handleEnter2()
    }

    const endingVideo2 = () =>{
        handleEnter1()
    }
    
    const animation1 = useAnimation();
    const animation2 = useAnimation();

    useEffect(()=>{
        if(isPlaying1){
            animation1.start('visible')
        }
        else if(!isPlaying1){
            animation1.set('hidden')
        }
    },[isPlaying1])

    useEffect(()=>{
        if(isPlaying2){
            animation2.start('visible')
        }
        else if(!isPlaying2){
            animation2.set('hidden')
        }
    },[isPlaying2])


  return (

    <div className={styles.container}>

        <ScrollTrigger onEnter={handleScroll} onExit={exitTheatre}>
            <div className={styles.videoContainer}>
                <div className={styles.videosWrapper}>

                    <div className={styles.video1} onClick={togglePause1} style={{transform: `translateY(${translateY ? -110 : 0}vh)`}}>
                        <ReactPlayer 
                            url={trailer1} 
                            playing= {isPlaying1}
                            volume={.75}
                            muted={isMuted1}
                            wrapper={'span'}
                            onReady={() => setIsPlaying1(true)}
                            onEnded={endingVideo1}
                            onProgress={({ played }) => {
                                const newProgress = played * 100;
                                setProgress1(newProgress);
                            }}
                        />
                        <motion.div className={styles.box} variants={group} initial="hidden" animate={animation1}>
                            <div className={styles.titleBox}>
                                <motion.h2 variants={item} className={styles.title}>Unheard</motion.h2>&nbsp;
                                <motion.h2 variants={item} className={styles.title}>Of:</motion.h2>&nbsp;
                                <motion.h2 variants={item} className={styles.title}>Hear</motion.h2>&nbsp;
                                <motion.h2 variants={item} className={styles.title}>music</motion.h2> <br />
                                <motion.h2 variants={item} className={styles.title}>like</motion.h2>&nbsp;
                                <motion.h2 variants={item} className={styles.title}>never</motion.h2>&nbsp;
                                <motion.h2 variants={item} className={styles.title}>before.</motion.h2>
                            </div>
                            <motion.button variants={item} className={styles.button}>Discover more <i className={`bi bi-chevron-right ${styles.arrow}`}></i> </motion.button>
                        </motion.div>
                        
                        <div className={styles.bars}>
                            <LinearProgress color="inherit" variant="determinate" value={progress1} className={styles.progressBar}/>
                            <div className={styles.fakeBar}></div>
                        </div>
                    </div>

                    <div className={styles.video2} onClick={togglePause2} style={{display: `${translateY ? 'block' : 'none'}`, transform: `translateY(${translateY ? -110 : 0}vh)`}}>
                        <ReactPlayer 
                            url={trailer2} 
                            playing= {isPlaying2}
                            volume={.75}
                            muted={isMuted2}
                            wrapper={'span'}
                            onEnded={endingVideo2}
                            onProgress={({played})=>{
                                const newProgress = played * 100
                                setProgress2(newProgress)
                            }}
                        />
                        <motion.div className={styles.box} variants={group} initial="hidden" animate={animation2} >
                            <div className={styles.titleBox}>
                                <motion.h2 variants={item} className={styles.title}>A</motion.h2>&nbsp;
                                <motion.h2 variants={item} className={styles.title}>mercedes-Benz</motion.h2>&nbsp;
                                <motion.h2 variants={item} className={styles.title}>and</motion.h2><br />
                                <motion.h2 variants={item} className={styles.title}>Moncler</motion.h2> &nbsp;
                                <motion.h2 variants={item} className={styles.title}>voyage</motion.h2>&nbsp;
                            </div>
                            <motion.button variants={item} className={styles.button}>Discover more <i className={`bi bi-chevron-right ${styles.arrow}`}></i> </motion.button>
                        </motion.div>

                        <div className={styles.bars}>
                            <div className={styles.fakeBar}></div>
                            <LinearProgress color="inherit" variant="determinate" value={progress2} className={styles.progressBar}/>
                        </div>                    
                    </div>
                </div>
            </div>
        </ScrollTrigger>

    </div>

  )
}

export default Theatre