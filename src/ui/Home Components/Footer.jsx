import React from "react";

const navigation = {
  home: [
    { name: "Welcome", href: "#home-section" },
    { name: "What are Macarons?", href: "#home-what-are-macarons-section" },
    { name: "Featured Products", href: "#home-featured-products-section" },
    { name: "Testimonials", href: "#home-testimonials-section" },
  ],
  order: [
    { name: "Menu & Pricing", href: "/menu-and-ordering" },
    { name: "Place an Order", href: "/menu-and-ordering" },
  ],
  company: [
    { name: "About Us", href: "about-us" },
    { name: "Contact Us", href: "contact" },
  ],
  macarons: [
    { name: "FAQs", href: "/FAQs" },
    { name: "Care Guide for Macarons", href: "/care-guide" },
  ],
};

function Footer() {
  return (
    <footer
      className="bg-neutral-50 text-left"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-4 sm:pt-4 lg:px-8">
        <div className="xs:py-16 xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="w-[350px]"
            src="src/img/canva-logos/ssba-blue-logo-removebg.png"
            alt="Company name"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase leading-6 tracking-wider text-[#15aabf]">
                  Home
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.home.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-neutral-500 hover:font-semibold hover:text-[#22b8cf]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase leading-6 tracking-wider text-[#15aabf]">
                  Order
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.order.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-neutral-500 hover:font-semibold hover:text-[#22b8cf]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase leading-6 tracking-wider text-[#15aabf]">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-neutral-500 hover:font-semibold hover:text-[#22b8cf]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase leading-6 tracking-wider text-[#15aabf]">
                  Product Questions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.macarons.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-neutral-500 hover:font-semibold hover:text-[#22b8cf]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 border-t border-neutral-500/10 pt-8 sm:mt-20 lg:mt-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#15aabf]">
              Subscribe to our newsletter:
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              The latest flavors, specials, news, and discounts sent to your
              inbox weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-neutral-500 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-[#15aabf] focus:ring-2 focus:ring-inset focus:ring-[#15aabf] sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter Your Email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-[#3bc9db] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#15aabf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div> */}
        
        <div className="mt-8 border-t border-neutral-500/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex flex-col">
            <p className="mt-8 text-xs leading-5 text-neutral-400 md:order-1 md:mt-0">
              &copy; 2023 Simply Sweet By Amy is a registered cottage food
              producer in the state of MN.
            </p>
            <p className="mt-8 text-xs leading-5 text-neutral-500 md:order-1 md:mt-0">
              Products are homemade and not subject to state inspection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
