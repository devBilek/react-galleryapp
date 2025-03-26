import React from "react";
import GalleryItem from "../galleryItem/galleryItem";

export default function GalleryList({ pixabayData, filterTag }) {
  return (
    <ol className="d-flex flex-wrap justify-content-center list-unstyled mt-2 w-100">
      {pixabayData.map((item) => {
        return <GalleryItem key={item.id} item={item} filterTag={filterTag} />;
      })}
    </ol>
  );
}
