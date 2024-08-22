import { Button } from "@/components/ui/button";


const UserServices = () => {
  return (
    <div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10">Услуги</h3>
      <div className="ml-2 flex-1 flex gap-5 flex-col">
        <div className="flex items-center justify-between bg-white p-8 rounded-[20px]">
          <div>
            <h5 className="text-lg font-bold text-[#4E3F6F]">Урок английского</h5>
            <span className="text-lg font-semibold text-[#8C8CB6]">Одно индивидуальное занятие на английском языке</span>
          </div>
          <Button>Заказать за 25$</Button>
        </div>
        <div className="flex items-center justify-between bg-white p-8 rounded-[20px]">
          <div>
            <h5 className="text-lg font-bold text-[#4E3F6F]">Урок английского в разговорной форме</h5>
            <span className="text-lg font-semibold text-[#8C8CB6]">Одно индивидуальное занятие на английском языке</span>
          </div>
          <Button>Заказать за 25$</Button>
        </div>
        <div className="flex items-center justify-between bg-white p-8 rounded-[20px]">
          <div>
            <h5 className="text-lg font-bold text-[#4E3F6F]">Урок английского в по учебнику</h5>
            <span className="text-lg font-semibold text-[#8C8CB6]">Одно индивидуальное занятие на английском языке</span>
          </div>
          <Button>Заказать за 25$</Button>
        </div>
      </div>
    </div>
  )
}

export default UserServices;