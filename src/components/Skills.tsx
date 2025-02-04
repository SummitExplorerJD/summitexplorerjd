import { FC } from "react";
import { MasonryContents } from "./utils/Masonry";
import Popover from "./utils/Popover";
import CSharp from '~/assets/c-sharp-c-seeklogo.svg';
import DotNetCore from '~/assets/net-core-seeklogo.svg';
import NodeJS from '~/assets/node-js-seeklogo.svg';
import ReactJS from '~/assets/react.svg';

const Skills: FC = () => {
    return (
        <section id='Habilidades'>
            <h1>Habilidades</h1>
            <MasonryContents contents={[
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">
                    <Popover message="Lenguaje de programación C#">
                        <img src={CSharp} alt="C#" />
                    </Popover>
                </div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">
                    <Popover message="Framework .Net Core">
                        <img src={DotNetCore} alt=".Net Core" />
                    </Popover>
                </div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">
                    <Popover message="Node JS">
                        <img src={NodeJS} alt="node js" />
                    </Popover>
                </div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">
                    <Popover message="Framework React JS">
                        <img src={ReactJS} alt="react" />
                    </Popover>
                </div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">Content 5</div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">Content 6</div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">Content 7</div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">Content 8</div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">Content 9</div>,
                <div className="p-4 bg-[var(--neutral-2-smjd)] text-white">Content 0</div>,
            ]}></MasonryContents>
        </section>
    );
};

export default Skills;