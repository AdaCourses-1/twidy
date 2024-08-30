import { useState, ChangeEvent } from 'react';

import userAvatar from '@/assets/Photo (3).png';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import SocialNetwork from '@/shared/socialNetwork/SocialNetwork';

import { UserInfo } from './types';
import { INITIAL_USER } from './const';

function GeneralSettings() {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [user, setUser] = useState<UserInfo>(INITIAL_USER);
  const [localAvatar, setLocalAvatar] = useState<string | null>(null);

  const toggleEditMode = () => setIsEditing((prev) => !prev);

  const handleSave = () => toggleEditMode();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setLocalAvatar(URL.createObjectURL(file));
    }
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
                  src={localAvatar ? localAvatar : userAvatar}
                  alt="Дарья Небесная"
                  className="object-cover rounded-sm h-[380px]"
                />
                <label className="absolute right-28 bottom-4 rounded-lg text-white bg-[#FFA012] py-1 px-5 text-base font-bold">
                  Изменить фото
                  <input
                    onChange={handleChangeAvatar}
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              <div className="mb-5 pt-5">
                <Input
                  placeholder="Имя"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F] disabled:bg-[#F2F2FE] disabled:text-[#4E3F6F] disabled:opacity-100"
                />
              </div>

              <div className="mb-5">
                <Input
                  placeholder="Фамилия"
                  name="surname"
                  value={user.surname}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F] disabled:bg-[#F2F2FE] disabled:text-[#4E3F6F] disabled:opacity-100"
                />
              </div>

              <div className="mb-5">
                <Input
                  placeholder="@username"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F] disabled:bg-[#F2F2FE] disabled:text-[#4E3F6F] disabled:opacity-100"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Введите информацию о себе"
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="text-base text-[#4E3F6F] bg-[#F2F2FE] pl-5 pt-4 h-36 disabled:bg-[#F2F2FE] disabled:text-[#4E3F6F] disabled:opacity-100"
                />
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
