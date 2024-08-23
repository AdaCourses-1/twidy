import { HISTORY_ITEMS } from '@/shared/history/const';
import { HistoryItem } from '@/shared/history/types';

const HistoryTransaction = () => {
  return (
    <div className="pl-14">
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 pt-[17px]">
        История
      </h3>
      <div className="flex flex-col justify-between gap-5">
        {HISTORY_ITEMS.map((transaction: HistoryItem) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center mt-7 bg-[#Fff] h-max-[104px]  xl:w-[70%] rounded-[20px]"
          >
            <img
              src={transaction.imgUrl}
              className="ml-4 mt-4 mb-4 rounded-2xl"
              alt={transaction.name}
            />
            <span className="text-base text-[#4E3F6F] font-bold">
              {transaction.name}
            </span>
            <span className="text-[#8C8CB6] text-base font-bold">
              {transaction.date}
            </span>
            <span className="text-[#8C8CB6] text-base font-bold pr-7">
              {transaction.price}
              {transaction.currency}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTransaction;
