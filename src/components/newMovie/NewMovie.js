import { React, useState } from "react";
import "./NewMovie.css";

export const NewMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescriptoion] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imdbUrl, setImdbUrl] = useState("");
  const [imdbId, setImdbId] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescriptoion(e.target.value);
  };
  const onChangeImgUrl = (e) => {
    setImgUrl(e.target.value);
  };
  const onChangeImdbUrl = (e) => {
    setImdbUrl(e.target.value);
  };
  const onChangeImdbId = (e) => {
    setImdbId(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: imdbId,
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    };

    onAdd(newMovie);
    console.log(newMovie);

    //  setTitle("");
    //  setDescriptoion("");
  };

  return (
    <form action="#" onSubmit={onSubmit}>
      <h2 className="title">Add a new movie</h2>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter the title of the movie"
            value={title}
            onChange={onChangeTitle}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            type="text"
            placeholder="Enter the description of the movie"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter an image url"
            value={imgUrl}
            onChange={onChangeImgUrl}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">IMDB</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter an imdb url"
            value={imdbUrl}
            onChange={onChangeImdbUrl}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">IMDB ID</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter an imbd id"
            value={imdbId}
            onChange={onChangeImdbId}
          />
        </div>
      </div>
      <div className="control">
        <button className="button is-link">Add movie</button>
      </div>
    </form>
  );
};
