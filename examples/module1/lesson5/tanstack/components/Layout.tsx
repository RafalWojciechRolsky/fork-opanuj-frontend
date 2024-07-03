import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
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
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;
