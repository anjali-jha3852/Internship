function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm"> InstaWeb Labs Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#Home" className="hover:text-gray-300 text-bold">Home</a>
          <a href="#About" className="hover:text-gray-300 text-bold">About</a>
          <a href="#Contact" className="hover:text-gray-300 text-bold">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
