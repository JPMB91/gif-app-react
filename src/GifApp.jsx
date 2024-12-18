import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Arale"]);

  const onAddCategory = (newCategory) => {
    // no se admiten repetidos
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Gif App</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
