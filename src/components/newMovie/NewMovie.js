import { React, useState } from "react";
import "./NewMovie.css";

export const NewMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescriptoion] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imdbUrl, setImdbUrl] = useState("");
  const [imdbId, setImdbId] = useState("");
  // validation
  const [validationMessageTitle, setValidationMessageTitle] = useState("");
  const [validationMessageImage, setValidationMessageImage] = useState("");
  const [validationMessageImdbUrl, setValidationMessageImdbUrl] = useState("");
  const [validationMessageImdbId, setValidationMessageImdbId] = useState("");

  const [regex] = useState(
    /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/
  );

  const onChangeInput = (e, input) => {
    switch (input) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescriptoion(e.target.value);
        break;
      case "imgUrl":
        setImgUrl(e.target.value);
        break;
      case "imdbUrl":
        setImdbUrl(e.target.value);
        break;
      case "imdbId":
        setImdbId(e.target.value);
        break;
      default:
        return;
    }
  };

  const areInputsFilled = title && imdbUrl && imgUrl && imdbId;

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

    setTitle("");
    setDescriptoion("");
    setImdbId("");
    setImgUrl("");
    setImdbUrl("");
  };

  const validateRequiredInput = (e, input) => {
    const message = "This input is required";

    if (e.target.value.length === 0) {
      switch (input) {
        case "title":
          setValidationMessageTitle(message);
          break;
        case "imgUrl":
          setValidationMessageImage(message);
          break;
        case "imdbUrl":
          setValidationMessageImdbUrl(message);
          break;
        case "imdbId":
          setValidationMessageImdbId(message);
          break;
        default:
          return;
      }
    }
  };

  const checkUrl = (e, input) => {
    const message = "Please, enter the correct url";

    if (e.target.value && input === "imgUrl") {
      if (!regex.test(e.target.value)) {
        setValidationMessageImage(message);
      }
    }

    if (e.target.value && input === "imdbUrl") {
      if (!regex.test(e.target.value)) {
        setValidationMessageImdbUrl(message);
      }
    }
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
            onChange={(e) => onChangeInput(e, "title")}
            onBlur={(e) => validateRequiredInput(e, "title")}
            onFocus={() => setValidationMessageTitle("")}
            style={validationMessageTitle ? { border: "1px solid red" } : null}
          />
          {validationMessageTitle ? validationMessageTitle : null}
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
            onChange={(e) => onChangeInput(e, "description")}
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
            onChange={(e) => onChangeInput(e, "imgUrl")}
            onBlur={(e) => {
              validateRequiredInput(e, "imgUrl");
              checkUrl(e, "imgUrl");
            }}
            onFocus={() => setValidationMessageImage("")}
            style={validationMessageImage ? { border: "1px solid red" } : null}
          />
          {validationMessageImage ? validationMessageImage : null}
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
            onChange={(e) => onChangeInput(e, "imdbUrl")}
            onBlur={(e) => {
              validateRequiredInput(e, "imdbUrl");
              checkUrl(e, "imdbUrl");
            }}
            onFocus={() => setValidationMessageImdbUrl("")}
            style={
              validationMessageImdbUrl ? { border: "1px solid red" } : null
            }
          />
          {validationMessageImdbUrl ? validationMessageImdbUrl : null}
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
            onChange={(e) => onChangeInput(e, "imdbId")}
            onBlur={(e) => validateRequiredInput(e, "imdbId")}
            onFocus={() => setValidationMessageImdbId("")}
            style={validationMessageImdbId ? { border: "1px solid red" } : null}
          />
          {validationMessageImdbId ? validationMessageImdbId : null}
        </div>
      </div>
      <div className="control">
        <button
          className="button is-link"
          disabled={
            !(
              areInputsFilled &&
              !validationMessageImdbUrl &&
              !validationMessageImage
            )
          }
        >
          Add movie
        </button>
      </div>
    </form>
  );
};
