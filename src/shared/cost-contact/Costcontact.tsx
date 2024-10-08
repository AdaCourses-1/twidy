import Services from '@/shared/services/Services';
import { COSTCONTACT_ITEMS } from './const';
import { CostContactItem } from './types';
const Costcontact = () => {
  return (
    <>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pb-3 pt-[17px] h-[100px] flex items-center">
        Стоимость контакта
      </h3>
      <div className="flex gap-[30px] -ml-7 mb-10">
        {COSTCONTACT_ITEMS.map((costcontact: CostContactItem) => (
          <div
            className="w-[270px] h-[344px] rounded-[20px]"
            style={{ backgroundColor: costcontact.color }}
          >
            <div
              key={costcontact.color}
              className="pt-10 pb-8 ml-9 max-w-[150px]"
            >
              {costcontact.icon && (
                <costcontact.icon className="w-[65px] h-12 font-bold text-white" size={costcontact.size} />
              )}
              <h5 className="text-white text-lg font-bold mt-6 mb-[69px]">
                {costcontact.title}
              </h5>
              <p className="text-white text-4xl font-bold">
                {costcontact.price}
                {costcontact.currency}
              </p>
              <span className="text-white text-base font-bold">Изменение</span>
            </div>
          </div>
        ))}
      </div>
      <Services />
    </>
  );
};

export default Costcontact;
