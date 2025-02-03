import { FC, useState, useRef, useEffect } from "react";
import './Accordion.css';

interface AccordionProps {
    title: string;
    classNames?: {
        header?: string;
        content?: string;
    },
    children?: React.ReactNode;
    initOpen?: boolean;
}

const Accordion: FC<AccordionProps> = ({ title, children, classNames, initOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

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
            <button className={"accordion-header " + classNames?.header} onClick={toggleAccordion}>
                {title}
            </button>
            <div ref={contentRef} className={"accordion-content " + (isOpen ? 'open ' : '') + classNames?.content}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;