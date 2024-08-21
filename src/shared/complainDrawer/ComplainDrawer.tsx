import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ComplainDrawer(props: LayoutProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent className="pt-24">
        <div className="ml-4">
          <h3 className="text-[#4E3F6F] text-3xl font-bold pb-3">
            Пожаловаться
          </h3>
          <span className="text-[#4E3F6F] text-base font-bold">Укажите причину</span>
          <RadioGroup className="flex flex-col gap-3 pt-7 pb-5" defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label className="text-[#4E3F6F] text-base font-bold" htmlFor="r1">Оскорбление</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label className="text-[#4E3F6F] text-base font-bold" htmlFor="r2">Спам</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="color-[#4E3F6F]"value="compact" id="r3" />
              <Label className="text-[#4E3F6F] text-base font-bold" htmlFor="r3">Что-то еще</Label>
            </div>
          </RadioGroup>
             <Textarea className="text-[#4E3F6F] bg-[#F2F2FE]" placeholder="Комментарий" />
          <SheetFooter>
            <SheetClose>
              <div className="flex mt-8">
                <Button type="submit">Отправить</Button>
                <Button variant="ghost" className="text-[#4E3F6F]">
                  Отмена
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
