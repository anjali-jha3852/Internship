
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div id="About" className="mt-20 bg-teal-800 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">About Us</h1>

      <div className="
        mx-auto flex flex-col sm:flex-row justify-center items-center
        min-h-[60vh] sm:min-h-screen 
        w-full sm:w-3/4 lg:w-1/2
        border-4 sm:border-8 border-black
        rounded-2xl sm:rounded-3xl
        bg-amber-50 mt-6 sm:mt-10
        p-4 sm:p-8
      ">
        <section className="flex flex-col items-center text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold">Our</h1>
          <h1 className="text-4xl sm:text-6xl font-bold mt-2">Purpose</h1>
          <h2 className="text-base sm:text-lg max-w-lg mt-4 text-black leading-relaxed">
            To amplify human potential and create the next opportunity for the people,
            businesses, and communities.
          </h2>

          <div className="relative group mt-6 w-full max-w-md">
            <img
              src="/image2.jpg"
              alt="Description"
              className="block w-full h-auto object-cover rounded-xl
                         transition-transform duration-500 "
            />
            </div>

          <button
            className="
              mt-6 sm:mt-8
              text-white bg-blue-950 hover:bg-blue-800
              h-10 sm:h-12 w-32 sm:w-36
              rounded-lg transition-colors
            "
            onClick={() => navigate("/more")}
          >
            Read More
          </button>
        </section>
      </div>
    </div>
  );
}

export default About;
