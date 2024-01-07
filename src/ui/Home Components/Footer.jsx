import React from "react";

const navigation = {
  home: [
    { name: "Welcome", href: "#home-section" },
    { name: "What are Macarons?", href: "#home-what-are-macarons-section" },
    { name: "Featured Products", href: "#home-featured-products-section" },
    { name: "Testimonials", href: "#home-testimonials-section" },
  ],
  order: [
    { name: "Menu & Pricing", href: "#" },
    { name: "Specials & Limited Time", href: "#" },
    { name: "Parties & Events", href: "#" },
    { name: "Check Order Status", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Partnering Opportunities", href: "#" },
  ],
  macarons: [
    { name: "FAQs", href: "#" },
    { name: "Care Guide for Macarons", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
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
            className="h-9"
            src="src/img/svg-blue/logo-no-background-blue.svg"
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
        <div className="mt-16 border-t border-neutral-500/10 pt-8 sm:mt-20 lg:mt-12 lg:flex lg:items-center lg:justify-between">
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
        </div>
        <div className="mt-8 border-t border-neutral-500/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-500 hover:text-neutral-700"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
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
