import Header from "@/shared/header/Header";
import userAvatar from "../../assets/photo-3.png";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Vk from "../../assets/vk.svg";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="settings-page">
      <Header />
      <div>
        <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10">
          Дарья Небесная
        </h3>
        <div className="flex pt-8 pl-10">
          <aside className="p-4 bg-white rounded-[20px] max-w-[410px]">
            <div className="relative">
              <span className="absolute left-4 top-4 bg-[#FFA012] rounded-lg text-white py-1 p-3 text-base font-bold">
                @Ahmedka
              </span>
              <img
                width={380}
                height={380}
                src={userAvatar}
                alt="Дарья Небесная"
                className="object-cover"
              />
              <span className="absolute left-4 bottom-4 rounded-lg text-white bg-[#4E3F6F80] py-1 p-3 text-base font-bold">
                Актер / Артист
              </span>
            </div>
            <div className="p-4">
              <p className="text-[#4E3F6F] text-base font-semibold">
                Юлия Октаевна Ахмедова — российская актриса сатирического жанра,
                продюсе... <span className="text-[#615DFA]">еще</span>
              </p>
              <div className="flex items-center gap-4 pt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-[#1DA1F2] inline-block p-2 rounded-[10px] w-8 h-8"
                    >
                      <img src={Twitter} alt="Twitter" />
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-[#E4405F] inline-block p-2 rounded-[10px] w-8 h-8"
                    >
                      <img
                        width={34}
                        height={34}
                        src={Instagram}
                        alt="Instagram"
                      />
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-[#4C75A3] inline-block p-2 rounded-[10px] w-8 h-8"
                    >
                      <img width={34} height={34} src={Vk} alt="Vk" />
                    </a>
                  </li>
                </ul>
                <Separator
                  orientation="vertical"
                  className="w-[3px] h-5 rounded-sm"
                />
                <span className="text-base font-bold text-[#4E3F6F]">
                  Russia
                </span>
              </div>
              <ul className="pt-6 pb-9">
                <li className="flex items-end gap-2 mb-3">
                  <span className="text-4xl text-[#4E3F6F] font-bold">169к</span>
                  <span className="text-base text-[#8C8CB6] font-bold">подписчиков</span>
                </li>
                <li className="flex items-end gap-2 mb-3">
                  <span className="text-4xl text-[#4E3F6F] font-bold">4.3</span>
                  <span className="text-base text-[#8C8CB6] font-bold">рейтинг</span>
                </li>
                <li className="flex items-end gap-2">
                  <span className="text-4xl text-[#4E3F6F] font-bold">3ч.</span>
                  <span className="text-base text-[#8C8CB6] font-bold">время ответа</span>
                </li>
              </ul>
            </div>
          </aside>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
