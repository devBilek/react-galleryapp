import React from "react";
import "./mainContent.css";
import GalleryList from "../galleryList/galleryList";

export default function MainContent({
  pixabayData,
  loading,
  error,
  filterTag,
}) {
  return (
    <div className="p-1" id="mainContent">
      <div
        className="d-flex justify-content-center align-items-center"
        id="gallery"
      >
        {error ? <h1>{error}</h1> : null}
        {loading ? (
          <div className="spinner-border" role="status"></div>
        ) : (
          <GalleryList pixabayData={pixabayData} filterTag={filterTag} />
        )}
      </div>
    </div>
  );
}
