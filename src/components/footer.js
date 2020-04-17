import React from "react"
import { Link } from "gatsby"

import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <div className="bg-purple-700 text-white">
      <footer className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex">
          {links.map((link, index) => (
            <li key={index} className="capitalize">
              <Link to={link.path} className="px-2 mx-1 first:pl-0">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex my-4">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div>
          © {new Date().getFullYear()} Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
