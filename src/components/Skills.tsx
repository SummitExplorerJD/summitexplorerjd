import { FC } from "react";
import { Masonry, MasonryItem } from "./utils/Masonry";
import Popover from "./utils/Popover";
import CSharp from '~/assets/c-sharp-c-seeklogo.svg';
import DotNetCore from '~/assets/net-core-seeklogo.svg';
import NodeJS from '~/assets/node-js-seeklogo.svg';
import ReactJS from '~/assets/react.svg';
import Python from '~/assets/python-seeklogo.svg';
import Rust from '~/assets/rust-seeklogo.svg';

const Skills: FC = () => {
    return (
        <section id='Habilidades' className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-[var(--primary-smjd)] text-2xl font-bold text-center mb-12">Habilidades</h2>
                <p className="text-lg text-gray-600 text-center mb-8">Tecnologías con las que trabajo</p>
                <article className="md:px-10">
                    <Masonry columns={3} gap={4}>
                        <MasonryItem>
                            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                <Popover message="Lenguaje de programación C#">
                                    <img loading="lazy" src={CSharp} alt="C#" className="h-20" />
                                </Popover>
                            </div>
                        </MasonryItem>
                        <MasonryItem>
                            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                <Popover message="Framework .Net Core">
                                    <img loading="lazy" src={DotNetCore} alt=".Net Core" className="h-20" />
                                </Popover>
                            </div>
                        </MasonryItem>
                        <MasonryItem>
                            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                <Popover message="Node JS">
                                    <img loading="lazy" src={NodeJS} alt="node js" className="h-20" />
                                </Popover>
                            </div>
                        </MasonryItem>
                        <MasonryItem>
                            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                <Popover message="Framework React JS">
                                    <img loading="lazy" src={ReactJS} alt="react" className="h-20" />
                                </Popover>
                            </div>
                        </MasonryItem>
                        <MasonryItem>
                            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                <Popover message="Python">
                                    <img loading="lazy" src={Python} alt="react" className="h-20" />
                                </Popover>
                            </div>
                        </MasonryItem>
                        <MasonryItem>
                            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                <Popover message="Rust lang">
                                    <img loading="lazy" src={Rust} alt="react" className="h-20" />
                                </Popover>
                            </div>
                        </MasonryItem>
                    </Masonry>
                </article>
            </div>
        </section>
    );
};

export default Skills;