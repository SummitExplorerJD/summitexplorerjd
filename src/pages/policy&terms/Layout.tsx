import { Link, Outlet, useLocation } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

const Layout: FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>('');
  
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    setCurrentPath(pathSegments.pop() || '');
  }, [location]);
  
  return (
    <div className="max-w-6xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header with back link if not on index page */}
        {currentPath !== 'privacy&terms' && (
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
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
          </div>
        )}
        
        {/* Main content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;