import React, { useState } from 'react';
import { CATEGORY_ITEMS } from './const'; // Убедитесь, что путь верен
import { CategoryItem } from './types'; // Убедитесь, что путь верен

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(
    null
  );

  const handleCardClick = (category: CategoryItem) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="pl-14">
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 pt-24">
        {selectedCategory?.title || 'Категории'}
      </h3>

      {selectedCategory && (
        <button
          onClick={handleBackClick}
          className="text-[#4E3F6F] font-bold text-lg pl-10 pt-4"
        >
          Назад
        </button>
      )}

      {!selectedCategory && (
        <div className="flex flex-wrap justify-between gap-7 mb-7">
          {CATEGORY_ITEMS.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCardClick(category)}
              className="flex items-center justify-around gap-20 mt-7 bg-[#Fff] w-[100%] xl:w-[30%] h-[114px] rounded-[20px] cursor-pointer"
            >
              <span className="text-lg text-[#4E3F6F] font-bold">
                {category.name}
              </span>
              <img
                src={category.imgURL}
                className="w-[119px] h-[84px] rounded-[20px]"
                alt={category.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
