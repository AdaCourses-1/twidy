import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthorizationDrawer(props: LayoutProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{props?.children}</SheetTrigger>
      <SheetContent>
        <Tabs defaultValue="sign-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Авторизация</TabsTrigger>
            <TabsTrigger value="sign-up">Регистрация</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <div className="mb-4">
            <Label htmlFor="email" className="inline-block mb-2">
              Почта
            </Label>
            <Input
              id="email"
              value="Jyldyz Akylbekova"
              className="h-14"
            />
            </div>
            <div className="mb-4">
            <Label htmlFor="password" className="inline-block">
              Пароль
            </Label>
            <Input
              id="password"
              value="ice-capuchinno"
              className="h-14"
            />
          </div>
          <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Войти</Button>
          </SheetClose>
        </SheetFooter>
          </TabsContent>
          <TabsContent value="sign-up">
          <div className="mb-4">
            <Label htmlFor="name" className="inline-block mb-2">
              Имя
            </Label>
            <Input
              id="name"
              value="Jyldyz Akylbekova"
              className="h-14"
            />
            </div>
            <div className="mb-4">
            <Label htmlFor="email" className="inline-block mb-2">
              Почта
            </Label>
            <Input
              id="email"
              value="jyldyz@gmail.com"
              className="h-14"
            />
            </div>
            <div className="mb-4">
            <Label htmlFor="password" className="inline-block">
              Пароль
            </Label>
            <Input
              id="password"
              value="ice-capuchinno"
              className="h-14"
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
