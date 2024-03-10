"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

// Nav links
const navLinks = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/experience", name: "Experience" },
  { path: "/contact", name: "Contact" },
];

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === pathname && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
