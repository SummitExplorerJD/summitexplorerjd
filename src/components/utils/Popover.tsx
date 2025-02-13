import { FC, useState } from "react";

interface PopoverProps {
  children: React.ReactNode;
  message: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Popover: FC<PopoverProps> = ({ children, message, position = 'bottom' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full mb-2';
      case 'bottom':
        return 'top-full mt-2';
      case 'left':
        return 'right-full mr-2 top-1/2 transform -translate-y-1/2';
      case 'right':
        return 'left-full ml-2 top-1/2 transform -translate-y-1/2';
      default:
        return 'top-full mt-2';
    }
  };

  const arrowPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-[-5px] left-1/2 transform -translate-x-1/2 rotate-180';
      case 'bottom':
        return 'top-[-5px] left-1/2 transform -translate-x-1/2';
      case 'left':
        return 'right-[-5px] top-1/2 transform -translate-y-1/2 rotate-90';
      case 'right':
        return 'left-[-5px] top-1/2 transform -translate-y-1/2 -rotate-90';
      default:
        return 'top-[-5px] left-1/2 transform -translate-x-1/2';
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className={`absolute z-10 ${getPositionClasses()} w-max max-w-xs`}>
          <div className={`absolute ${arrowPositionClasses()} border-solid border-8 border-transparent bg-transparent`}>
            <div className="bg-white border border-gray-200 shadow-md rounded-md p-3 text-sm text-gray-700 whitespace-normal break-words">
              {message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;