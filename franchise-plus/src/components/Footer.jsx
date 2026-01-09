import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-amber-500/20 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-600/10 blur-sm z-10"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 text-gray-300 relative z-50  ">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-black text-black">
                F
              </div>
              <div className="text-white tracking-wide uppercase flex flex-col">
                <h3 className="text-xl font-extrabold ">Franchise-Plus</h3>
                <span className="text-xs text-zinc-400 font-medium">
                  get better | set better
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              We help entrepreneurs build successful franchise businesses with
              end-to-end support, proven systems, and scalable growth
              strategies.
            </p>

            <p className="mt-6 text-xs uppercase tracking-widest text-amber-400">
              Build • Grow • Scale
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Franchise", "Support", "Testimonials", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-amber-400 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* FRANCHISE BENEFITS */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Why Choose Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Proven Business Model</li>
              <li>Complete Training</li>
              <li>Ongoing Support</li>
              <li>Marketing Assistance</li>
              <li>Scalable Growth</li>
            </ul>
          </div>

          {/* CONTACT + POLICIES */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 New Delhi, India</p>
              <p>📧 support@franchisehub.com</p>
              <p>📞 +91 98765 43210</p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800 space-y-3 text-sm">
              <p className="hover:text-amber-400 cursor-pointer">
                Privacy Policy
              </p>
              <p className="hover:text-amber-400 cursor-pointer">
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Franchise-Plus. All rights reserved.
          </p>

          <p className="text-gray-600">
            Designed & Built with ❤️ for Growth-Driven Brands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
