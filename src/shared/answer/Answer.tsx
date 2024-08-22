import { ANSWER_ITEMS } from './const';
import { AnswerItems } from './types';

const Answer = () => {
  return (
    <div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10 pb-10">
        Ответы на запросы
      </h3>
      <div className="flex">
        {ANSWER_ITEMS.map((answer: AnswerItems) => (
          <div className="relative max-w-[200px] ml-11 ">
            <img
              src={answer.img}
              alt="Екатерина Варнава"
              className="rounded-[20px]"
            />
            <div className="bg-[#4E3F6F] absolute py-1 px-4 rounded-[20px] top-3 right-2 ">
              <p className="text-white text-base font-bold">
                {answer.duration}
              </p>
            </div>
            <div className="mt-4">
              <h5 className="mb-1 text-base font-bold text-[#4E3F6F]">
                {answer.message}
              </h5>
              <span className="text-lg font-semibold text-[#8C8CB6]">
                {answer.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answer;
