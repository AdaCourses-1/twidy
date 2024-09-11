import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-react';

import AuthrizationDrawer from '../authorizationDrawer/AuthorizationDrawer';
import { useLogout } from '@/hooks/useLogout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
  const { info: user } = useSelector((state) => state.user);
  const { logout } = useLogout();

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <header className="pl-12 pr-14">
      <div className="flex gap-12">
        <Label className="relative flex-1">
          <Input
            placeholder="Поиск"
            className="font-bold text-base text-[#4E3F6F]"
          />
          <Search
            strokeWidth={3}
            size={16}
            color="#8C8CB6"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        </Label>
        <div className="flex items-center gap-6">
          {user && (
            <>
              <Avatar>
                <AvatarImage src={user.photoURL} className="object-cover" />
                <div></div>
                <AvatarFallback>EV</AvatarFallback>
              </Avatar>
              <span className="text-[#4E3F6F] font-bold text-base">
                {user.displayName}
              </span>
              <Separator orientation="vertical" className="w-1 rounded-sm" />
              <span
                onClick={logout}
                className="text-[#4E3F6F] font-bold text-base"
              >
                Выход
              </span>
            </>
          )}
          {!user && (
            <AuthrizationDrawer>
              <Button>Войти</Button>
            </AuthrizationDrawer>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;