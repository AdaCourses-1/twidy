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

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthorizationDrawer(props: LayoutProps) {
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
                id="email"
                value="Jyldyzakylbekova@gamil.com"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="inline-block mb-2">
                Пароль
              </Label>
              <Input
                id="password"
                value="ice-capuchino"
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
                value="Жылдыз"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="inline-block mb-2">
                Почта
              </Label>
              <Input
                id="email"
                value="Jyldyzakylbekova@gamil.com"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="inline-block mb-2">
                Пароль
              </Label>
              <Input
                id="password"
                value="ice-capuchino"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Регистрация</Button>
              </SheetClose>
            </SheetFooter>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
