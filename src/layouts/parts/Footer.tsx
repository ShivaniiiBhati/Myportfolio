import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingHeart {
  id: number;
  x: number;
  startY: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  color: string;
  opacity: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDuration: number;
  twinkleDelay: number;
}

const HEART_COLORS = [
  '#c084fc',
  '#e879f9',
  '#f472b6',
  '#fb7185',
  '#a78bfa',
  '#818cf8',
  '#f9a8d4',
  '#d946ef',
];

function generateHearts(count: number): FloatingHeart[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 2 + Math.random() * 96,
    startY: 60 + Math.random() * 40,
    size: 12 + Math.random() * 24,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 3,
    drift: (Math.random() - 0.5) * 80,
    color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
    opacity: 0.5 + Math.random() * 0.5,
  }));
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() < 0.25 ? 2.5 : 1.5,
    twinkleDuration: 1.2 + Math.random() * 2.5,
    twinkleDelay: Math.random() * 4,
  }));
}

function HeartOverlay({ onClose }: { onClose: () => void }) {
  const hearts = useRef(generateHearts(55)).current;
  const stars = useRef(generateStars(100)).current;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 overflow-hidden cursor-pointer pointer-events-auto"
      style={{ background: 'rgba(5, 0, 20, 0.65)' }}
      onClick={onClose}
    >
      {/* Twinkling stars */}
      {stars.map((s) => (
        <motion.div
          key={`star-${s.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0.15, 0.95, 0.15], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: s.twinkleDuration,
            repeat: Infinity,
            delay: s.twinkleDelay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Soft nebula glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 300,
            left: '10%',
            top: '20%',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 250,
            right: '5%',
            bottom: '25%',
            background: 'radial-gradient(ellipse, rgba(236,72,153,0.10) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Floating hearts rising from bottom */}
      {hearts.map((h) => (
        <motion.div
          key={`heart-${h.id}`}
          className="absolute select-none pointer-events-none"
          style={{
            left: `${h.x}%`,
            bottom: `${100 - h.startY}%`,
            fontSize: h.size,
            color: h.color,
            lineHeight: 1,
          }}
          initial={{ opacity: 0, y: 0, x: 0, scale: 0.4, rotate: -10 }}
          animate={{
            opacity: [0, h.opacity, h.opacity * 0.7, 0],
            y: [0, -180 - Math.random() * 120],
            x: [0, h.drift],
            scale: [0.4, 1, 0.85],
            rotate: [-10, 10, -5],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          ♥
        </motion.div>
      ))}

      {/* Dismiss hint */}
      <motion.p
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-white/30 tracking-widest uppercase pointer-events-none select-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        click anywhere to close
      </motion.p>
    </motion.div>
  );
}

export default function Footer() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [pulse, setPulse] = useState(false);

  const handleHeartClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setPulse(true);
    setTimeout(() => setPulse(false), 400);
    setShowOverlay(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showOverlay && <HeartOverlay onClose={() => setShowOverlay(false)} />}
      </AnimatePresence>

      <div className="py-8 text-center text-sm text-[#8b8aa0] border-t border-[#2a2a3a]">
        © {new Date().getFullYear()} Shivani Bhati
        <button
          onClick={handleHeartClick}
          aria-label="Show love"
          className="inline-flex items-center ml-2 focus:outline-none"
          style={{ background: 'none', border: 'none', padding: '6px 8px', cursor: 'pointer' }}
        >
          <motion.span
            animate={pulse ? { scale: [1, 1.8, 1], rotate: [0, -15, 15, 0] } : {}}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-pink-400 hover:text-pink-300 transition-colors text-base select-none"
            style={{ display: 'inline-block' }}
          >
            ♥
          </motion.span>
        </button>
      </div>
    </>
  );
}
