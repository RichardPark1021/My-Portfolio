import profile from '../assets/Richard.jpg';
import '../styles/Home.css';

function About() {
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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">About Me</h1>
          <hr className="mt-4 border-gray-300 w-24 mx-auto" />
          <img
            src={profile}
            alt="Profile"
            className="bg-white object-cover rounded-full w-40 h-40 mx-auto my-6 shadow-lg"
          />
          <p className="mt-4 text-lg font-semibold text-gray-600 max-w-2xl mx-auto">
            Get to know me and my current skills in terms of programming languages, frameworks, and tools:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl w-full px-4">
          {/* Who Am I Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Who Am I?</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">My name is Richard!</h3>
            <p className="text-gray-600 leading-relaxed">
              I am a passionate and creative developer who loves bringing ideas to life through thoughtful, 
              well-designed web applications. With a deep interest in both technology and design, I strive to build websites that aren't 
              just functional but also visually engaging and imaginative.
              <br /><br />
              I enjoy exploring new tools and frameworks, constantly improving my skills to stay up-to-date in this fast-moving field. 
              What truly drives me is the creative process—transforming concepts into interactive experiences that leave a lasting impression.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
            <ul className="columns-2 list-disc list-inside text-gray-600 space-y-2">
              <li>JavaScript</li>
              <li>Java</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Next.js</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Git & GitHub</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
