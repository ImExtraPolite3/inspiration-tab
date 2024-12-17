import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

export default function StartPage() {
  useGSAP(() => {
    gsap.to('.intro > h1', {
      duration: 1,
      text: {
        value: "Hi, I'm Abdul",
      },
      ease: 'linear',
    });
  });

  return (
    <>
      <div className="start-page">
        <section className="intro">
          <h1></h1>
          <p>Aspiring web developer</p>
        </section>
      </div>
    </>
  );
}

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
