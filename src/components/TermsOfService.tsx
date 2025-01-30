import { PureComponent } from "react";
import MdViewer from "./utils/MdViewer";

class TermsOfService extends PureComponent {
    render() {
        return (
            <div className="container mx-auto p-5 max-h-[80vh] overflow-y-auto max-w-3xl">
                <MdViewer url="https://summitexplorerjd.sfo3.digitaloceanspaces.com/privacy&terms/TERMINOSDELSERVICIO.md"></MdViewer>
            </div>
        );
    }
}

export default TermsOfService;