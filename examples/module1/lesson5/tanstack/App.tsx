import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Articles from './components/Articles';
import Article from './components/Article';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <nav className="bg-gray-200 p-4">
            <ul>
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Articles />} />
              <Route path="/:id" element={<Article />} />
            </Routes>
          </main>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
