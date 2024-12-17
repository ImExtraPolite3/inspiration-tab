import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const images = ['css', 'git', 'html', 'javascript', 'npm', 'react', 'webpack'];

function ImagesProp({ imagesSource }) {
  return (
    <div className="image">
      <img src={`${imagesSource}.png`} alt={imagesSource} />
    </div>
  );
}

function CreateImages() {
  return images.map((eachImage, index) => {
    return <ImagesProp key={index} imagesSource={eachImage} />;
  });
}

export default function AboutMe() {
  const carouselRef = useRef(null); // Reference to the skills-inner container

  useGSAP(() => {
    const carousel = carouselRef.current;

    // Duplicate content for seamless looping
    const items = Array.from(carousel.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    gsap.to('.skills-inner', {
      xPercent: -100,
      duration: 50,
      ease: 'none',
      repeat: -1,
    });
  });

  return (
    <div id="about-me">
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          Hardworking student seeking employment. Ready to make use of my skills
          in web development to further the mission of a company. Have a strong
          willingness and motivation to learn new programs.
        </p>
      </div>
      <div className="skills">
        <div className="skills-inner" ref={carouselRef}>
          <CreateImages />
        </div>
      </div>
    </div>
  );
}
