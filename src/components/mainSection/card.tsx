"use client";

import { useState } from "react";
import { HeartIcon, PreviousIcon, NextIcon } from "./icons";
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";

const cardData = [
  {
    title: "Movie",
    singer: "Tom Misch",
    image: "/images/tom-misch.jpg",
  },
  {
    title: "Stolen Moments",
    singer: "Cautious Clay",
    image: "/images/cautious-clay.jpg",
  },
  {
    title: "single",
    singer: "marcos g",
    image: "/images/marcos-g.jpg",
  },
  {
    title: "Collide",
    singer: "Justine Skye",
    image: "/images/justine-skye.jpg",
  },
  {
    title: "Congratulations",
    singer: "Post Malone",
    image: "/images/post-malone.jpg",
  },
  {
    title: "SAD!",
    singer: "XXXTENTACION",
    image: "/images/xtentacion.jpg",
  },
];

export default function CardSection() {
  const [cardList, setCardList] = useState(
    cardData.map((card) => ({ ...card, liked: false }))
  );
  const [current, setCurrent] = useState(0);

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

  return (
    <div className="md:translate-x-[50px]">
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
            <Image
              alt="Card background"
              className="object-cover rounded-xl mx-auto z-100"
              src={image}
              width={200}
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
      <div className="grid grid-cols-2 gap-2 mt-4 mx-4 md:mx-0">
        <span className="inline-flex items-center justify-center rounded-full bg-sky-100 md:py-2 py-3 text-sm font-medium text-sky-600 dark:bg-sky-700 dark:text-sky-200">
          🤝 협동심
        </span>
        <span className="inline-flex items-center justify-center rounded-full bg-lime-100 md:py-2 py-3 text-sm font-medium text-lime-600 dark:bg-lime-700 dark:text-lime-200">
          🔍 꼼꼼함
        </span>
        <span className="inline-flex items-center justify-center rounded-full bg-yellow-100 md:py-2 py-3 text-sm font-medium text-yellow-600 dark:bg-yellow-700 dark:text-yellow-200">
          ⏱️ 성실성
        </span>
        <span className="inline-flex items-center justify-center rounded-full bg-pink-100 md:py-2 py-3 text-sm font-medium text-pink-600 dark:bg-pink-700 dark:text-pink-200">
          ✅ 책임감
        </span>
      </div>
    </div>
  );
}
