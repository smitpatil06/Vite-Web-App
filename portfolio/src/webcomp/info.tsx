import Profile from "./profile.tsx";


function Info() {
  return (
    <div className=" -mt-1 h-screen flex justify-center text-white">
      <div className="flex flex-col md:flex-row  text-center px-4 gap-10 animate-fadeSlideUp">

        
        <div className=" md:order-1 order-2 mt-10">
        <div className="text-white text-center px-4 sm:px-0">
  <h1 className="text-4xl sm:text-5xl font-bold relative inline-block group mb-">
    Hi, I am{' '}
    <a href="#" className="text-blue-400 relative">
      Smit Patil
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-400 group-hover:w-full transition-all duration-500"></span>
    </a>
  </h1>

  <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
    I'm a computer engineer specializing in <span className="text-indigo-400 font-medium">backend web development</span> and <span className="text-indigo-400 font-medium">artificial intelligence</span>, crafting scalable systems that power intelligent and efficient applications.
  </p>
</div>

        </div>
       <div className="md:order-2 order-1 mt-10">
<Profile/>
</div>
      </div>
    </div>
  );
}

export default Info;

