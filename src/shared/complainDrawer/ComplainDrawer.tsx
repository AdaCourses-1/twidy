import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface LayoutProps {
  children: React.ReactNode;
}

export default function ComplainDrawer(props: LayoutProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent className="pt-24">
        <div className="ml-4 flex flex-col items-start">
          <DialogTitle className="text-[#4E3F6F] text-3xl font-bold pb-3">
            Пожаловаться
          </DialogTitle>
          <span className="text-[#4E3F6F] text-base font-bold">
            Укажите причину
          </span>
          <RadioGroup
            className="flex flex-col gap-3 pt-7 pb-5"
            defaultValue="complains"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="complains" id="complains" />
              <Label
                className="text-[#4E3F6F] text-base font-bold hover:cursor-pointer"
                htmlFor="complains"
              >
                Оскорбление
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="spam" id="spam"/>
              <Label
                className="text-[#4E3F6F] text-base font-bold hover:cursor-pointer"
                htmlFor="spam"
              >
                Спам
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="color-[#4E3F6F]"
                value="another"
                id="another"
              />
              <Label
                className="text-[#4E3F6F] text-base font-bold hover:cursor-pointer"
                htmlFor="another"
              >
                Что-то еще
              </Label>
            </div>
          </RadioGroup>
          <Textarea
            className="text-[#4E3F6F] bg-[#F2F2FE] w-100% h-max-40"
            placeholder="Комментарий"
          />
          <SheetFooter>
            <SheetClose asChild>
              <div className="flex mt-8">
                <Button type="submit" className='font-semibold'>Отправить</Button>
                <Button variant="ghost" className="text-[#4E3F6F] font-semibold">
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
