import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@radix-ui/react-label";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";


const Header = () => {
  return (
    <header className="pl-12 pr-14">
      <div className="flex gap-12">
        <Label className="relative flex-1" >
          <Input placeholder="Поиск" />
          <Search
            strokeWidth={3}
            size={16}
            color="#8C8CB6"
            className="absolute right-8 top-1/2 -translate-y-1/2"
          />
        </Label>
        <div className="flex items-center gap-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <div></div>
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <span className="text-[#4E3F6F] font-bold text-base">E.V</span>
          <Separator orientation="vertical" className="w-1 rounded-sm"/>
          <span className="text-[#4E3F6F] font-bold text-base">Exit</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
