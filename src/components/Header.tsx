import { PureComponent } from "react";

class Header extends PureComponent {

    render() {
        return (
        <header className="flex flex-row items-center justify-between bg-[var(--neutral-2-smjd)] p-5">
            <div>
                <img src="#" alt="" />
            </div>
            <div>
                <h1>SummitExplorer JD</h1>
            </div>
            <div>
                <button type="button" className="inline-block rounded-full border border-[var(--primary-smjd)] bg-[var(--primary-smjd)] p-3 text-white hover:bg-transparent hover:text-[var(--primary-smjd)] focus:outline-none focus:ring active:text-indigo-500">
                    <div className="flex flex-row items-center justify-center">
                        <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 6l2 2l4 -4" />
                        </svg>
                        <span className="pl-2">Contactame</span>
                    </div>
                </button>
            </div>
        </header>
        );
    }
}

export default Header; 