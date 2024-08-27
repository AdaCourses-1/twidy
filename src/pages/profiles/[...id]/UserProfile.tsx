import Header from '@/shared/header/Header';
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

const UserProfile = () => {
  return (
    <div className="settings-page w-full mb-20">
      <Header />
      
      <div>
        <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10 ">
          Дарья Небесная
        </h3>

        <div className="flex pt-8 pl-10">
          <div>
            <aside className="p-4 bg-white rounded-[20px] max-w-[400px]">
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
                <span className="absolute left-4 bottom-4 rounded-lg text-white  bg-[#4E3F6F80] py-1 p-3 text-base font-bold">
                  Актер/Автор
                </span>
              </div>
              <div className="p-4">
                <p className="text-[#4E3F6F] text-base font-semibold">
                  Юлия Октаевна Ахмедова - российская актриса сатирического
                  жанра, продюсер...<span className="text-[#615DFA]">еще</span>
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <ul className="flex items-center gap-3 ">
                    <li className="flex">
                      <a
                        href="#"
                        className="bg-[#1DA1F2] inline-block p-2 rounded-[10px] w-8 h-8"
                      >
                        <img src={Twitter} alt="twitter" />
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        href="#"
                        className="bg-[#E4405F] inline-block p-2 rounded-[10px] w-8 h-8"
                      >
                        <img src={Instagram} alt="instagram" />
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        href="#"
                        className="bg-[#4C75A3] inline-block p-2 rounded-[10px] w-8 h-8"
                      >
                        <img src={Vk} alt="vk" />
                      </a>
                    </li>
                  </ul>
                  <Separator
                    orientation="vertical"
                    className="bg-[#E1E2EB] w-[3px] h-5 rounded-sm"
                  />
                  <span className="text-base font-bold text-[#4E3F6F]">
                    Russia
                  </span>
                </div>
                <ul className="pt-6 pb-9">
                  <li className="flex items-end gap-2 mb-3">
                    <span className="text-4xl text-[#4E3F6F] font-bold">
                      169к
                    </span>
                    <span className="text-base text-[#8C8CB6] font-bold">
                      {' '}
                      подписчиков
                    </span>
                  </li>
                  <li className="flex items-end gap-2 mb-3">
                    <span className="text-4xl text-[#4E3F6F] font-bold">
                      4.3
                    </span>
                    <span className="text-base text-[#8C8CB6] font-bold">
                      рейтинг
                    </span>
                  </li>
                  <li className="flex items-end gap-2 mb-3">
                    <span className="text-4xl text-[#4E3F6F] font-bold">
                      3ч.
                    </span>
                    <span className="text-base text-[#8C8CB6] font-bold">
                      время ответа
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
            <div className="flex items-center pt-6 -ml-3">
              <BlockingDrawer>
                <Button variant="ghost">Заблокировать</Button>
              </BlockingDrawer>
              <Separator
                orientation="vertical"
                className="w-[3px] h-8 rounded-sm bg-[#E1E2EB]"
              />
              <ComplainDrawer>
                <Button variant="ghost">Пожаловаться</Button>
              </ComplainDrawer>
            </div>
          </div>
          <div className="flex-1">
            <UserServices />
            <Answer />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserProfile;
