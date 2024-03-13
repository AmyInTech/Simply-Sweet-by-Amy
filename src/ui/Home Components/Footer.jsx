import React from "react";
import { BsInstagram, BsEnvelope } from "react-icons/bs";

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
        <div className="xs:py-4 sm:py-6 xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="w-[350px]"
            src="/img/canva-logos/ssba-blue-logo-removebg.png"
            alt="Company name"
          />
          <div className="grid grid-cols-2 gap-8 xs:my-6 md:mx-16 md:mb-0 xl:col-span-2 xl:mt-0">
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

        <div className="mt-16 flex gap-6 border-t border-neutral-500/10 pt-8 sm:mt-20 md:justify-between lg:mt-12 lg:flex lg:items-center">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#15aabf]">
              Follow us on Social Media!{" "}
              <a
                href="https://www.instagram.com/simplysweetbyamymacarons/"
                target="_blank"
                className="text-[#f783ac] hover:text-[#d6336c]"
              >
                @simplysweetbyamymacarons
              </a>
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              The latest flavors, specials, news, and discounts are featured on
              our Instagram page!
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 lg:items-center ">
            <a
              href="https://www.instagram.com/simplysweetbyamymacarons/"
              target="_blank"
              className="rounded-[10px] bg-[#faa2c1] p-[6px] text-[18px] text-[#ffffff] hover:font-semibold hover:text-[#fff0f6]"
            >
              <BsInstagram />
            </a>
            <a
              href="mailto: amy@simplysweetbyamy.com"
              target="_blank"
              className="rounded-[10px] bg-[#faa2c1] p-[6px] text-[18px] text-[#ffffff] hover:font-semibold hover:text-[#fff0f6]"
            >
              <BsEnvelope />
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-500/10 pt-8 md:mt-8 md:flex md:items-center md:justify-between">
          <div className="flex flex-col">
            <p className="mt-2 text-xs leading-5 text-neutral-400 md:order-1 md:mt-0">
              &copy; 2024 Simply Sweet By Amy is a registered cottage food
              producer in the state of MN.
            </p>
            <p className="mt-4 text-xs leading-5 text-neutral-500 md:order-1 md:mt-0">
              Products are homemade and not subject to state inspection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
