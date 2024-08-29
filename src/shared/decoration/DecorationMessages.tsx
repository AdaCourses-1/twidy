import { useState } from 'react';

import Aiza from '@/assets/Photo (1).png';

import EditColor from '@/shared/editColor/EditColor';
import EditFont from '@/shared/editFont/EditFont';

import { Button } from '@/components/ui/button';

const DecorationMessages = () => {
  const [messageColor, setMessageColor] = useState('#615DFA');

  return (
    <div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 pt-8 mb-8">
        Оформление
      </h3>
      <div className="ml-9 bg-white p-8 rounded-[20px] mb-5">
        <div className="flex items-center mb-2">
          <img
            width={58}
            height={66}
            src={Aiza}
            alt="Aiza"
            className="rounded-lg"
          />
          <p className="bg-[#F2F2FE] text-[#4E3F6F] font-semibold text-base px-10 py-4 ml-5 mt-3 rounded-3xl">
            Сообщение, которое присылает вам собеседник
          </p>
        </div>
        <span className="text-[#8C8CB6] text-base ml-20">16:36</span>
        <div className="flex items-center justify-end mb-2">
          <p
            className="bg-[#615DFA] text-[#fff] font-semibold text-base px-10 py-4 mr-5 mt-3 rounded-3xl"
            style={{ backgroundColor: messageColor }}
          >
            Сообщение, которое присылает вам собеседник
          </p>
          <img
            width={58}
            height={66}
            src={Aiza}
            alt="Aiza"
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-end mr-20 items-center">
          <span className="bg-[#FFA012] text-white text-base px-3 py-1 rounded-sm">
            15$
          </span>
          <span className="text-[#8C8CB6] text-base pl-1">16:36</span>
        </div>
      </div>
      <div className="flex">
        <EditColor
          selectedColor={messageColor}
          onColorChange={setMessageColor}
        />
        <EditFont />
      </div>
      <h3 className="text-[#4E3F6F] font-bold text-4xl pl-10 pt-8 mb-12">
        Безопасность
      </h3>
      <div className="flex gap-10 items-center mb-7">
        <Button className="ml-9">Двухфакторная аутентификация</Button>

        <p className="text-[#8C8CB6] font-semibold text-base">
          Вы можете установить пароль, который будет запрашиваться после
          проверочного кода.
        </p>
      </div>
      <div className="flex gap-10 items-center">
        <Button className="ml-9 bg-[#FF3B30] hover:bg-[#fb594e]">
          Отозвать код аварийного доступа
        </Button>

        <p className="text-[#8C8CB6] font-semibold text-base">
          Если Ваш код был скомпрометирован, Вы можете отозвать его и установить
          новый.
        </p>
      </div>
    </div>
  );
};

export default DecorationMessages;
