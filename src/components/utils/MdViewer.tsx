import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MdViewer: FC<{ url: string }> = ({ url }) => {
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url).then((res) => res.text()).then(setMarkdown).catch(setError);
  }, [url]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <ReactMarkdown components={{
        h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-xl text-[var(--primary-smjd)] font-semibold my-3" {...props} />,
        p: ({ node, ...props }) => <p className="my-2" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc list-inside my-2" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal list-inside my-2" {...props} />,
        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
        code: ({ node, ...props }) => <code className="bg-gray-100 p-1 rounded" {...props} />,
        a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
      }}>
        {markdown}
      </ReactMarkdown>
  );
};

export default MdViewer;