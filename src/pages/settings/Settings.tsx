import Header from "@/shared/header/Header";
import userAvatar from "../../assets/user.png";
import React from "react";
import Twit from "../../assets/twit.svg";
import Inst from "../../assets/inst.svg";
import Vk from "../../assets/vk.svg";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div>
      <Header />
      <div>
        <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10">
          Дарья Небесая
        </h3>
        <div className="flex pt-8 pl-10">
          <aside className="p-4 bg-white rounded-[20px] max-w-[410px]">
            <div className="relative">
              <span className="absolute left-4 top-4 bg-[#ffa012] rounded-md text-white py-1 p-3 text-base font-bold">
                @Ahmedka
              </span>
              <img
                width={380}
                height={380}
                src={userAvatar}
                alt="Дарья"
                className="object-cover"
              />
              <span className="absolute left-4 bottom-4 bg-[#4e3f6f80] rounded-md text-white py-1 p-3 text-base font-bold">
                Актер / Артист
              </span>
            </div>
            <div className="p-4 gap-3">
              <p className="text-[#4e3f6f] text-base font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                maxime, voluptatibus molestiae aperiam...
                <span className="text-[#615dfa]">еще</span>
              </p>
              <div className="flex items-center gap-4 pt-4">
                <ul className="flex items-center gap-3">
                  <li>
                    <a href="#">
                      <img src={Twit} alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Inst} alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Vk} alt="twitter" />
                    </a>
                  </li>
                </ul>
                <Separator
                  orientation="vertical"
                  className="w-[3px] h-5 rounded-sm"
                />
                <span className="text-base font-bold text-[#4e3f6f]">
                  RUSSIA
                </span>
              </div>
              <div className="pt-5">
                <span className="text-4xl font-extrabold text-[#4e3f6f]">
                  169k
                </span>
                <span className="text-base font-bold text-[#8C8CB6] pl-2">
                  подписчиков
                </span>
              </div>

              <div className="pt-5">
                <span className="text-4xl font-extrabold text-[#4e3f6f]">
                  4.3
                </span>
                <span className="text-base font-bold text-[#8C8CB6] pl-2">
                  рейтинг
                </span>
              </div>

              <div className="pt-5">
                <span className="text-4xl font-extrabold text-[#4e3f6f]">
                  3ч.
                </span>
                <span className="text-base font-bold text-[#8C8CB6] pl-2">
                  время ответа
                </span>
              </div>
            </div>
          </aside>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
