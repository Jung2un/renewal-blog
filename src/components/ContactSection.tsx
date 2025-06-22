"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("j_eun_2@naver.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <section
      id="contact"
      className="relative w-full flex justify-center items-center min-h-screen overflow-hidden"
    >
      {copied && (
        <div className="fixed bottom-6 right-6 px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium shadow-md z-[9999] animate-fade-in-out">
          이메일이 복사되었습니다
        </div>
      )}

      <div className="absolute inset-0 z-0">
        <div className="absolute w-[40rem] h-[40rem] bg-gradient-to-br from-blue-300 to-purple-400 opacity-30 rounded-full blur-[120px] top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 dark:from-blue-800 dark:to-purple-900" />
        <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-30 rounded-full blur-[100px] bottom-0 right-0 translate-x-1/3 translate-y-1/3 dark:from-pink-800 dark:to-yellow-600" />
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/70 dark:bg-zinc-900/70 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 backdrop-blur-md border border-zinc-200 dark:border-zinc-800">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            이정은
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Frontend Developer
          </p>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          |
        </p>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400 leading-relaxed">
          끊임없이 배우고 도전하며 <br />더 나은 사용자 경험을 만드는
          개발자입니다.
        </p>

        <div className="w-full flex justify-center gap-6 mt-4">
          <div
            onClick={handleCopyEmail}
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/60 dark:bg-zinc-800 cursor-pointer hover:scale-110 transition-transform shadow border border-zinc-200 dark:border-zinc-700"
            title="이메일 복사"
          >
            <MdEmail className="text-2xl text-rose-300" />
          </div>
          <a
            href="https://open.kakao.com/o/sPjlQBBh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/60 dark:bg-zinc-800 hover:scale-110 transition-transform shadow border border-zinc-200 dark:border-zinc-700"
            title="카카오 오픈채팅"
          >
            <SiKakaotalk className="text-2xl text-yellow-400" />
          </a>
          <a
            href="https://github.com/Jung2un"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/60 dark:bg-zinc-800 hover:scale-110 transition-transform shadow border border-zinc-200 dark:border-zinc-700"
            title="GitHub"
          >
            <FaGithub className="text-2xl text-gray-800 dark:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
