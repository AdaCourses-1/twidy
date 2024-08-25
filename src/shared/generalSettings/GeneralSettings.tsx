import React from 'react';
import userAvatar from '@/assets/Photo (3).png';
import Instagram from '@/assets/inst.svg';
import Twitter from '@/assets/twit.svg';
import Vk from '@/assets/vk.svg';
import { Separator } from '@radix-ui/react-separator';
import { Button } from '@/components/ui/button';
import UserServices from '@/shared/userServices/UserServices';
import Answer from '@/shared/answer/Answer';
import BlockingDrawer from '@/shared/blockingDrawer/BlockingDrawer';
import ComplainDrawer from '@/shared/complainDrawer/ComplainDrawer';
import SocialNetwork from '../socialNetwork/SocialNetwork';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const GeneralSettings = () => {
  return (
    <div className="settings-page w-full mb-20">
      <div>
        <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10 ">
          Профиль
        </h3>

        <div className="flex pt-8 pl-10">
          <div>
            <aside className="p-4 bg-white rounded-[20px] max-w-[400px]">
              <div className="relative">
                <img
                  width={380}
                  height={380}
                  src={userAvatar}
                  alt="Дарья Небесная"
                  className="object-cover"
                />
                <span className="absolute right-28 bottom-4 rounded-lg text-white  bg-[#FFA012] py-1 p-5 text-base font-bold">
                  Изменить фото
                </span>
              </div>
              <div className="pt-5">
                <div className="mb-5 ">
                  <Input
                    placeholder="Екатерина"
                    className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    placeholder="Варнава"
                    className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F] "
                  />
                </div>
                <div className="mb-4">
                  <Input
                    placeholder="@VanilnoeNebo"
                    className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F] "
                  />
                </div>
                <Textarea
                  className=" text-base text-[#4E3F6F] bg-[#F2F2FE] pl-5 pt-4 h-36 "
                  placeholder="Привет, меня зовут Аня, мне 25 лет, я из Санкт-Петербурга. Веду блог по правильному питанию. Хочешь персональную рекомендацию?"
                />
              </div>
              <Button className="mt-4">Сохранить</Button>
            </aside>
          </div>
          <div className="flex-1 -mt-16 ">
            <SocialNetwork />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default GeneralSettings;
