import React from "react";

function Footer() {
  return (
    <footer className="p-10 bg-green-300">
      <div className="mx-auto my-0 max-w-[1200px]">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900">golobe</h2>

        <div className="flex gap-4 mb-10">
          <a href="#" aria-label="Facebook">
            <i className="ti ti-brand-facebook text-2xl cursor-pointer text-zinc-900 hover:text-zinc-700" />
          </a>
          <a href="#" aria-label="Twitter">
            <i className="ti ti-brand-twitter text-2xl cursor-pointer text-zinc-900 hover:text-zinc-700" />
          </a>
          <a href="#" aria-label="Instagram">
            <i className="ti ti-brand-instagram text-2xl cursor-pointer text-zinc-900 hover:text-zinc-700" />
          </a>
          <a href="#" aria-label="YouTube">
            <i className="ti ti-brand-youtube text-2xl cursor-pointer text-zinc-900 hover:text-zinc-700" />
          </a>
        </div>

        <div className="grid gap-10 grid-cols-[repeat(5,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[1fr]">
          <FooterColumn
            title="Our Destinations"
            links={["Canada", "Alaska", "France", "Iceland"]}
          />

          <FooterColumn
            title="Our Activities"
            links={[
              "Northern Lights",
              "Cruising & sailing",
              "Multi-activities",
              "Kayaking",
            ]}
          />

          <FooterColumn
            title="Travel Blogs"
            links={[
              "Bali Travel Guide",
              "Sri Lanka Travel Guide",
              "Peru Travel Guide",
              "Bali Travel Guide",
            ]}
          />

          <FooterColumn
            title="About Us"
            links={["Our Story", "Work with us"]}
          />

          <FooterColumn
            title="Contact Us"
            links={["Our Story", "Work with us"]}
          />
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-zinc-900">{title}</h3>
      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="cursor-pointer text-zinc-900 hover:underline"
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Footer;
