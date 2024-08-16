const Recommendation = () => {
  const recommendationActer = [
    {
      imgURL: "src/assets/Photo.png",
      name: "Екатерина Варнава",
      description: "Описание Екатери́на Влади́мировна Варна́ва — российская КВНщица, телеведущая. Участник и хореограф юмористическог...",
      price: "10$",
    },
    {
      imgURL: "src/assets/Photo (1).png",
      name: "Айза Анюхина",
      description: "Актёр и шоумен. Ведущий программы Вечерний Ур...",
      price: "10$",
    },
    {
      imgURL: "src/assets/Photo (2).png",
      name: "Егор Крид",
      description: "Российская бьюти-блогер, бывшая жена Тимати ре...",
      price: "10$",
    },
    {
      imgURL: "src/assets/Photo (3).png",
      name: "Екатерина Варнава",
      description: "Актёр и шоумен. Ведущий программы Вечерний Ур...",
      price: "10$",
    },
    {
      imgURL: "src/assets/Photo (4).png",
      name: "Айза Анюхина",
      description: "Российская бьюти-блогер, бывшая жена Тимати ре...",
      price: "10$",
    },
    {
      imgURL: "src/assets/Photo (5).png",
      name: "Айза Анюхина",
      description: "Актёр и шоумен. Ведущий программы Вечерний Ур...",
      price: "10$",
    },
  ];

  return (
    <div className="container mb-28">
      <div className="ml-7 min-h-28 content-center">
        <h1 className="text-[#4E3F6F] font-bold text-4xl  ">Рекомендуем</h1>
      </div>
      <div className="flex flex-wrap gap-7"> 
        {recommendationActer.map((item, index) => (
          <div key={index} className={`bg-[#FFFFFF] rounded-2xl m-4 relative ${index === 0 ? 'max-w-[571px]' : 'max-w-[241px]'}`}> 
            <img src={item.imgURL} alt={item.name} className="max-w-full max-h-[263px] rounded-t-2xl" />

            <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-5 top-64">
              <p className="text-[#FFFFFF] px-4 py-1 font-bold text-base"> {/* Удалены отступы pl-4 pr-4 pt-1 pb-1/2 mb-1 */}
                {item.price}
              </p>
            </div>
            <div className="mt-7 ml-4 max-w-[530px]">
              <h3 className="text-[#4E3F6F] font-bold text-lg ">
                {item.name}
              </h3>
              <span className="text-[#8C8CB6] font-semibold text-base ">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;