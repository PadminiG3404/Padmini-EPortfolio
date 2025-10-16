"use client";

/// <reference types="react" />
import React, { useEffect, useState } from "react";

const LOTUS_COUNT = 40;
const LOTUS_SIZE_RANGE: [number, number] = [32, 80];
const BUFFER = 24;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function isOverlapping(
  a: { x: number; y: number; radius: number },
  b: { x: number; y: number; radius: number }
): boolean {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < a.radius + b.radius + BUFFER;
}

export default function LotusBackground() {
  const [lotuses, setLotuses] = useState<React.ReactElement[]>([]);


  useEffect(() => {
    const placed: {
    topPercent: number;
    leftPercent: number;
    size: number;
    opacity: number;
    radius: number;
    x: number;
    y: number;
    }[] = [];
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    for (let i = 0; i < LOTUS_COUNT; i++) {
      let tries = 0;
      while (tries < 200) {
        const size = randomBetween(...LOTUS_SIZE_RANGE);
        const opacity = randomBetween(0.2, 0.35);

        const leftPercent = randomBetween(0, 100);
        const topPercent = randomBetween(0, 100);

        const x = (leftPercent / 100) * screenW;
        const y = (topPercent / 100) * screenH;

        const radius = size / 2;

        const current = {
          topPercent,
          leftPercent,
          size,
          opacity,
          radius,
          x,
          y,
        };

        const overlaps = placed.some((p) => isOverlapping(current, p));
        if (!overlaps) {
          placed.push(current);
          break;
        }

        tries++;
      }
    }

    const lotusImages = placed.map((lotus, i) => (
      <img
        key={i}
        src="/images/bgl1.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: `${lotus.topPercent}%`,
          left: `${lotus.leftPercent}%`,
          width: lotus.size,
          height: lotus.size,
          opacity: lotus.opacity,
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
          filter: "blur(0.1px)",
        }}
        draggable={false}
      />
    ));

    setLotuses(lotusImages);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {lotuses}
    </div>
  );
}
// Note: Ensure to have @types/react installed for TypeScript support
// You can install it via npm: npm install --save-dev @types/react