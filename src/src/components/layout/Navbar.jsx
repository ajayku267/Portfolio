const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-white text-[18px] font-bold cursor-pointer flex">
          Ajay Kumar &nbsp;
          <span className="sm:block hidden"> | Portfolio</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar; 