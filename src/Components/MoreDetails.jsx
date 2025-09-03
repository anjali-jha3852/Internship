
import { useNavigate } from "react-router-dom";

function MoreDetails() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-950 p-6">
      <h1 className="text-4xl font-bold text-white mb-3">More Details</h1>
      <p className="text-lg max-w-xl text-center text-white">
        Transform your Facebook page into a stunning website with the 1-Click Facebook Page to Website
         Tool! Instantly convert your content, keep your followers engaged, and expand your online presence
          effortlessly. Enjoy seamless integration, customizable designs, and real-time updates. Benefit from
           user-friendly features and 24/7 support. Take your brand to the next level with just one click and
         watch your website thrive! No technical skills required—it's as easy as it gets! 
      </p>

       <div className="relative group w-100 mx-auto mt-3 overflow-hidden rounded-lg">
  <img
    src="/image2.jpg"
    alt="Description"
    className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
  />
<div className="absolute inset-0 bg-white opacity-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
</div>

<button
        className="bg-blue-950 mt-5 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
        onClick={() => navigate("/")} >
        Back
      </button>
    </div>
  );
}
export default MoreDetails;
