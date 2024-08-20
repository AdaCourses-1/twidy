import Header from "@/shared/header/Header";
import userAvatar from "../../assets/Photo (3).png";
import { TwitterIcon } from "lucide-react";
import Instagramm from "../../assets/inst.svg";
import Twitter from "../../assets/twit.svg";
import Vk from "../../assets/vk.svg";
import { Separator } from "@radix-ui/react-separator";
const Settings = () => {
  return (
    <div className="settings-pages w-full">
      <Header />
      <div>
        <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10 ">
          Дарья Небесная
        </h3>
      </div>
      <div className="flex pt-8 pl-10">
        <aside className="p-4 bg-white rounded-[20px] max-w-[409px]">
          <div className="relative">
            <span className="absolute left-4 top-4 bg-[#FFA012] rounded-lg text-white py-1 p-3 text-base font-bold">
              @Ahmedika
            </span>
            <img
              src={userAvatar}
              width={380}
              height={380}
              alt="Дарья Небесная"
              className="object-cover"
            />
            <span className="absolute left-4 bottom-4 rounded-lg text-white py-1 p-3 bg-[#4E3F6F80] text-base font-bold">
              Актер / Артист
            </span>
          </div>
          <div className="p-4">
            <p className="text-[#4E3F6F] text-base font-semibold">
              Юлия Октаевна Ахмедова — российская актриса сатирического жанра,
              продюсе...<span className="text-[#615DFA]">еще</span>
            </p>
            <div className="flex items-center gap-4 pt-4">
              <ul className="flex items-center gap-3 ">
                <li className="flex">
                  <a href="">
                    <img src={Twitter} alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Instagramm} alt="Instagramm" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Vk} alt="Vk" />
                  </a>
                </li>
              </ul>
              <Separator
                orientation="vertical"
                className="bg-[#FFA012] w-[3px] h-5 rounded-sm"
              />
              <span className="text-base font-bold text-[#4E3F6F]">Russia</span>
            </div>
            <ul className="pt-6 pb-9">
              <li className="flex items-end gap-2 mb-3">
                <span className="text-4xl text-[#4E3F6F] font-bold">169к</span>
                <span className="text-base text-[#8C8CB6] font-bold"> подписчиков</span>
              </li>
              <li className="flex items-end gap-2 mb-3">
                <span className="text-4xl text-[#4E3F6F] font-bold">4.3</span>
                <span className="text-base text-[#8C8CB6] font-bold">рейтинг</span>
              </li>
              <li className="flex items-end gap-2 mb-3">
                <span className="text-4xl text-[#4E3F6F] font-bold">3ч.</span>
                <span className="text-base text-[#8C8CB6] font-bold">время ответа</span>
              </li>
            </ul>
          </div>
        </aside>
        <div></div>
      </div>
    </div>
  );
};

export default Settings;
