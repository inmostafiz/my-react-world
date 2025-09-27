import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-10">
      
        <div>
          <h3 className="text-lg font-semibold">CS — Ticket System</h3>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry’s standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a specimen book.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-gray-200 cursor-pointer">About Us</li>
            <li className="hover:text-gray-200 cursor-pointer">Our Mission</li>
            <li className="hover:text-gray-200 cursor-pointer">Contact Sales</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-gray-200 cursor-pointer">Products & Services</li>
            <li className="hover:text-gray-200 cursor-pointer">Customer Stories</li>
            <li className="hover:text-gray-200 cursor-pointer">Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-gray-200 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-200 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-gray-200 cursor-pointer">Join Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Social Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-gray-200 cursor-pointer">@CS — Ticket System</li>
            <li className="hover:text-gray-200 cursor-pointer">@CS — Ticket System</li>
            <li className="hover:text-gray-200 cursor-pointer">@CS — Ticket System</li>
            <li className="hover:text-gray-200 cursor-pointer">support@cst.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-white">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;