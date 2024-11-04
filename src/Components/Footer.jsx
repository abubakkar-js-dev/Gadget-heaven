const Footer = () => {
  return (
    <div className="pt-12 md:pt-[100px] container">
      <h2 className="text-center text-3xl font-bold text-black mb-2">Gadget Heaven</h2>
      <p className="text-center text-base text-gray-500 mb-6 md:mb-8">Leading the way in cutting-edge technology and innovation.</p>
      <div className="border-t mb-6"></div>
      <footer className="footer text-neutral-content p-10 container justify-items-center ">
        <nav>
          <h6 className=" mb-3 text-black text-base md:text-lg font-bold">Services</h6>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Product Support</a>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Order Tracking</a>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Shipping & Delivery</a>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Returns</a>
        </nav>
        <nav>
          <h6 className="mb-3 text-black text-base md:text-lg font-bold">Company</h6>
          <a className="link link-hover text-gray-700 text-sm md:text-base">About Us</a>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Careers</a>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Contact</a>
        </nav>
        <nav>
          <h6 className="mb-3 text-black text-base md:text-lg font-bold">Legal</h6>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Terms of Service</a>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Privacy Policy</a>
          <a className="link link-hover text-gray-700 text-sm md:text-base">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
