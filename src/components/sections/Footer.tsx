import ArrowUpIcon from "../icons/ArrowUpIcon";

import FooterNavigation from "../ui/footer/FooterNavigation";
import FooterSocials from "../ui/footer/FooterSocials";
import FooterLocation from "../ui/footer/FooterLocation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-neutral-200 bg-neutral-800">
      {/* Content container */}
      <div className="px-4 py-8 md:px-5 lg:px-0 lg:mx-auto lg:max-w-7xl">
        {/* Top of footer */}
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-start">
          {/* Brand + Tagline */}
          <div className="flex flex-col gap-4">
            <p className="text-green-200 font-chakra-petch font-bold leading-120 text-32 uppercase">
              Ryan_Cruse
            </p>
            <p className="text-sm leading-140 font-jetbrains-mono">
              Created with React, React Router, Tailwind CSS and Vite
            </p>
          </div>

          {/* Footer nav + Socials + location wrapper */}
          <div className="flex flex-col gap-y-10 md:flex-row md:items-start md:gap-x-20">
            <FooterNavigation />
            <FooterSocials />
            <FooterLocation />
          </div>
        </div>

        <hr className="border-t border-neutral-600 my-8 md:my-10" />

        {/* Bottom of footer */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          <small className="text-xs leading-140 font-jetbrains-mono tracking-wide-1">
            © {year} Ryan Cruse. ALL RIGHTS RESERVED.
          </small>

          <a
            href="#top"
            className="flex items-center gap-x-1.5 text-xs leading-140 font-jetbrains-mono tracking-wide-1 uppercase text-red-100 transition-colors duration-300 ease-in-out hover:text-red-300"
          >
            Back to top
            <ArrowUpIcon aria-hidden="true" className="size-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
