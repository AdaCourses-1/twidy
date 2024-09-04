import Card from '@/assets/card.png';
import { Button } from '@/components/ui/button';

import { X } from 'lucide-react';

const Finance = () => {
  return (
    <div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pb-10 pt-10">
        Оплата и финансы
      </h3>
      <div className="flex gap-40 ">
        <aside>
          <span className="text-base pb-3 text-[#8C8CB6] font-bold">
            Текущий баланс
          </span>
          <p className="text-4xl font-bold text-[#4E3F6F]">1 000 USD</p>
          <div className="flex items-center gap-4 mt-9 mb-7">
            <div className="bg-[#FFA012] h-4 w-4 rounded-full"></div>
            <span>+12 000</span>

            <div className="bg-[#8C8CB6] h-4 w-4 rounded-full ml-6"></div>
            <span>-2 000</span>
          </div>
          <Button className="bg-[#FFA012]">Вывести деньги</Button>
        </aside>
        <div>
          <div className="relative mb-5">
            <img src={Card} alt="card" />

            <div className="absolute top-24 left-7">
              <span className="text-[#fff] pr-2 font-bold text-base">••••</span>
              <span className="text-[#fff] font-bold text-base">3456</span>
              <span className="absolute top-12 left-1 font-bold text-base text-[#fff]">
                06 / 21
              </span>
              <X className="text-[#fff] absolute bottom-20 left-64 cursor-pointer" />
            </div>
          </div>
          <div className="bg-white pl-7 pr-5 py-7 rounded-[20px]">
            <div className="relative">
              <p className="text-base font-bold text-[#4E3F6F]">Visa *3456</p>
              <p className="text-base font-bold text-[#8C8CB6]">07 / 22</p>
              <X className="absolute top-3 right-0 cursor-pointer" />
            </div>
          </div>
          <p className="text-base font-bold text-[#4E3F6F] pl-7 pt-5 pb-8 cursor-pointer">
            + Добавить карту
          </p>
        </div>
      </div>
    </div>
  );
};

export default Finance;
