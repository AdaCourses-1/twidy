import { useState } from "react";

  const Sidebar = () => {
    const items=[
      {name:"Главная", iconUrl:"src/assets/sidebar/home.svg"},
      {name:"Сообщение", iconUrl:"src/assets/sidebar/messages.svg"},
      {name:"Настройки", iconUrl:"src/assets/sidebar/settings.svg"},
    ];
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleClick = (index) => {
      setSelectedItem(index);
    };
  
    return (
      <div className="flex flex-col items-center max-w-[208px]">
        <img className="px-16" src="src/assets/sidebar/twidy-logo.svg" alt="Twidy Logo" />
        {items.map((item, index) => (
          <div
            key={index}
            className="pt-16 flex flex-col items-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <img
              src={item.iconUrl}
              className={selectedItem === index ? '#8C8CB6' : ''}
              alt={item.name}
              style={{ fill: selectedItem === index ? '#615DFA' : '' }}
            />
            <span className={`pt-4 text-center text-base font-bold ${selectedItem === index ? "text-[#4E3F6F]" : "text-[#8C8CB6]"}`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    );
  };
  

export default Sidebar