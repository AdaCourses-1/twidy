import React, { useState, useEffect } from "react";

const Category = () => {
  const items = [
    {
      name: "Музыканты",
      imgURL: "src/assets/Music.svg",
      title: "Категория “Музыканты”",
    },
    {
      name: "Актёры",
      imgURL: "src/assets/acter.svg",
      title: "Категория “Актёры”",
    },
    {
      name: "YouTubers",
      imgURL: "src/assets/youtuber.svg",
      title: "Категория “YouTubers”",
    },
    {
      name: "Блогеры",
      imgURL: "src/assets/bloger.svg",
      title: "Категория “Блогеры”",
    },
    {
      name: "Комики",
      imgURL: "src/assets/comic.svg",
      title: "Категория “Комики”",
    },
    {
      name: "Модели",
      imgURL: "src/assets/model.svg",
      title: "Категория “Модели”",
    },
  ];

  // Получение состояния из localStorage или установка начального значения
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    return savedCategory ? JSON.parse(savedCategory) : null;
  });

  // Сохранение состояния в localStorage при изменении
  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem(
        "selectedCategory",
        JSON.stringify(selectedCategory)
      );
    } else {
      localStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory]);

  const handleCardClick = (item) => {
    setSelectedCategory(item);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="pl-14">
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 pt-24">
        {selectedCategory ? selectedCategory.title : "Категори"}
      </h3>

      {selectedCategory ? (
        <button
          onClick={handleBackClick}
          className="text-[#4E3F6F] font-bold text-lg pl-10 pt-4"
        >
          Назад
        </button>
      ) : null}

      {!selectedCategory && (
        <div className="flex flex-wrap justify-between gap-7 mb-7">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="flex items-center justify-around gap-20 mt-7 bg-[#Fff] w-[100%] xl:w-[30%] h-[114px] rounded-[20px] cursor-pointer"
            >
              <span className="text-lg text-[#4E3F6F] font-bold">
                {item.name}
              </span>
              <img
                src={item.imgURL}
                className="w-[119px] h-[84px] rounded-[20px]"
                alt={item.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
