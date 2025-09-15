import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-screen px-4 py-16">
      {/* Bubbles background */}
      <div className="absolute inset-0 z-0 bubbles">
        {
          (() => {
            const bubbles = [];
            for (let i = 0; i < 10; i++) {
              bubbles.push(<div key={i} className="bubble" />);
            }
            return bubbles;
          })()
        }
      </div>


      {/* Welcome Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Explore my projects, skills, and experiences as a developer.
          </p>
          <div className="mt-8">
            <Link
              to='/projects'
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

