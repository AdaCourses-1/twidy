// GeneralSettings.tsx
import { useState, ChangeEvent } from 'react';
import userAvatar from '@/assets/Photo (3).png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SocialNetwork from '../socialNetwork/SocialNetwork';
import { UserInfo } from './types';
import { INITIAL_USER } from './const';

function GeneralSettings() {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [user, setUser] = useState<UserInfo>(INITIAL_USER);

  const toggleEditMode = () => setIsEditing((prev) => !prev);

  const handleSave = () => {
    // Здесь можно добавить логику для сохранения данных, если требуется
    toggleEditMode();
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="settings-page w-full mb-20">
      <div>
        <h3 className="text-[#4E3F6F] font-bold text-4xl pl-16 pt-10">
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
                <button className="absolute right-28 bottom-4 rounded-lg text-white bg-[#FFA012] py-1 px-5 text-base font-bold">
                  Изменить фото
                </button>
              </div>
              <div className="pt-5">
                {isEditing ? (
                  <div>
                    <div className="mb-5">
                      <Input
                        placeholder="Имя"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        placeholder="Фамилия"
                        name="surname"
                        value={user.surname}
                        onChange={handleInputChange}
                        className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        placeholder="@username"
                        name="handle"
                        value={user.handle}
                        onChange={handleInputChange}
                        className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
                      />
                    </div>
                    <Textarea
                      placeholder="Введите информацию о себе"
                      name="bio"
                      value={user.bio}
                      onChange={handleInputChange}
                      className="text-base text-[#4E3F6F] bg-[#F2F2FE] pl-5 pt-4 h-36"
                    />
                  </div>
                ) : (
                  <div className="max-w-[300px] break-words">
                    <p className="mb-4 text-[#4E3F6F] font-bold text-base">
                      Name: {user.name}
                    </p>
                    <p className="mb-4 text-[#4E3F6F] font-bold text-base">
                      Surname: {user.surname}
                    </p>
                    <p className="mb-4 text-[#4E3F6F] font-bold text-base">
                      Email: {user.handle}
                    </p>
                    <p className="text-[#4E3F6F] font-bold text-base max-w-[300px] break-words">
                      Additional information: {user.bio}
                    </p>
                  </div>
                )}
              </div>
              <Button
                className="mt-4"
                onClick={isEditing ? handleSave : toggleEditMode}
              >
                {isEditing ? 'Сохранить' : 'Редактировать'}
              </Button>
            </aside>
          </div>
          <div className="flex-1 -mt-16">
            <SocialNetwork />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSettings;
