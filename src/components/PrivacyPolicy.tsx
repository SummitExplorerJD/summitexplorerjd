import { PureComponent } from "react";
import MdViewer from "./utils/MdViewer";

class PrivacyPolicy extends PureComponent {
    render() {
        return (
            <div className="container mx-auto p-5">
                <MdViewer url="https://filesystem.summitexplorerjd.sfo3.digitaloceanspaces.com/Pol%C3%ADticas&Terminos/TERMINOSDELSERVICIO.md"></MdViewer>
            </div>
        );
    }
}

export default PrivacyPolicy;