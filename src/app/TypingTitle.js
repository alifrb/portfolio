"use client";
import { useEffect, useState } from "react";

export default function TypingTitle() {
  const fullText = "Hi, I’m Ali"; // متنی که می‌خوای تایپ بشه
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100); // سرعت تایپ (میلی‌ثانیه)
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h2 className="text-[var(--fg)] text-4xl font-bold leading-tight">
      {text}
      <span className="animate-blink">|</span> {/* کرسر چشمک‌زن */}
    </h2>
  );
}
