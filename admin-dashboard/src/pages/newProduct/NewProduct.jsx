import React, { useContext, useState } from "react";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { storage } from "../../firebase";

import "./NewProduct.scss";

function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgThumbnail, setImgThumbnail] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const changeHandler = (event) => {
    const value = event.target.value;
    setMovie({ ...movie, [event.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is" + progress + " % done.");
        },
        (error) => console.log(error),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((previous) => {
              return { ...previous, [item.label]: url };
            });
            setUploaded((previous) => previous + 1);
          });
        }
      );
    });
  };

  const uploadHandler = (event) => {
    event.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgThumbnail, label: "imgThumbnail" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className="newProduct">
      <div className="newProduct__header">
        <h2 className="newProduct__title">New Movie</h2>
      </div>

      <div className="newProduct__body">
        <form className="newProduct__form">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(event) => setImg(event.target.files[0])}
          />
          <label>Title Image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(event) => setImgTitle(event.target.files[0])}
          />
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imgThumbnail"
            name="imgThumbnail"
            onChange={(event) => setImgThumbnail(event.target.files[0])}
          />
          <label>Title</label>
          <input
            type="text"
            placeholder="Forrest Gump"
            name="title"
            onChange={changeHandler}
          />
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={changeHandler}
          />
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={changeHandler}
          />
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={changeHandler}
          />
          <label>Rating</label>
          <input
            type="text"
            placeholder="Rating"
            name="rating"
            onChange={changeHandler}
          />
          <label>TV Show?</label>
          <select name="isTvShow" id="isTvShow" onChange={changeHandler}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(event) => setTrailer(event.target.files[0])}
          />
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(event) => setVideo(event.target.files[0])}
          />
          {uploaded === 5 ? (
            <button onClick={submitHandler}>Create</button>
          ) : (
            <button onClick={uploadHandler}>Upload</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
