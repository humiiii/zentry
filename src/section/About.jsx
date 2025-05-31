import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import AnimatedTitle from "../components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div className="min-h-screen w-screen scroll-mt-2" id="about">
      <div className="relative flex flex-col items-center gap-5 mt-36 mb-8">
        <p className="font-[general] font-medium text-sm uppercase md:text-[14px]">
          Welcome to Zentry
        </p>
        <AnimatedTitle
          title={"disc<b>o</b>ver the world's l<b>a</b>rgest shared adventure"}
          containerClass={"mt-5 !text-black text-center"}
        />
        <div className="about-subtext">
          <p>The Metagame begins—your life, now an epic MMORPG</p>
          <p>
            Zentry is the unified play layer driving attention and contribution
            through cross-world AI gamification.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="about-image mask-clip-path">
          <img
            src="/zentry/img/about.webp"
            alt="background"
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
