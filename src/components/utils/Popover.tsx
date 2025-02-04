import { FC, useState } from "react";

const Popover: FC<{ children: React.ReactNode, message: string }> = ({ children, message }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)} className="relative">
            {children}
            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-100 text-black p-4 rounded-lg text-sm">
                    {message}
                </div>
            )}
        </div>
    );
}

export default Popover;