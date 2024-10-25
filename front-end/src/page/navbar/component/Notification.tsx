import { IoIosNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { notifications } from "./mockNotif";
import { useState } from 'react';

function Notification() {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleButtonClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative">
      <button
        className="relative rounded-[50%] h-10 w-10 hover:bg-gray-100 object-center px-2 "
        onClick={handleButtonClick}
      >
        <IoIosNotifications className=" h-6 w-6" />
        <div className="absolute top-0 left-6 bg-blue-500 h-2 w-2 rounded-[50%] "></div>
      </button>
      {showNotifications && (
        <div className=" absolute top-16 -left-[20rem] max-w-sm mx-auto bg-white rounded-lg shadow-md">
          <div className="p-4 ">
            <h2 className="text-lg font-bold">Notifications</h2>
          </div>
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-center justify-between p-4 ">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage className="w-10 h-10 rounded-full" src={notification.image} alt={`Profile picture of ${notification.name}`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-bold text-[.9rem] ">{notification.name}</div>
                  <div className="text-sm text-gray-600">{notification.message}</div>
                  <div className="text-xs text-gray-400">{notification.time}</div>
                </div>
              </div>
              <div className=" bg-blue-500 h-2 w-2 rounded-[50%] ">
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notification;