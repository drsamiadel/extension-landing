"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import { Safari } from "@/components/magicui/safari";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden max-w-7xl mx-auto">
      {/* Hero Section */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white text-center">
              Enhance Your Browsing Experience with
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none tracking-widest text-blue-500">
                AUTOLAB
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/extension.png`}
          alt="Extension Preview"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center shadow-lg"
          draggable={false}
        />
      </ContainerScroll>

      {/* Features Section */}
      <TracingBeam className="px-6 py-10">
        <div className="max-w-2xl mx-auto antialiased relative text-center">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight">
              Transform Your Web Experience
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 mt-4">
              AUTOLAB makes browsing easier by highlighting links and counting
              words efficiently. A simple yet powerful tool for users,
              researchers, and content creators.
            </p>
          </BackgroundLines>
        </div>
        <div className="relative py-40">
          <Safari
            url="magicui.design"
            className="size-full"
            videoSrc="/recording.mp4"
          />
        </div>
      </TracingBeam>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 max-w-5xl mx-auto text-white">
        <FeatureCard
          title="🔗 Highlight Links"
          description="Automatically mark all links in blue with an underline for easy identification."
        />
        <FeatureCard
          title="🔢 Word Counter"
          description="Quickly count the total words on the page to enhance readability and analysis."
        />
        <FeatureCard
          title="🚀 Lightweight & Fast"
          description="Designed for efficiency, AUTOLAB runs seamlessly without slowing down your browsing."
        />
      </div>

      {/* Interactive Section */}
      <GoogleGeminiEffectDemo />

      {/* Footer */}
      <footer className="mx-auto p-6 text-center text-neutral-300 text-sm">
        <p>
          Built with ❤️ by{" "}
          <a
            href="https://anytimesoftware.com/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Anytime Software Inc.
          </a>
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p className="text-neutral-300 text-sm">{description}</p>
    </div>
  );
}

function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathLengths = [0.2, 0.15, 0.1, 0.05, 0].map((start, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(scrollYProgress, [0, 0.8], [start, 1.2])
  );

  return (
    <div
      className="h-[80vh] w-full rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect pathLengths={pathLengths} />
    </div>
  );
}
