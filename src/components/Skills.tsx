import { FC } from "react";
import { Masonry, MasonryItem } from "./utils/Masonry";
import Popover from "./utils/Popover";
import CSharp from '~/assets/c-sharp-c-seeklogo.svg';
import DotNetCore from '~/assets/net-core-seeklogo.svg';
import NodeJS from '~/assets/node-js-seeklogo.svg';
import ReactJS from '~/assets/react.svg';

const Skills: FC = () => {
    return (
        <section id='Habilidades' className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Habilidades</h1>
                <Masonry columns={3} gap={4}>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            <Popover message="Lenguaje de programación C#">
                                <img src={CSharp} alt="C#" className="h-20" />
                            </Popover>
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            <Popover message="Framework .Net Core">
                                <img src={DotNetCore} alt=".Net Core" className="h-20" />
                            </Popover>
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            <Popover message="Node JS">
                                <img src={NodeJS} alt="node js" className="h-20" />
                            </Popover>
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            <Popover message="Framework React JS">
                                <img src={ReactJS} alt="react" className="h-20" />
                            </Popover>
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            Content 5
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            Content 6
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            Content 7
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            Content 8
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            Content 9
                        </div>
                    </MasonryItem>
                    <MasonryItem>
                        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            Content 0
                        </div>
                    </MasonryItem>
                </Masonry>
            </div>
        </section>
    );
};

export default Skills;