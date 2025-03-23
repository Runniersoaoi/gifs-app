import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gift Expert App</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
