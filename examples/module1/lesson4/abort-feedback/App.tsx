import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showError, setShowError] = useState<boolean>(false);
  const controllerRef = useRef<AbortController | null>(null);

  const fetchData = async () => {
    setShowError(false);

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const newController = new AbortController();
    controllerRef.current = newController;

    try {
      const timeoutId = setTimeout(() => {
        setShowError(true);
      }, 5000);

      const { data } = await axios.get(API_URL, {
        signal: newController.signal,
      });

      clearTimeout(timeoutId);
      setUsers(data.users);
      setShowError(false);
    } catch (e: any) {
      if (axios.isCancel(e)) {
        console.log('Fetch request was cancelled');
      } else {
        setShowError(true);
        console.error('Fetch failed:', e);
      }
    }
  };

  const handleFetch = () => {
    setUsers([]);
    fetchData();
  };

  useEffect(() => {
    fetchData();

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {showError && (
            <p className="mr-2">
              Sorry, there seems to be connectivity issues...
            </p>
          )}
          <button
            className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
            onClick={handleFetch}
          >
            Try again
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
