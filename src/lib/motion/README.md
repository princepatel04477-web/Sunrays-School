# Sunrays Vidhyalaya — Motion Architecture & Ownership Rules

## Animation Ownership Rule (Non-negotiable)

- **GSAP owns**:
  - Anything tied to scroll position, pinning, and scrubbing (`ScrollTrigger`)
  - SplitText typography reveals
  - The "Sunrise" signature SVG timelines
  - Multi-step orchestration timelines (>3 steps)

- **Motion (motion/react) owns**:
  - Hover, press, and focus state micro-interactions
  - Mount/unmount lifecycle (`AnimatePresence`)
  - Layout & shared-element morphing (`layoutId`)
  - Floating menus, drawers, sheets, and dialogs

- **Hard Constraints**:
  - Never animate the same property on the same element with both GSAP and Motion.
  - Only animate `transform`, `opacity`, and `clip-path` (for editorial curtain reveals).
  - Never animate raw layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`).
  - Always respect `prefers-reduced-motion: reduce` (fall back to instant layout or simple fade).
