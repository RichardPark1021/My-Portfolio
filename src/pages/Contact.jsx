import '../styles/Home.css';

function Contact() {
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

      <div className="relative z-10 max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 md:p-14">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">Contact Me</h2>
        <p className="text-gray-600 mb-10 text-center text-lg">
          I'd love to hear from you! Fill out the form and I’ll get back to you as soon as possible.
        </p>

        <form className="grid gap-6 md:grid-cols-2" method="POST" action="https://formsubmit.co/rpark112233@gmail.com">
          <div className="md:col-span-1">
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="6"
              name='message'
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="What would you like to say?"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

