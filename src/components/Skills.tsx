import { FC } from "react";
import { MasonryContents } from "./utils/Masonry";

const Skills: FC = () => {
    return (
        <section id='Habilidades'>
            <h1>Habilidades</h1>
            <MasonryContents contents={[
                <div className="p-4 bg-blue-500 text-white">Content 1</div>,
                <div className="p-4 bg-red-500 text-white">Content 2</div>,
                <div className="p-4 bg-green-500 text-white">Content 3</div>,
                <div className="p-4 bg-yellow-500 text-white">Content 4</div>,
                <div className="p-4 bg-purple-500 text-white">Content 5</div>,
                <div className="p-4 bg-blue-500 text-white">Content 6</div>,
                <div className="p-4 bg-red-500 text-white">Content 7</div>,
                <div className="p-4 bg-green-500 text-white">Content 8</div>,
                <div className="p-4 bg-yellow-500 text-white">Content 9</div>,
                <div className="p-4 bg-purple-500 text-white">Content 0</div>,
            ]}></MasonryContents>
        </section>
    );
};

export default Skills;