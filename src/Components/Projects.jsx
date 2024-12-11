import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

function EachProject({ projectName, projectLinks }) {
  return (
    <div className={projectName}>
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
        <embed src={projectLinks} width="500px" height="300px" />
      </div>
    </div>
  );
}

function CreateProject() {
  return projects.map((eachProject, index) => {
    return (
      <EachProject
        key={index}
        projectName={eachProject}
        // projectLinks={projectLinks[index]}
      />
    );
  });
}

export default function Projects() {
  const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        pin: true,
        start: 1400,
        end: 1720,
        scrub: 1,
        ease: 'linear',
      }
  })

  useGSAP(() => {
    tl.to('.project-text .used-skills', {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: .5,
    })
    tl.to('project-text', {
      marginBottom: -20
    }, '<')
  })


  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="all-projects">
        <CreateProject />
      </div>
    </div>
  );
}

gsap.registerPlugin(useGSAP,ScrollTrigger);