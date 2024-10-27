import React, { useEffect, useRef, useCallback } from 'react';
import './cursor.css';
import { gsap } from 'gsap';

const InteractiveStars = () => {
  const isMobileDevice = () => typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);
  const startRef = useRef(new Date().getTime());
  const originPosition = { x: 0, y: 0 };
  const lastRef = useRef({
    starTimestamp: startRef.current,
    starPosition: originPosition,
    mousePosition: originPosition,
  });

  const config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    sizes: ['1.4rem', '1rem', '0.6rem'],
    animations: ['fall-1', 'fall-2', 'fall-3'],
  };

  const countRef = useRef(0);
  
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const selectRandom = (items) => items[rand(0, items.length - 1)];
  const withUnit = (value, unit) => `${value}${unit}`;
  const px = (value) => withUnit(value, 'px');
  const ms = (value) => withUnit(value, 'ms');
  
  const createStar = useCallback((position) => {
    const star = document.createElement('div');
    const size = selectRandom(config.sizes);
    star.className = 'star';
    star.style.left = px(position.x);
    star.style.top = px(position.y);
    star.style.width = size;
    star.style.height = size;
    star.innerHTML = `
      <svg viewBox="0 0 512 512" width="100%" height="100%">
        <path fill="white" d="M256 16L304 144L440 144L331 229L379 357L256 288L133 357L181 229L72 144L208 144L256 16Z" />
      </svg>
    `;
    star.style.animationName = config.animations[countRef.current++ % 3];
    star.style.animationDuration = ms(config.starAnimationDuration);
  
    document.body.appendChild(star);
    setTimeout(() => document.body.removeChild(star), config.starAnimationDuration);
  }, []);
  
  const createGlowPoint = useCallback((position) => {
    const glow = document.createElement('div');
    glow.className = 'glow-point';
    glow.style.left = px(position.x);
    glow.style.top = px(position.y);
  
    document.body.appendChild(glow);
    setTimeout(() => document.body.removeChild(glow), config.glowDuration);
  }, []);
  
  const createClickConfetti = useCallback((position) => {
    const confettiCount = 20; // Number of confetti pieces
    for (let i = 0; i < confettiCount; i++) {
      const star = document.createElement("div");
      const size = selectRandom(config.sizes);
      star.className = "star";
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.width = size;
      star.style.height = size;
      star.innerHTML = `
        <svg viewBox="0 0 512 512" width="100%" height="100%">
          <path fill="white" d="M256 16L304 144L440 144L331 229L379 357L256 288L133 357L181 229L72 144L208 144L256 16Z" />
        </svg>
      `;
      
      // Append the star to the body
      document.body.appendChild(star);
  
      // Generate random angles for the confetti explosion effect
      const angle = rand(0, 360);
      const distance = rand(50, 150); // Random distance to explode
      const xOffset = distance * Math.cos((angle * Math.PI) / 180);
      const yOffset = distance * Math.sin((angle * Math.PI) / 180);
  
      // Animate the star falling down using GSAP
      gsap.to(star, {
        x: `+=${xOffset}`, // Move star horizontally
        y: `+=${yOffset}`, // Move star vertically
        duration: 0.5, // Duration of the explosion
        ease: "power1.out",
        onComplete: () => {
          // After explosion, make it fall
          gsap.to(star, {
            opacity: 0,
            duration: 0.1,
            ease: "power1.out",
            onComplete: () => {
                document.body.removeChild(star); // Remove the star after opacity
            }});
        }
      });
    }
  }, []);
  
  const determinePointQuantity = (distance) => Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);
  
  const createGlow = useCallback((last, current) => {
    const distance = Math.sqrt(Math.pow(current.x - last.x, 2) + Math.pow(current.y - last.y, 2));
    const quantity = determinePointQuantity(distance);
  
    const dx = (current.x - last.x) / quantity;
    const dy = (current.y - last.y) / quantity;
  
    Array.from(Array(quantity)).forEach((_, index) => {
      const x = last.x + dx * index;
      const y = last.y + dy * index;
      createGlowPoint({ x, y });
    });
  }, [createGlowPoint]);
  
  const updateLastStar = (position) => {
    lastRef.current.starTimestamp = new Date().getTime();
    lastRef.current.starPosition = position;
  };
  
  const handleOnClick = useCallback((e) => {
    const mousePosition = { x: e.clientX, y: e.clientY };
    createClickConfetti(mousePosition); // Trigger confetti on click
  }, [createClickConfetti]);
  
  const updateLastMousePosition = (position) => lastRef.current.mousePosition = position;
  
  const adjustLastMousePosition = (position) => {
    if (lastRef.current.mousePosition.x === 0 && lastRef.current.mousePosition.y === 0) {
      lastRef.current.mousePosition = position;
    }
  };
  
  const handleOnMove = useCallback((e) => {
    const mousePosition = 'clientX' in e ? { x: e.clientX, y: e.clientY } : { x: e.touches[0].clientX, y: e.touches[0].clientY };
    adjustLastMousePosition(mousePosition);
    const now = new Date().getTime();
    const hasMovedFarEnough = Math.sqrt(Math.pow(lastRef.current.starPosition.x - mousePosition.x, 2) + Math.pow(lastRef.current.starPosition.y - mousePosition.y, 2)) >= config.minimumDistanceBetweenStars;
    const hasBeenLongEnough = now - lastRef.current.starTimestamp > config.minimumTimeBetweenStars;
  
    if (hasMovedFarEnough || hasBeenLongEnough) {
      createStar(mousePosition);
      updateLastStar(mousePosition);
    }
    createGlow(lastRef.current.mousePosition, mousePosition);
    updateLastMousePosition(mousePosition);
  }, [createStar, createGlow]);

  useEffect(() => {
    if (isMobileDevice()) return;
    document.body.style.overflow = 'unset';

    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', handleOnMove);
    window.addEventListener('click', handleOnClick);
    document.body.addEventListener('mouseleave', () => updateLastMousePosition(originPosition));

    return () => {
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleOnMove);
      window.removeEventListener('click', handleOnClick);
      document.body.removeEventListener('mouseleave', () => updateLastMousePosition(originPosition));
    };
  }, [handleOnMove]);

  return null;
};

export default InteractiveStars;
