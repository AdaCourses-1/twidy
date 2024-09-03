import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSignup } from '@/hooks/useSignup';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthorizationDrawer(props: LayoutProps) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);
  const { signup } = useSignup();

  const handleSignup = async () => {
    if (!avatar) return;

    await signup({ email, password, displayName, avatar });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent className="pt-12">
        <Tabs defaultValue="sign-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Авторизация</TabsTrigger>
            <TabsTrigger value="sign-up">Регистрация</TabsTrigger>
          </TabsList>
          {/* Здесь Авторизация */}
          <TabsContent value="sign-in">
            <div className="mb-4">
              <Label htmlFor="email" className="inline-block mb-2">
                Почта
              </Label>
              <Input
                value="email"
                id="email"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="inline-block mb-2">
                Пароль
              </Label>
              <Input
                value="password"
                id="password"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Войти</Button>
              </SheetClose>
            </SheetFooter>
          </TabsContent>
          {/* Здесь Регистрация */}
          <TabsContent value="sign-up">
            <div className="mb-4">
              <Label htmlFor="name" className="inline-block mb-2">
                Имя
              </Label>
              <Input
                id="name"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="inline-block mb-2">
                Почта
              </Label>
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="inline-block mb-2">
                Пароль
              </Label>
              <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
              <Input
                onChange={(e) => setAvatar(e.target.files?.[0] || null)}
                id="avatar"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
                type="file"
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" onClick={handleSignup}>Регистрация</Button>
              </SheetClose>
            </SheetFooter>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
