import React from "react";

const Category = () => {
  return (
    <div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-20 pt-24  ">
        Категории
      </h3>
      <div className="flex gap-7 mb-7">
        <div className="flex items-center gap-24 ml-12 mt-7 bg-[#Fff] w-[371px] h-[114px] rounded-[20px]">
          <span className="pl-7 text-lg text-[#4E3F6F] font-bold">
            Музыканты
          </span>
          <img
            src="src/assets/Music.svg"
            class="w-[119px] h-[84px] rounded-[20px]"
            alt="music"
          />
        </div>
        <div className="flex items-center gap-24 ml-12 mt-7 bg-[#Fff] w-[371px] h-[114px] rounded-[20px]">
          <span className="pl-7 text-lg text-[#4E3F6F] font-bold">Актёры</span>
          <img
            src="src/assets/acter.svg"
            class="w-[119px] h-[84px] rounded-[20px]"
            alt="music"
          />
        </div>
        <div className="flex items-center gap-24 ml-12 mt-7 bg-[#Fff] w-[371px] h-[114px] rounded-[20px]">
          <span className="pl-7 text-lg text-[#4E3F6F] font-bold">
            YouTubers
          </span>
          <img
            src="src/assets/youtuber.svg"
            class="w-[119px] h-[84px] rounded-[20px]"
            alt="music"
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex items-center gap-24 ml-12 mt-7 bg-[#Fff] w-[371px] h-[114px] rounded-[20px]">
          <span className="pl-7 text-lg text-[#4E3F6F] font-bold">Блогеры</span>
          <img
            src="src/assets/bloger.svg"
            class="w-[119px] h-[84px] rounded-[20px]"
            alt="music"
          />
        </div>
        <div className="flex items-center gap-24 ml-12 mt-7 bg-[#Fff] w-[371px] h-[114px] rounded-[20px]">
          <span className="pl-7 text-lg text-[#4E3F6F] font-bold">Комики</span>
          <img
            src="src/assets/comic.svg"
            class="w-[119px] h-[84px] rounded-[20px]"
            alt="music"
          />
        </div>
        <div className="flex items-center gap-24 ml-12 mt-7 bg-[#Fff] w-[371px] h-[114px] rounded-[20px]">
          <span className="pl-7 text-lg text-[#4E3F6F] font-bold">Модели</span>
          <img
            src="src/assets/model.svg"
            class="w-[119px] h-[84px] rounded-[20px]"
            alt="music"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
