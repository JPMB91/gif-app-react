import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { UseFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = UseFetchGifs(category);
  return (
    <>
      <h2>{category}</h2>
      {isLoading && <h2>...LOADING</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
