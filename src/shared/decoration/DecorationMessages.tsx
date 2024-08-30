import { useState } from 'react';

import Aiza from '@/assets/Photo (1).png';

import EditColor from '@/shared/editColor/EditColor';
import EditFont from '@/shared/editFont/EditFont';
import { Colors } from '../decoration/const';

import { Button } from '@/components/ui/button';

const DecorationMessages = () => {
  const [messageColor, setMessageColor] = useState(Colors.blue);

  return (
    <div>
      <h3
        className={`text-[${Colors.violet}] font-bold text-4xl pl-16 pt-8 mb-8`}
      >
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
          <p
            className={`bg-[${Colors.lightPurple}] text-[${Colors.violet}] font-semibold text-base px-10 py-4 ml-5 mt-3 rounded-3xl rounded-bl-none`}
          >
            Сообщение, которое присылает вам собеседник
          </p>
        </div>
        <span className={`text-[${Colors.darkPurple}] text-base ml-20`}>
          16:36
        </span>
        <div className="flex items-center justify-end mb-2">
          <p
            className=" text-[#fff] font-semibold text-base px-10 py-4 mr-5 mt-3 rounded-3xl rounded-br-none"
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
          <span
            className={`bg-[${Colors.accent}] text-white text-base px-3 py-1 rounded-sm`}
          >
            15$
          </span>
          <span className={`text-[${Colors.darkPurple}] text-base pl-1`}>
            16:36
          </span>
        </div>
      </div>
      <div className="flex">
        <EditColor
          selectedColor={messageColor}
          onColorChange={setMessageColor}
        />
        <EditFont />
      </div>
      <h3
        className={`text-[${Colors.violet}] font-bold text-4xl pl-16 pt-8 mb-12`}
      >
        Безопасность
      </h3>
      <div className="flex gap-10 items-center mb-7">
        <Button className="ml-9">Двухфакторная аутентификация</Button>
        <p className={`text-[${Colors.darkPurple}] font-semibold text-base`}>
          Вы можете установить пароль, который будет запрашиваться после
          проверочного кода.
        </p>
      </div>
      <div className="flex gap-10 items-center">
        <Button
          className={`ml-9 bg-[${Colors.red}] hover:bg-[${Colors.lightRed}]`}
        >
          Отозвать код аварийного доступа
        </Button>
        <p className={`text-[${Colors.darkPurple}] font-semibold text-base`}>
          Если Ваш код был скомпрометирован, Вы можете отозвать его и установить
          новый.
        </p>
      </div>
    </div>
  );
};

export default DecorationMessages;
