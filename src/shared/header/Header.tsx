import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <header className="pl-12 pr-14">
      <div className="flex gap-12">
        <Label className="relative flex-1">
          <Input placeholder="Поиск" />
          <Search
            strokeWidth={3}
            size={16}
            color="#8C8CB6"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        </Label>
        <div className="flex items-center gap-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <div></div>
            <AvatarFallback>ЕВ</AvatarFallback>
          </Avatar>
          <span className="text-[#4E3F6F] font-bold text-base">Екатерина Варнава</span>
          <Separator orientation="vertical" className="w-1 rounded-sm"/>
          <span className="text-[#4E3F6F] font-bold text-base">Выход</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
