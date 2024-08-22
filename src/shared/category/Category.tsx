const Category = () => {
  const items = [
    { name: "Музыканты", imgURL: "src/assets/Music.svg" },
    { name: "Актёры", imgURL: "src/assets/acter.svg" },
    { name: "YouTubers", imgURL: "src/assets/youtuber.svg" },
    { name: "Блогеры", imgURL: "src/assets/bloger.svg" },
    { name: "Комики", imgURL: "src/assets/comic.svg" },
    { name: "Модели", imgURL: "src/assets/model.svg" },
  ];

  return (
    <div className="pl-14">
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 pt-24">
        Категори
      </h3>

      <div className="flex flex-wrap justify-between gap-7 mb-7">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-around gap-20 mt-7 bg-[#Fff] w-[100%] xl:w-[30%] h-[114px] rounded-[20px]"
          >
            <span className=" text-lg text-[#4E3F6F] font-bold">
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
    </div>
  );
};

export default Category;
