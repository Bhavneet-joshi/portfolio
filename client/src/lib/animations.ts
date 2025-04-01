import { Variants } from "framer-motion";

// Fade up animation for cards, images, and text blocks
export const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      delay: custom * 0.1,
      duration: 0.5
    }
  })
};

// Staggered fade in for lists of items
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Scale up animation for attention-grabbing elements
export const scaleUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85 
  },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      delay: custom * 0.1,
      duration: 0.6
    }
  })
};

// Slide in from right for notifications and drawers
export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      duration: 0.5
    }
  }
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -100 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      duration: 0.5
    }
  }
};

// Bounce animation for interactive elements
export const bounceVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 120,
      delay: custom * 0.1,
      duration: 0.8
    }
  }),
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

// Rotate in animation for logos and icons
export const rotateInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    rotate: -15, 
    scale: 0.9 
  },
  visible: (custom = 0) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      delay: custom * 0.1,
      duration: 0.5
    }
  })
};

// Flip animation for cards that need to show two sides
export const flipVariants: Variants = {
  hidden: { 
    opacity: 0, 
    rotateY: 90 
  },
  visible: (custom = 0) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      damping: 20,
      delay: custom * 0.1,
      duration: 0.7
    }
  })
};

// Pulse animation for notification badges or highlights
export const pulseVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      times: [0, 0.5, 1],
      repeat: 0
    }
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Wave animation for greetings or attention grabbing
export const waveVariants: Variants = {
  hidden: { 
    opacity: 0, 
    rotate: -10, 
    y: 10 
  },
  visible: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  wave: {
    rotate: [0, -10, 12, -10, 9, 0],
    transition: {
      duration: 1.5,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      repeat: 0
    }
  }
};

// Loading spinner animation
export const spinnerVariants: Variants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity
    }
  }
};