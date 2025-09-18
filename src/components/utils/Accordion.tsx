import { FC, useRef, useEffect } from "react";
import './Accordion.css';

interface AccordionProps {
    title: string;
    classNames?: {
        header?: string;
        content?: string;
    },
    children?: React.ReactNode;
    isOpen?: boolean;
    onToggle: () => void;
}

const Accordion: FC<AccordionProps> = ({ title, children, classNames, isOpen = false, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            } else {
                contentRef.current.style.maxHeight = '0px';
            }
        }
    }, [isOpen]);

    return (
        <div className="accordion">
            <button className={`accordion-header ${isOpen ? 'open' : ''} ${classNames?.header || ''}`} onClick={onToggle}>
                <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {title}
                </span>
            </button>
            <div ref={contentRef} className={`accordion-content ${isOpen ? 'open' : ''} ${classNames?.content || ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;