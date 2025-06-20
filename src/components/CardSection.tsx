"use client";

import { useState } from "react";
import { Card, CardBody, Image, Button, Slider } from "@heroui/react";
import {
  HeartIcon,
  PauseCircleIcon,
  NextIcon,
  PreviousIcon,
  RepeatOneIcon,
  ShuffleIcon,
} from "./Icons";

export default function CardSection() {
  const [isLiked, setIsLiked] = useState(false); // 하트 상태

  const toggleLike = () => setIsLiked((prev) => !prev);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[510px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="/images/post-malone.jpg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Post Malone</h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <h1 className="text-large font-medium mt-2">Congratulations</h1>
              </div>
              <Button
                isIconOnly
                className={`data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 ${
                  isLiked
                    ? "text-red-500"
                    : "text-default-900/60 dark:text-foreground/30"
                }`}
                radius="full"
                variant="light"
                onClick={toggleLike}
              >
                <HeartIcon fill={isLiked ? "currentColor" : "none"} />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
                isDisabled
              />
              <div className="flex justify-between">
                <p className="text-small">1:35</p>
                <p className="text-small text-foreground/50">3:41</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center gap-2 mt-2">
              <Button isIconOnly radius="full" variant="light" isDisabled>
                <RepeatOneIcon className="text-foreground/80" />
              </Button>
              <Button isIconOnly radius="full" variant="light" isDisabled>
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto"
                radius="full"
                variant="light"
                isDisabled
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button isIconOnly radius="full" variant="light" isDisabled>
                <NextIcon />
              </Button>
              <Button isIconOnly radius="full" variant="light" isDisabled>
                <ShuffleIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
