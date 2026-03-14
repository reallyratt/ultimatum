import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Heart, Shield, Infinity as InfinityIcon, Wrench, Puzzle, 
  Eye, Ear, Smile, Home, Flame, Crown, Scale, Users, 
  Music, Ticket, Mail, Gem, Flower2, Star, Sun, Anchor, Compass, Lock
} from 'lucide-react';

const pages = [
  { type: 'cover', title: "An Ultimatum" },
  {
    type: 'content',
    lines: [
      "For the past few months...",
      "You've made me happy once more.",
      "When the world seems like a repetition of disappointment,",
      "You're standing in front of me like an anomaly that breaks the cycle."
    ],
    decorations: [
      { Icon: Sparkles, className: "top-[10%] left-[10%] w-8 h-8", showAt: 1 },
      { Icon: Star, className: "bottom-[20%] right-[10%] w-10 h-10", showAt: 2 },
      { Icon: Sun, className: "top-[20%] right-[20%] w-16 h-16 opacity-20", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "For the past few months...",
      "You've made me a better man.",
      "Just by existing right beside me,",
      "You're pumping a gas that keeps me going once more."
    ],
    decorations: [
      { Icon: Flame, className: "bottom-[15%] left-[20%] w-12 h-12", showAt: 2 },
      { Icon: Compass, className: "top-[15%] right-[15%] w-16 h-16", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I feel like I'm at the safest place,",
      "The most comfortable zone,",
      "And that I could do anything peacefully",
      "As long as you with me."
    ],
    decorations: [
      { Icon: Shield, className: "top-[25%] left-[10%] w-20 h-20 opacity-20", showAt: 1 },
      { Icon: Home, className: "bottom-[15%] right-[20%] w-12 h-12", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "And that makes me realize that...",
      "I need to keep you around my arms,",
      "Since you're already sitting comfortably in my heart."
    ],
    decorations: [
      { Icon: Heart, className: "top-[20%] right-[20%] w-12 h-12 text-red-900/30", showAt: 2 },
      { Icon: Anchor, className: "bottom-[20%] left-[15%] w-16 h-16", showAt: 3 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I need to hug you for eternity,",
      "Not letting any man, creature, or even destiny",
      "Take you away from me."
    ],
    decorations: [
      { Icon: InfinityIcon, className: "top-[10%] left-1/2 -translate-x-1/2 w-24 h-24 opacity-20", showAt: 1 },
      { Icon: Lock, className: "bottom-[15%] right-[15%] w-12 h-12", showAt: 3 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I want to be an even better man...",
      "That is personalized for you, Cey."
    ],
    decorations: [
      { Icon: Wrench, className: "top-[20%] left-[20%] w-12 h-12", showAt: 1 },
      { Icon: Star, className: "bottom-[20%] right-[20%] w-10 h-10", showAt: 2 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I want us to be together,",
      "Not as a colleague,",
      "Not as a partner,",
      "But one as a whole."
    ],
    decorations: [
      { Icon: Puzzle, className: "top-[15%] right-[15%] w-20 h-20 opacity-30", showAt: 2 },
      { Icon: Puzzle, className: "bottom-[15%] left-[15%] w-20 h-20 opacity-30", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I want our eyes to see the same future,",
      "I want our mouth to sing reassurance for each other,",
      "I want our ears to hear others daily update,",
      "I want our scent to be blended together,"
    ],
    decorations: [
      { Icon: Eye, className: "top-[10%] left-[10%] w-10 h-10", showAt: 1 },
      { Icon: Ear, className: "bottom-[20%] right-[10%] w-10 h-10", showAt: 3 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I want our body to be each others home,",
      "I want our mind to be each others safe place,",
      "I want our thing to be everything."
    ],
    decorations: [
      { Icon: Home, className: "top-[15%] right-[15%] w-12 h-12", showAt: 1 },
      { Icon: Sparkles, className: "bottom-[15%] left-[15%] w-12 h-12", showAt: 3 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I know that I'm not Mr. Perfect, I got my flaws too.",
      "And I am ready to improve myself for you.",
      "To fix my bad habits, my bad tendency,",
      "Just with the hope that you feel even more safer around my arms."
    ],
    decorations: [
      { Icon: Shield, className: "bottom-[15%] left-1/2 -translate-x-1/2 w-20 h-20 opacity-20", showAt: 2 },
      { Icon: Heart, className: "top-[15%] right-[20%] w-10 h-10", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "If you think small or doesn't feel enough about urself,",
      "You're not",
      "And I'm not looking for perfection either.",
      "I'm looking for you, Cey."
    ],
    decorations: [
      { Icon: Crown, className: "top-[15%] left-[20%] w-16 h-16 opacity-30", showAt: 2 },
      { Icon: Users, className: "bottom-[15%] right-[20%] w-20 h-20 opacity-20", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I want to be with you.",
      "As long as we can be better together.",
      "Us against the cruel world,",
      "As one."
    ],
    decorations: [
      { Icon: Scale, className: "top-[20%] right-[20%] w-20 h-20 opacity-30", showAt: 2 },
      { Icon: Heart, className: "bottom-[20%] left-[20%] w-12 h-12", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "I know we may have our ups and downs,",
      "But let's work it out together,",
      "Find the middle way,",
      "Or simply compromise."
    ],
    decorations: [
      { Icon: Users, className: "top-[15%] left-[15%] w-16 h-16 opacity-30", showAt: 2 },
      { Icon: Anchor, className: "bottom-[15%] right-[15%] w-16 h-16 opacity-30", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "Let's not make an impulsive decision,",
      "Be like an adult and face the problem together.",
      "We may soon face the dopamine deficiency phase of dealing with each other.",
      "But lets face it up together as a team,",
      "Not a chance to walk away and seeking another dopamine source."
    ],
    decorations: [
      { Icon: Shield, className: "top-[10%] right-[10%] w-12 h-12 opacity-30", showAt: 2 },
      { Icon: Users, className: "bottom-[10%] left-[10%] w-16 h-16 opacity-30", showAt: 4 }
    ]
  },
  {
    type: 'content',
    lines: [
      "Just like Ted, I want to give you The Blue French Horn.",
      "Just like Peralta, I want to go on the worst date ever with you.",
      "Just like Hal, I want to be the one who love you more."
    ],
    decorations: [
      { Icon: Music, className: "top-[15%] left-[15%] w-10 h-10", showAt: 1 },
      { Icon: Ticket, className: "bottom-[15%] right-[20%] w-12 h-12", showAt: 2 }
    ]
  },
  {
    type: 'content',
    lines: [
      "Just like Phil, I'd ask my surgery teddy bear so you wouldn't have to worry.",
      "Just like Howard, I'd make a concert dedicated for you.",
      "Just like Janet, I'll live a thousand hell if I'm with you."
    ],
    decorations: [
      { Icon: Heart, className: "top-[15%] right-[15%] w-10 h-10", showAt: 1 },
      { Icon: Star, className: "bottom-[15%] left-[15%] w-12 h-12", showAt: 3 }
    ]
  },
  {
    type: 'content',
    lines: [
      "Let me do the action for you, Cey.",
      "So its not just a word."
    ],
    decorations: [
      { Icon: Sparkles, className: "top-[20%] left-[20%] w-12 h-12", showAt: 1 },
      { Icon: Mail, className: "bottom-[20%] right-[20%] w-20 h-20 opacity-30", showAt: 2 }
    ]
  },
  {
    type: 'content',
    lines: [
      "This is The Ultimatum.",
      "Let me know how you feel about me too,",
      "Genuinely."
    ],
    decorations: [
      { Icon: Gem, className: "top-[15%] left-1/2 -translate-x-1/2 w-16 h-16 opacity-30", showAt: 1 },
      { Icon: Crown, className: "bottom-[15%] right-[20%] w-12 h-12 opacity-30", showAt: 3 }
    ]
  },
  {
    type: 'content',
    lines: [
      "And lastly,",
      "Will you give me the honor to be your significant ones?"
    ],
    decorations: [
      { Icon: Flower2, className: "bottom-[15%] left-[15%] w-16 h-16", showAt: 2 },
      { Icon: Flower2, className: "bottom-[15%] right-[15%] w-16 h-16", showAt: 2 }
    ]
  }
];

const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.95,
    zIndex: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1,
    transition: { duration: 1.5, type: "spring", bounce: 0.1 }
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.95,
    zIndex: 0,
    transition: { duration: 1.5 }
  })
};

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleTap = (isRight: boolean) => {
    setHasInteracted(true);
    if (isRight) {
      if (pageIndex === 0) {
        setDirection(1);
        setPageIndex(1);
        setStep(1);
      } else {
        const currentLines = pages[pageIndex].lines?.length || 0;
        if (step < currentLines) {
          setStep(step + 1);
        } else if (pageIndex < pages.length - 1) {
          setDirection(1);
          setPageIndex(pageIndex + 1);
          setStep(1);
        } else {
          // Loop back to the beginning
          setDirection(1);
          setPageIndex(0);
          setStep(0);
        }
      }
    } else {
      if (pageIndex === 0) return;
      if (step > 1) {
        setStep(step - 1);
      } else {
        setDirection(-1);
        setPageIndex(pageIndex - 1);
        if (pageIndex - 1 === 0) {
          setStep(0);
        } else {
          setStep(pages[pageIndex - 1].lines?.length || 0);
        }
      }
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    const width = window.innerWidth;
    handleTap(e.clientX > width / 2);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleTap(true);
      } else if (e.key === 'ArrowLeft') {
        handleTap(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageIndex, step]);

  const currentPage = pages[pageIndex];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-neutral-900 text-[#2C1E16] font-serif selection:bg-[#D4A373]/30 flex items-center justify-center"
      style={{ perspective: '2000px' }}
      onPointerDown={handlePointerDown}
    >
      {/* Dark desk background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      {/* Global Paper texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
          <filter id="globalNoiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#globalNoiseFilter)"/>
        </svg>
      </div>

      {/* Background Music */}
      {hasInteracted && (
        <div className="absolute opacity-0 pointer-events-none w-1 h-1 overflow-hidden">
          <iframe
            width="100"
            height="100"
            src="https://www.youtube-nocookie.com/embed/ENVxylS0ew4?start=2254&autoplay=1&controls=0&loop=1&playlist=ENVxylS0ew4"
            allow="autoplay"
          />
        </div>
      )}

      {/* Simultaneous Page Transition Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={pageIndex}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ transformOrigin: "left center" }}
            className={`absolute w-full h-full shadow-2xl overflow-hidden ${
              currentPage.type === 'cover' 
                ? 'bg-[#3A1F1D] border-l-[16px] md:border-l-[32px] border-[#241211]' 
                : 'bg-[#F4EBD8] border-l-[16px] md:border-l-[32px] border-[#3A1F1D]'
            }`}
          >
            {/* Paper texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
              </svg>
            </div>

            {currentPage.type === 'cover' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-[#D4AF37] md:border-8 border-double border-[#D4AF37]/30 md:m-4 md:rounded-lg">
                <h1 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-8 text-center drop-shadow-md">
                  {currentPage.title}
                </h1>
                <div className="w-32 h-1 bg-[#D4AF37]/50 mb-12" />
                <motion.p 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-sm tracking-widest uppercase opacity-70"
                >
                  PERSONALIZED FOR CEY
                </motion.p>
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-16">
                {/* Decorations */}
                {currentPage.decorations?.map((dec, i) => {
                  const Icon = dec.Icon;
                  return (
                    <AnimatePresence key={`dec-${pageIndex}-${i}`}>
                      {step >= dec.showAt && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotate: -20 }}
                          animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0, rotate: 20 }}
                          transition={{ duration: 0.8, type: "spring" }}
                          className={`absolute ${dec.className}`}
                        >
                          <Icon strokeWidth={1.5} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  );
                })}

                {/* Text Lines with Smooth Layout Animation */}
                <motion.div layout className="z-10 w-full max-w-lg mx-auto flex flex-col justify-center space-y-6 text-center">
                  <AnimatePresence mode="popLayout">
                    {currentPage.lines?.map((line, i) => (
                      step > i && (
                        <motion.p
                          layout
                          key={`line-${pageIndex}-${i}`}
                          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="text-lg md:text-xl leading-relaxed font-medium tracking-wide"
                        >
                          {line}
                        </motion.p>
                      )
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Page Number */}
                <div className="absolute bottom-6 left-0 right-0 text-center opacity-30 text-sm">
                  - {pageIndex} -
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
