import { PureComponent } from "react";

class Header extends PureComponent {

    render() {
        return (
            <header className="flex flex-row items-center justify-between bg-[var(--accent-2-smjd)] p-5">
                <div>
                    <img src="#" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl md:text-4xl text-[var(--neutral-1-smjd)]">SummitExplorer JD</h1>
                    <span className="text-sm font-normal text-[var(--neutral-1-smjd)]">
                        Desarrollo de software y Alpinismo
                    </span>
                </div>
                <div>
                    <a href="#Contacto" className="inline-block rounded-full border border-[var(--neutral-1-smjd)] bg-[var(--neutral-1-smjd)] p-3 text-[var(--accent-2-smjd)] hover:bg-[var(--accent-2-smjd)] hover:text-[var(--neutral-2-smjd)] focus:outline-none focus:ring active:text-indigo-500">
                        <div className="flex flex-row items-center justify-center">
                            <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 6l2 2l4 -4" />
                            </svg>
                            <span className="pl-2 hidden md:block">Contácteme</span>
                        </div>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;