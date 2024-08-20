import { Button } from "@/components/ui/button";

const UserServices = () => {
  return (
    <div className="flex-1">
      <h3 className="text-[#4e3f6f] font-bold text-4xl pl-16 pt-10 mb-6">
        Услуги
      </h3>
      <div className="ml-2 flex-1 flex gap-5 flex-col">
        <div className="flex item-center justify-between bg-white p-8 rounded-[20px]">
          <div>
            <h5 className="text-lg font-bold text-[#4e3f6f]">
              Урок английского
            </h5>
            <span>Одно индивидуальное занятие на английском</span>
          </div>
          <Button>Заказать за 25%</Button>
        </div>
        <div className="flex items-center justify-between bg-white p-8 rounded-[20px]">
          <div>
            <h5 className="text-lg font-bold text-[#4e3f6f]">
              Урок английского
            </h5>
            <span className="text-base font-semibold text-[#8c8cb6]">
              Одно индивидуальное занятие на английском
            </span>
          </div>
          <Button>Заказать за 25$</Button>
        </div>
        <div className="flex items-center justify-between bg-white p-8 rounded-[20px]">
          <div>
            <h5 className="text-lg font-bold text-[#4e3f6f]">
              Урок английского
            </h5>
            <span className="text-base font-semibold text-[#8c8cb6]">
              Одно индивидуальное занятие на английском
            </span>
          </div>
          <Button>Заказать за 25$</Button>
        </div>
      </div>
    </div>
  );
};

export default UserServices;
