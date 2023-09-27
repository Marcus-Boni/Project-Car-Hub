import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="./logo.svg"
            alt="logo"
            width={118}
            height={8}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map(({ id, title, links }) => (
            <div key={id} className="footer__link">
              <h3 className="font-bold">{title}</h3>
              {links.map(({ id, title, url }) => (
                <Link key={id} href={url} className="text-gray-500">
                  {title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@2023 CarHub. All rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};
