import { useState } from 'react';

const buttonName = ['inspiration', 'funny'];

function Buttons({ name, currentColor, changeColor }) {
  return (
    <button
      className={name}
      style={{ backgroundColor: currentColor ? 'red' : 'blue' }}
      onClick={changeColor}
    >
      {name}
    </button>
  );
}

function CreateButtons() {
  const [changeButtonColor, setChangeButtonColor] = useState('inspiration');

  return buttonName.map((eachButton, index) => {
    const handleChangeButtonColor = () => {
      setChangeButtonColor(eachButton);
      chrome.windows.create({
        url: 'index.html',
        type: 'popup',
        width: 400,
        height: 300,
      });
    };

    return (
      <Buttons
        key={index}
        name={eachButton}
        currentColor={changeButtonColor === eachButton}
        changeColor={handleChangeButtonColor}
      />
    );
  });
}

export default function DisplayButtons() {
  return (
    <div className="all-buttons">
      <CreateButtons />
    </div>
  );
}
