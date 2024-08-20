import { useNavigate, useLocation } from "react-router-dom";
import { ITEMS } from "./const";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (index: number) => navigate(ITEMS[index].path);

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col items-center max-w-[208px]">
      <img src="src/assets/sidebar/twidy-logo.svg" alt="Twidy Logo" />
      {ITEMS.map((item, index) => (
        <div
          key={index}
          className="pt-16 flex flex-col items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <img
            src={item.iconUrl}
            alt={item.name}
            style={{
              filter: isActivePath(item.path)
                ? "invert(20%) sepia(100%) saturate(5000%) hue-rotate(220deg) brightness(95%) contrast(95%)"
                : "none",
            }}
          />
          <span
            className={`pt-4 text-center text-base font-bold ${
              isActivePath(item.path) ? "text-[#4E3F6F]" : "text-[#8C8CB6]"
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
