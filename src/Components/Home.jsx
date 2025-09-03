

function Home() {
  return (
    <div className="m-0 p-0">
    <div id="Home" className="p-10 bg-amber-200 text-center ">
      <h1 className="text-3xl text-blue-950 font-extrabold">Welcome to InstaWeb Labs Private Limited</h1>
      <h2 className="text-2xl font-bold">Inspiration</h2>
       <p className="text-left max-w-2xl mx-auto mt-2 text-gray-700 leading-relaxed">
    Mumbai-based Indian non-government company focused on computer and related
    activities, specifically website building and digital marketing services.</p>

    <div className="relative group w-100 mx-auto mt-3 overflow-hidden rounded-lg">
  <img
    src="/image1.jpg"
    alt="Description"
    className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
  />
<div className="absolute inset-0 bg-white opacity-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>



</div>

     <button
  className=" mt-3 text-white bg-blue-950 hover:bg-blue-800 h-10 w-36 rounded"
  onClick={() => alert('You have to Scroll!')}
> EXPLORE
</button>
     </div>

      
      </div>
  );
}

export default Home;
