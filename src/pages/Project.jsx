import '../styles/Home.css';

const projectList = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my web development skills and projects.',
    link: 'https://richardpark.netlify.app/',
  },
  {
    title: 'Walking Trail App',
    description: 'The Walking/Fitness Trail App enhances outdoor walks with maps, videos, and text accessible via QR codes along GGC trails. Built with React, it offers a seamless mobile experience for users and robust admin tools for managing content, users, and trail data.',
    link: 'https://ggcwalkingtrail.netlify.app/',
  },
  {
    title: 'Gas Hauler Game',
    description: 'The Lonely Gas Hauler is a text-based adventure game set in the vast emptiness of space that offers a deep narrative filled with unexpected encounters and challenges. Built in Java, The game is played through text commands, allowing players to explore, interact, and manage resources.',
    link: 'https://github.com/RichardPark1021/GasHauler-Project',
  },
  {
    title: 'Pumpkin Harvest Game',
    description: 'This project is build in Processing using Java. Pumpkin Harvest is a 2D bullet hell game where players control a pumpkin character to dodge skeletons shooting fireballs at you. The goal of the game is to survive and defeat the skeletons and the final boss.',
    link: 'https://github.com/RichardPark1021/Pumpkin-Harvest',
  },
  {
    title: 'Ramen Application',
    description: 'This project was developed as a way to strengthen my skills in React. I created a fully responsive ramen restaurant website where users can browse the menu and explore different ramen dishes. The site features dynamic components, clean UI design, and a focus on user experience, providing a realistic simulation of a modern restaurant interface.',
    link: 'https://ramen-app.netlify.app/'
  },
  {
    title: 'Travel Application',
    description: 'I created this travel website as a personal project to strengthen my skills in React and Tailwind CSS. The site allows users to explore various destinations across South Korea, offering an interactive and visually appealing experience designed to showcase both functionality and modern UI design.',
    link: 'https://korea-app.netlify.app/'
  }
];

function Project() {
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

      {/* Projects Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">My Projects</h1>
        <hr className="my-4 border-gray-300 w-24 mx-auto" />
        <p className='mt-4 font-semibold text-lg text-gray-600 mb-12'>Explore my recent projects!</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700">{project.title}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
