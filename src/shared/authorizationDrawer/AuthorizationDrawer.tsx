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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

interface LayoutProps {
  children: React.ReactNode;
}

export function AuthorizationDrawer(props: LayoutProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent>
        <Tabs defaultValue="sing-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Авторизация</TabsTrigger>
            <TabsTrigger value="sign-un">Авторизация</TabsTrigger>
          </TabsList>

          <TabsContent value="sing-in">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="inline-block mb-2">
                Почта
              </Label>
              <Input
                id="name"
                value="Баланчаев Баланча"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="inline-block mb-2">
                пароль
              </Label>
              <Input id="username" value="kfs" className="col-span-3" />
            </div>
          </TabsContent>
          <TabsContent value="sing-up"></TabsContent>
        </Tabs>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Войти</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
