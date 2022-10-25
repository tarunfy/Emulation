const About = () => {
  return (
    <div className="max-w-9xl  border-t border-b border-white/5 p-24 bg-[#0b1121] mx-auto mb-32">
      <h4 className="text-gray-500 text-xl text-center mb-1">About Us</h4>
      <h1 className="text-white tracking-tight text-center text-6xl font-bold mb-4">
        Collection of <code className="tracking-tighter">tech</code> enthusiasts
        👨‍💻
      </h1>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute blur -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600  rounded-lg mx-auto "></div>
        <div className="relative p-10 bg-[#0b1121] rounded-lg max-w-3xl mx-auto mt-6">
          <p className="text-center  text-lg text-white max-w-full mx-auto mt-4">
            Emulation is a coding club from accurate institute of management and
            technology. The club was formed with an aim to provide a platform
            for students who are passionate about coding and want to learn more
            about it and also to participate in different hackathon and coding
            competitions. The club provides a space for students to explore
            different programming languages, tools and techniques. It also
            organises workshops and events where students can showcase their
            skills and learn from their peers. The club is open to all students
            who want to learn more about coding and its applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
