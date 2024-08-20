import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const items = [
    { name: "Главная", iconUrl: "src/assets/sidebar/home.svg", path: '/' },
    { name: "Сообщение", iconUrl: "src/assets/sidebar/messages.svg", path: '/messages' },
    { name: "Настройки", iconUrl: "src/assets/sidebar/settings.svg", path: '/settings' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (index) => {
    setSelectedItem(index);
    navigate(items[index].path);
  };

  return (
    <div className="flex flex-col items-center max-w-[208px]">
      <img src="src/assets/sidebar/twidy-logo.svg" alt="Twidy Logo" />
      {items.map((item, index) => (
        <div
          key={index}
          className="pt-16 flex flex-col items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <img
            src={item.iconUrl}
            alt={item.name}
            style={{
              filter: location.pathname === item.path
                ? 'invert(20%) sepia(100%) saturate(5000%) hue-rotate(220deg) brightness(95%) contrast(95%)'
                : 'none'
            }}
          />
          <span
            className={`pt-4 text-center text-base font-bold ${
              location.pathname === item.path
                ? item.name === "Главная"
                  ? "text-[#4E3F6F]"
                  : "text-[#615DFA]"
                : "text-[#8C8CB6]"
            }`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
