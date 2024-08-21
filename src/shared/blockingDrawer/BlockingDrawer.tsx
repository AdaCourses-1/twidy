import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

interface LayoutProps {
  children: React.ReactNode;
}

export default function BlockingDrawer(props: LayoutProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent className="pt-24">
        <div className="ml-4">
          <h3 className="text-[#4E3F6F] pb-4 text-3xl font-bold">
            Заблокировать пользователя
          </h3>
          <span className="text-[#4E3F6F] text-base">
            Вы уверены что хотите заблокировать?
          </span>
          <SheetFooter>
            <SheetClose>
              <div className="flex mt-8">
                <Button type="submit">Отправить</Button>
                <Button variant="ghost" className="text-[#4E3F6F]">Отмена</Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
