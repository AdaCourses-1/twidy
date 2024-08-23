import { HISTORY_ITEMS } from '@/shared/history/const';
import { HistoryItem } from '@/shared/history/types';

const History = () => {
  return (
    <div className="pl-14">
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 pt-[17px]">
        История
      </h3>
      <div className="flex flex-col justify-between gap-5">
        {HISTORY_ITEMS.map((setting: HistoryItem, i: number) => (
          <div
            key={i}
            className="flex justify-between items-center gap-20 mt-7 bg-[#Fff] h-max-[104px]  xl:w-[70%] rounded-[20px]"
          >
            <img
              src={setting.imgUrl}
              className="ml-4 mt-4 mb-4 rounded-2xl"
              alt={setting.name}
            />
            <span className="text-base text-[#4E3F6F] font-bold">
              {setting.name}
            </span>
            <span className="text-[#8C8CB6] text-base font-bold">
              {setting.date}
            </span>
            <span className="text-[#8C8CB6] text-base font-bold pr-7">
              {setting.price}
              {setting.currency}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
