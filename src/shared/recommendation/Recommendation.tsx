

const Recommendation = () => {

  return (
    <div className="container">
      <div className="ml-7 min-h-28 content-center">
        <h1 className="text-[#4E3F6F] font-bold text-4xl  ">Рекомендуем</h1>
      </div>
      <div className="flex gap-7">
        <div className="m-4 max-w-[571px] relative rounded-2xl">
          <img className="max-w-[541px] max-h-[263px]"  src="src/assets/Photo.png" alt="sdfghj" />
          <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-5 top-64">
            <p className=" text-[#FFFFFF] pl-4 pr-4 pt-1 pb-1 font-bold text-base">
              10$
            </p>
          </div>

          <div className=" max-w-[530px] mt-7 ml-4">
            <h3 className="text-[#4E3F6F] font-bold text-lg ">
              Екатерина Варнава
            </h3>
            <span className="text-[#8C8CB6] font-semibold text-base ">
              Описание Екатери́на Влади́мировна Варна́ва — российская КВНщица,
              телеведущая. Участник и хореограф юмористическог...
            </span>
          </div>
        </div>
        <div className="rounded-2xl m-4 max-w-[271px] relative">
          <img  src="src/assets/Photo (1).png" alt="wefg" />
          <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-11 top-64">
            <p className=" text-[#FFFFFF] pl-4 pr-4 pt-1 pb-1/2 mb-1 font-bold text-base">
              10$
            </p>
          </div>

          <div className=" mt-7 ml-4">
            <h3 className="text-[#4E3F6F] font-bold text-lg ">Айза Анюхина</h3>
            <span className="text-[#8C8CB6] font-semibold text-base ">
              Актёр и шоумен. Ведущий программы Вечерний Ур...
            </span>
          </div>
        </div>
        <div className="rounded-2xl m-4 max-w-[271px] relative">
          <img src="src/assets/Photo (2).png" alt="wefg" />
          <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-11 top-64">
            <p className=" text-[#FFFFFF] pl-4 pr-4 pt-1 pb-1/2 mb-1 font-bold text-base">
              10$
            </p>
          </div>

          <div className=" mt-7 ml-4">
            <h3 className="text-[#4E3F6F] font-bold text-lg ">Егор Крид</h3>
            <span className="text-[#8C8CB6] font-semibold text-base ">
              Российская бьюти-блогер, бывшая жена Тимати ре...
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="rounded-2xl m-4 max-w-[271px] relative">
          <img    src="src/assets/Photo (3).png" alt="wefg" />
          <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-11 top-64">
            <p className=" text-[#FFFFFF] pl-4 pr-4 pt-1 pb-1/2 mb-1 font-bold text-base">
              10$
            </p>
          </div>

          <div className=" mt-7 ml-4">
            <h3 className="text-[#4E3F6F] font-bold text-lg ">Екатерина Варнава</h3>
            <span className="text-[#8C8CB6] font-semibold text-base ">
            Актер и шоумен. Ведущий программы Вечерний Ург...
            </span>
          </div>
        </div>
        <div className="rounded-2xl m-4 max-w-[271px] relative">
          <img   src="src/assets/Photo (4).png" alt="wefg" />
          <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-11 top-64">
            <p className=" text-[#FFFFFF] pl-4 pr-4 pt-1 pb-1/2 mb-1 font-bold text-base">
              10$
            </p>
          </div>

          <div className=" mt-7 ml-4">
            <h3 className="text-[#4E3F6F] font-bold text-lg ">Айза Анюхина</h3>
            <span className="text-[#8C8CB6] font-semibold text-base ">
            Российская бьюти-блогер, бывшая жена Тимати ре... 
            </span>
          </div>
        </div>
        <div className="rounded-2xl m-4 max-w-[271px] relative">
          <img   src="src/assets/Photo (5).png" alt="wefg" />
          <div className="absolute -mt-60 bg-[#FFA012] rounded-md right-11 top-64">
            <p className=" text-[#FFFFFF] pl-4 pr-4 pt-1 pb-1/2 mb-1 font-bold text-base">
              10$
            </p>
          </div>

          <div className=" mt-7 ml-4">
            <h3 className="text-[#4E3F6F] font-bold text-lg ">Айза Анюхина</h3>
            <span  className=" text-[#8C8CB6] font-semibold text-base ">
            Актёр и шоумен. Ведущий программы Вечерний Ур...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
