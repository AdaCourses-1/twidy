const Chat = (props: any) => {
  const { isActive, handleClickActiveChat, id, displayName, photoURL, online } =
    props;

  return (
    <div onClick={() => handleClickActiveChat(id)}>
      <div
        className={`flex transition duration-200 items-center pr-8 p-4 rounded-l-md cursor-pointer ${
          isActive ? 'bg-white' : ''
        }`}
      >
        <div className="flex relative mr-6">
          <img
            className="h-[81px] object-cover rounded-[15px]"
            width={71}
            height={81}
            src={photoURL}
            alt="Анастасия Евлеева"
          />
          {online && (
            <span className="absolute right-0 top-2/4 translate-y-[-50%] -translate-x-[-50%] inline-block w-4 h-4 bg-[#57BB34] rounded-sm border-4 border-white"></span>
          )}
        </div>
        <div className="">
          <h2 className="text-[#4E3F6F] font-bold text-lg">{displayName}</h2>
          <span className="text-[#8C8CB6] text-base font-semibold">
            <span className="font-bold">Вам:</span> Здраствуйте! Спасибо Вам
            в...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;