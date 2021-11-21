import React, { useContext, useEffect, useState } from "react";
import { getMovies } from "../../context/movieContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router";

import "./NewList.scss";

function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const changeHandler = (event) => {
    const value = event.target.value;
    setList({ ...list, [event.target.name]: value });
  };

  const selectHandler = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setList({ ...list, [event.target.name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createList(list, dispatch);
    history.push("/lists");
  };

  return (
    <div className="newProduct">
      <div className="newProduct__header">
        <h2 className="newProduct__title">New List</h2>
      </div>

      <div className="newProduct__body">
        <form className="newProduct__form">
          <label>Title</label>
          <input
            type="text"
            placeholder="Popular Movies"
            name="title"
            onChange={changeHandler}
          />
          <label>Genre</label>
          <input
            type="text"
            placeholder="Thriller"
            name="genre"
            onChange={changeHandler}
          />
          <label>Type</label>
          <select name="type" onChange={changeHandler}>
            <option>Type</option>
            <option value="movie">Movie</option>
            <option value="tvShow">TV Show</option>
          </select>
          <label>Content</label>
          <select multiple name="content" onChange={selectHandler}>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>

          <button onClick={submitHandler}>Create</button>
        </form>
      </div>
    </div>
  );
}

export default NewList;
