"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@heroui/react";
import { cardData } from "@/constants/card";
import { keyword } from "@/constants/keyword";
import { HeartIcon, PreviousIcon, NextIcon } from "./icons";
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";

export default function CardSection() {
  const [cardList, setCardList] = useState(
    cardData.map((card) => ({ ...card, liked: false }))
  );
  const [current, setCurrent] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 이전 카드로 이동
  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? cardList.length - 1 : prev - 1));
  // 다음 카드로 이동
  const goNext = () =>
    setCurrent((prev) => (prev === cardList.length - 1 ? 0 : prev + 1));

  const toggleLike = () => {
    const newCardList = [...cardList];
    newCardList[current].liked = !newCardList[current].liked;
    setCardList(newCardList);
  };
  const { title, singer, image, liked } = cardList[current];

  useEffect(() => {
    setImageLoaded(false);
  }, [current, image]);

  return (
    <>
      <div className="mx-4 md:mx-0 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          핵심 역량 & 성향
        </h3>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {keyword.slice(0, 4).map(({ label, bgColor, textColor, darkBgColor, darkTextColor }, index) => (
            <span
              key={index}
              className={`transition-transform-background inline-flex items-center justify-center rounded-full py-2 text-sm font-medium ${bgColor} ${textColor} ${darkBgColor} ${darkTextColor}`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {keyword.slice(4, 8).map(({ label, bgColor, textColor, darkBgColor, darkTextColor }, index) => (
            <span
              key={index}
              className={`transition-transform-background inline-flex items-center justify-center rounded-full py-2 text-sm font-medium ${bgColor} ${textColor} ${darkBgColor} ${darkTextColor}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        🎵 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭
      </h3>
      <Card className="md:max-w-[225px] py-4 m-4 md:m-0 overflow-visible">
        <CardHeader className="pb-0 pt-2 px-4 items-start flex flex-row justify-between overflow-visible">
          <div>
            <h4 className="font-bold text-large">{title}</h4>
            <small className="text-default-500">{singer}</small>
          </div>
          <div>
            <Button
              isIconOnly
              className={`data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 ${
                liked
                  ? "text-red-500"
                  : "text-default-900/60 dark:text-foreground/30"
              }`}
              radius="full"
              variant="light"
              onPress={toggleLike}
            >
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex flex-col items-center">
          <div className="relative w-[200px]">
            <Button
              className="absolute left-[-9.5%] top-1/2 -translate-y-1/2 z-10 rounded-full w-8 h-8 min-w-0 p-0 dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-gray-100 hover:bg-white"
              isIconOnly
              variant="light"
              radius="full"
              onClick={goPrev}
              aria-label="이전"
            >
              <PreviousIcon />
            </Button>
            {!imageLoaded && (
              <Skeleton className="w-[200px] h-[200px] rounded-xl absolute top-0 left-0" />
            )}
            <Image
              alt="Card background"
              className={`object-cover rounded-xl mx-auto z-100 ${!imageLoaded ? "invisible" : "visible"}`}
              src={image}
              width={200}
              height={200}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
            <Button
              className="absolute right-[-9.5%] top-1/2 -translate-y-1/2 z-10 rounded-full w-8 h-8 min-w-0 p-0 dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-gray-100 hover:bg-white"
              isIconOnly
              variant="light"
              radius="full"
              onClick={goNext}
              aria-label="다음"
            >
              <NextIcon />
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
