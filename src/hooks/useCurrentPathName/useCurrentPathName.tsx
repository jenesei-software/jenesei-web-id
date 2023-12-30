import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useCurrentPathName = (paths:string[]) => {
  const location = useLocation();
  const [currentPathName, setCurrentPathName] = useState('');

  useEffect(() => {
    const pathname = location.pathname;
    const matchedPath = paths.find(path => pathname.startsWith(path));

    setCurrentPathName(matchedPath || '');
  }, [location, paths]);

  return currentPathName;
};

export default useCurrentPathName;
