export function getVisualColor(value, theme) {
  if (value >= 80) {
    return {
      bar: `linear-gradient(120deg,
        rgba(0,255,170,0) 0%,
        rgba(0,255,170,0.25) 20%,
        #00ffc6 50%,
        #00ffea 100%
      )`,
      glow: "0 0 18px rgba(0,255,200,0.9)",
    };
  }

  if (value >= 60) {
    return {
      bar: `linear-gradient(120deg,
        rgba(0,170,255,0) 0%,
        rgba(0,170,255,0.25) 20%,
        #3fa9ff 50%,
        #6fd1ff 100%
      )`,
      glow: "0 0 14px rgba(80,180,255,0.7)",
    };
  }

  if (value >= 40) {
    return {
      bar: `linear-gradient(120deg,
        rgba(255,200,0,0) 0%,
        rgba(255,200,0,0.25) 20%,
        #ffc845 50%,
        #ffe494 100%
      )`,
      glow: "0 0 10px rgba(255,200,80,0.6)",
    };
  }

  return {
    bar: `linear-gradient(120deg,
      rgba(255,70,70,0) 0%,
      rgba(255,70,70,0.25) 20%,
      #ff5a5a 50%,
      #ff9a9a 100%
    )`,
    glow: "0 0 8px rgba(255,80,80,0.5)",
  };
}
