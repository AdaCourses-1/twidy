import Rectongle from '@/assets/Rectongle.png';

const Answer = () => {
  return (
    <div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10 pb-10">
        Ответы на запросы
      </h3>
      <div className="flex">
        <div className="relative max-w-[200px] ml-11 ">
          <img
            src={Rectongle}
            alt="Екатерина Варнава"
            className="rounded-[20px]"
          />
          <div className="bg-[#4E3F6F] absolute py-1 px-4 rounded-[20px] top-3 right-2 ">
            <p className="text-white text-base font-bold">1:24</p>
          </div>
          <div className="mt-4">
            <h5 className="mb-1 text-base font-bold text-[#4E3F6F]">
              Поздравление для Александра
            </h5>
            <span className="text-lg font-semibold text-[#8C8CB6]">
              2 часа назад
            </span>
          </div>
        </div>
        <div className="relative max-w-[200px] ml-11 ">
          <img
            src={Rectongle}
            alt="Екатерина Варнава"
            className="rounded-[20px]"
          />
          <div className="bg-[#4E3F6F] absolute py-1 px-4 rounded-[20px] top-3 right-2 ">
            <p className="text-white text-base font-bold">1:24</p>
          </div>
          <div className="mt-4">
            <h5 className="mb-1 text-base font-bold text-[#4E3F6F]">
              Поздравление для Александра
            </h5>
            <span className="text-lg font-semibold text-[#8C8CB6]">
              2 часа назад
            </span>
          </div>
        </div>
        <div className="relative max-w-[200px] ml-11 ">
          <img
            src={Rectongle}
            alt="Екатерина Варнава"
            className="rounded-[20px]"
          />
          <div className="bg-[#4E3F6F] absolute py-1 px-4 rounded-[20px] top-3 right-2 ">
            <p className="text-white text-base font-bold">1:24</p>
          </div>
          <div className="mt-4">
            <h5 className="mb-1 text-base font-bold text-[#4E3F6F]">
              Поздравление для Александра
            </h5>
            <span className="text-lg font-semibold text-[#8C8CB6]">
              2 часа назад
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
