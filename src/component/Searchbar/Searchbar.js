import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Searchbar({ onSubmit }) {
  const location = useLocation();
  const [image, setImage] = useState("");

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get("image");

    if (queryValue === null) {
      return;
    }
    setImage(queryValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageChange = (EventTarget) => {
    setImage(EventTarget.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (image.trim() === "") {
      toast.error("Please Enter countries to get weather!", {
        position: "top-left",
        theme: "colored",
      });
      return;
    }
    onSubmit(image);
    setImage("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Get weather in your countries"
          value={image}
          onChange={handleImageChange}
        />
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
}

Searchbar.propType = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
