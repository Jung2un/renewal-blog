"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useLenis } from "@/components/LenisProvider";

export default function Header() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "About", href: "#main" },
    { label: "Project", href: "#project" },
    { label: "Portpolio", href: "#portfolio" },
    { label: "Skill", href: "#skill" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    selector: string
  ) => {
    e.preventDefault();

    setTimeout(() => {
      const target = document.querySelector(selector) as HTMLElement | null;
      if (target && lenis) {
        lenis.scrollTo(target, { offset: -80, duration: 3.5 });
      }
    }, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-sm z-50 shadow">
      <div className="flex max-w-7xl mx-auto items-center justify-between px-2 py-2">
        <div>
          <Button variant="ghost" asChild>
            <Link href="/" className="text-xl font-bold tracking-tight">
              &lt;/&gt;
            </Link>
          </Button>
        </div>

        <div className="hidden xs:flex gap-4">
          {navItems.map(({ label, href }) => (
            <Button key={href} variant="link" asChild>
              <a href={href} onClick={(e) => handleClick(e, href)}>
                {label}
              </a>
            </Button>
          ))}
          <Toggle
            variant="outline"
            pressed={theme === "light"}
            onPressedChange={toggleTheme}
            aria-label="테마 변경"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Toggle>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className="block xs:hidden">
          <Toggle
            variant="default"
            pressed={theme === "light"}
            onPressedChange={toggleTheme}
            aria-label="테마 변경"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Toggle>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col xs:hidden gap-1 px-4 pb-2 animate-fade-in">
          {navItems.map(({ label, href }) => (
            <Button key={href} variant="link" className="w-fit px-2" asChild>
              <a href={href} onClick={(e) => handleClick(e, href)}>
                {label}
              </a>
            </Button>
          ))}
        </div>
      )}
    </header>
  );
}
