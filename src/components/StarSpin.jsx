import React, { useState, useEffect } from "react";
import Dark from "/react-logo.svg";
import Light from "/light_star.png";
import { useTheme } from "next-themes";

function StarSpin({ classNameSize, ref }) { // Removed TypeScript type annotations
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${classNameSize} object-cover`} ref={ref}>
      <img
        src={theme === "light" ? Light : Dark}
        alt={theme === "light" ? "light themed star" : "dark themed star"}
        className="w-full h-full animate-spin-slow"
      />
    </div>
  );
}

export default StarSpin;
