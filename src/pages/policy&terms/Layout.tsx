import { Link, Outlet, useLocation } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
//import { usePDF } from 'react-to-pdf';

const Layout: FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>('');
  //  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    setCurrentPath(pathSegments.pop() ?? '');
  }, [location]);

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header with back link if not on index page */}
        {currentPath !== 'privacy&terms' && (
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <Link
              to="/privacy&terms"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-medium">Volver al Listado</span>
            </Link>

            <button
              onClick={() => window.print() /*toPDF({ filename: currentPath.concat('.pdf') })*/}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-medium">Descargar como PDF</span>
            </button>
          </div>
        )}

        {/* Main content */}
        <main className="p-6" ref={targetRef}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;