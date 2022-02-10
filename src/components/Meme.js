import React from 'react';

function Meme() {
  return (
    <div className="meme">
      <form className="form" action="">
        <div className="input-field">
          <input className="top-text input" type="text" />
          <input className="bottom-text input" type="text" />
        </div>
        <button className="btn">Get a new meme image</button>
      </form>
    </div>
  );
}

export default Meme;
