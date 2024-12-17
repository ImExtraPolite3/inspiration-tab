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
        <div className="skills-inner">
          <CreateImages />
        </div>
      </div>
    </div>
  );
}
