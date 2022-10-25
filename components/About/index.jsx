const About = () => {
  return (
    <div className="max-w-9xl  border-t border-b border-white/5 p-24 bg-[#0b1121] mx-auto mb-32">
      <h4 className="text-gray-500 text-xl text-center mb-1">About Us</h4>
      <h1 className="text-white tracking-tight text-center text-6xl font-bold mb-4">
        Collection of <code className="tracking-tighter">tech</code> enthusiasts
        👨‍💻
      </h1>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute blur -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600  rounded-lg mx-auto "></div>
        <div className="relative p-10 bg-[#0b1121] rounded-lg max-w-fit mx-auto mt-6">
          <p className="text-center tracking-wide text-lg text-white max-w-2xl mx-auto mt-4">
            This club is running by the students of the Accurate group of
            Institutions! We currently working on Web development , Android
            Development , Competetive Programming.. We are currently learning on
            cross platform. We looking to collaborate on different hackathon and
            coding competition. We looking to help others. Creating a coding
            culture in our college.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
