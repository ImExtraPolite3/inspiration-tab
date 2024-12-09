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
    <div className="about-me">
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          optio repellendus nihil! Ad, placeat rem unde eos cum distinctio
          deleniti incidunt sequi minus illum veniam repudiandae blanditiis,
          asperiores sint nobis.
        </p>
      </div>
      <div className="skills">
        <CreateImages />
      </div>
    </div>
  );
}
