import { useState } from 'react';

import Aiza from '@/assets/Photo (1).png';

import EditColor from '@/shared/editColor/EditColor';
import EditFont from '@/shared/editFont/EditFont';
import colors from '@/shared/decoration/const';

import { Button } from '@/components/ui/button';

const DecorationMessages = () => {
  const [messageColor, setMessageColor] = useState(colors.blue);

  const messageColorStyle = { backgroundColor: messageColor };

  return (
    <div>
      <h3
        className={`text-[${colors.violet}] font-bold text-4xl pl-10 pt-8 mb-8`}
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
            className={`bg-[${colors.lightPurple}] text-[${colors.violet}] font-semibold text-base px-10 py-4 ml-5 mt-3 rounded-3xl rounded-bl-none`}
          >
            Сообщение, которое присылает вам собеседник
          </p>
        </div>
        <span className={`text-[${colors.darkPurple}] text-base ml-20`}>
          16:36
        </span>
        <div className="flex items-center justify-end mb-2">
          <p
            className={`bg-[${messageColorStyle.messageColor}] text-[#fff] font-semibold text-base px-10 py-4 mr-5 mt-3 rounded-3xl rounded-br-none`}
            style={messageColorStyle}
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
            className={`bg-[${colors.accent}] text-white text-base px-3 py-1 rounded-sm`}
          >
            15$
          </span>
          <span className={`text-[${colors.darkPurple}] text-base pl-1`}>
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
        className={`text-[${colors.violet}] font-bold text-4xl pl-10 pt-8 mb-12`}
      >
        Безопасность
      </h3>
      <div className="flex gap-10 items-center mb-7">
        <Button className="ml-9">Двухфакторная аутентификация</Button>
        <p className={`text-[${colors.darkPurple}] font-semibold text-base`}>
          Вы можете установить пароль, который будет запрашиваться после
          проверочного кода.
        </p>
      </div>
      <div className="flex gap-10 items-center">
        <Button
          className={`ml-9 bg-[${colors.red}] hover:bg-[${colors.lightRed}]`}
        >
          Отозвать код аварийного доступа
        </Button>
        <p className={`text-[${colors.darkPurple}] font-semibold text-base`}>
          Если Ваш код был скомпрометирован, Вы можете отозвать его и установить
          новый.
        </p>
      </div>
    </div>
  );
};

export default DecorationMessages;
