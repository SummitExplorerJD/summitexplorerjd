import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MdViewer: FC<{ url: string }> = ({ url }) => {

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        console.log('fetching', url);
        fetch(url, {headers: {Accept: '*/*'}})
            .then((res) => {
                res.text().then((text) => setMarkdown(text))
                    .catch((err) => setMarkdown(`Error: ${err}`));
            })
            .catch((err) => setMarkdown(`Error: ${err}`));
    }, []);

    return (
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
    );
};

export default MdViewer;