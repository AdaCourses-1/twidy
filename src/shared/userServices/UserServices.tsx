import { Button } from '@/components/ui/button';
import { SERVICE_ITEMS } from './const';
import { ServiceItems } from './types';

const UserServices = () => {
  return (
    <div className="flex-1">
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pl-10 mb-6">Услуга</h3>
      <div className="ml-2 flex-1 flex gap-5 flex-col">
          {SERVICE_ITEMS.map((service:ServiceItems)=>(
             <div className="flex items-center justify-between bg-white p-8 rounded-[20px]">
             <div>
               <h5 className="text-lg font-bold text-[#4E3F6F]">
                 {service.name}
               </h5>
               <span className="text-base font-semibold text-[#8C8C86]">
                 {service.description}
               </span>
             </div>
             <Button>
              Заказать за {service.price}
              {service.currency}
             </Button>
           </div>
          ))}
      </div>
    </div>
  );
};

export default UserServices;