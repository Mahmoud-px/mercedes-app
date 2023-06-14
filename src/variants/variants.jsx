export const variants = {
    hidden: {
        y: "-200%",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn",
        }
    }
}

export const variants2 = {
    hidden: {
        y: "-50%",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn",
        }
    }
}

export const group = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    },
};
  
export const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.75
    }
};


export const item2 = {
    hidden: { 
        y: -50,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }
    }
};