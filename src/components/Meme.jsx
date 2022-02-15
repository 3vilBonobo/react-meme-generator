import React, { useState, useEffect } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: 'one does not simply',
    bottomText: 'make a react meme generator',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((memeData) => setAllMemes(memeData.data.memes));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const getNewImage = () => {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <main className="meme">
      <div className="form">
        <div className="input-field">
          <input
            className="top-text input"
            name="topText"
            type="text"
            value={meme.topText}
            placeholder="top text"
            onChange={handleChange}
          />
          <input
            className="bottom-text input"
            name="bottomText"
            type="text"
            value={meme.bottomText}
            placeholder="bottom text"
            onChange={handleChange}
          />
        </div>
        <button onClick={getNewImage} className="btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="meme image" />
        <h2 className="meme-topText">{meme.topText}</h2>
        <h2 className="meme-bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
