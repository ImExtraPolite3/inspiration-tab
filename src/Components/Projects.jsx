import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const projects = [
  'Sentence Search',
  'Rock Paper Scissors',
  'Tic-Tac-Toe',
  'Journey Through the Solar System',
];

const projectLinks = [
  'https://imextrapolite3.github.io/sentence-shuffle/',
  'https://imextrapolite3.github.io/rock-paper-scissors/',
  'https://imextrapolite3.github.io/tic-tac-toe/',
  'https://imextrapolite3.github.io/journey-through-the-solar-system/',
];

const projectImgs = [
  'sentence-shuffle-img',
  'rock-paper-scissors-img',
  'tic-tac-toe-img',
  'journey-through-the-solar-system-img',
];

function EachProject({ projectName, projectLinks, projectImgs }) {
  return (
    <a href={projectLinks} target="_blank" className="project-links">
      <div className="each-project">
        <div className="project-text">
          <h1>{projectName}</h1>
          <ul className="used-skills">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              porro ut exercitationem accusantium? Sapiente omnis magnam labore
              nostrum nesciunt corporis maiores, rem tempore doloremque
              repudiandae aliquid dignissimos non quibusdam? Perspiciatis!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              porro ut exercitationem accusantium? Sapiente omnis magnam labore
              nostrum nesciunt corporis maiores, rem tempore doloremque
              repudiandae aliquid dignissimos non quibusdam? Perspiciatis!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              porro ut exercitationem accusantium? Sapiente omnis magnam labore
              nostrum nesciunt corporis maiores, rem tempore doloremque
              repudiandae aliquid dignissimos non quibusdam? Perspiciatis!
            </li>
          </ul>
        </div>
        <div className="project-image">
          <img src={projectImgs} />
        </div>
      </div>
    </a>
  );
}

function CreateProject() {
  return projects.map((eachProject, index) => {
    return (
      <EachProject
        key={index}
        projectName={eachProject}
        projectImgs={`${projectImgs[index]}.png`}
        projectLinks={projectLinks[index]}
      />
    );
  });
}

export default function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: '#projects',
        pin: true,
        scrub: 1,
      },
    });

    tl.to('.project-links', {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
      marginBottom: -20,
    });
  });

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="all-projects">
        <CreateProject />
      </div>
    </div>
  );
}
