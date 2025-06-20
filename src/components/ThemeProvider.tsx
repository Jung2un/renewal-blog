"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

// Context 생성
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

// ThemeProvider 컴포넌트
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 기본값은 다크모드
  const [theme, setTheme] = useState<Theme>("dark");

  // 테마가 변경될 때 html의 className을 동기화
  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (theme === "dark") {
        html.classList.add("dark");
        html.classList.remove("light");
      } else {
        html.classList.add("light");
        html.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // ThemeProvider로 감싸지 않은 경우 에러 처리
    throw new Error("ThemeProvider 안에서 사용해야 합니다.");
  }
  return context;
}