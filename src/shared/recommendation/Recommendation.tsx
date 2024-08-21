const Recommendation = () => {
  const recommendationActer = [
    {
      imgURL: 'src/assets/Photo.png',
      name: 'Екатерина Варнава',
      description:
        'Описание Екатери́на Влади́мировна Варна́ва — российская КВНщица, телеведущая. Участник и хореограф юмористическог...',
      price: '10$',
    },
    {
      imgURL: 'src/assets/Photo (1).png',
      name: 'Айза Анюхина',
      description: 'Актёр и шоумен. Ведущий программы Вечерний Ур...',
      price: '10$',
    },
    {
      imgURL: 'src/assets/Photo (2).png',
      name: 'Егор Крид',
      description: 'Российская бьюти-блогер, бывшая жена Тимати ре...',
      price: '10$',
    },
    {
      imgURL: 'src/assets/Photo (3).png',
      name: 'Екатерина Варнава',
      description: 'Актёр и шоумен. Ведущий программы Вечерний Ур...',
      price: '10$',
    },
    {
      imgURL: 'src/assets/Photo (4).png',
      name: 'Айза Анюхина',
      description: 'Российская бьюти-блогер, бывшая жена Тимати ре...',
      price: '10$',
    },
    {
      imgURL: 'src/assets/Photo (5).png',
      name: 'Айза Анюхина',
      description: 'Актёр и шоумен. Ведущий программы Вечерний Ур...',
      price: '10$',
    },
  ];

  return (
    <div className="mb-28 pl-10">
      <div className="mt-10 pl-10 mb-4">
        <h2 className="text-[#4E3F6F] font-bold text-4xl ">
          Популярные личности
        </h2>
      </div>
      <div className=" flex flex-wrap gap-7">
        {recommendationActer.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-t-2xl bg-[#FFFFFF] rounded-2xl  relative ${
              index === 0 ? 'max-w-[571px]' : 'max-w-[271px]'
            }`}
          >
            <img
              src={item.imgURL}
              alt={item.name}
              className="max-w-full max-h-[263px] rounded-t-2xl"
            />

            <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-7 top-[268px]">
              <p className="text-[#FFFFFF] px-4 py-1 font-bold text-base">
                {' '}
                {item.price}
              </p>
            </div>
            <div className="mt-7 ml-4 max-w-[530px]">
              <h3 className="text-[#4E3F6F] font-bold text-lg ">{item.name}</h3>
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
