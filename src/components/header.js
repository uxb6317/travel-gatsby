import React, { useState, useEffect } from "react"
import { FaAlignRight } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Header = ({ siteTitle }) => {
  const [isOpen, setNav] = useState(false)
  const [isSmallScreen, setScreen] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setScreen(true)
      setNav(false)
    } else {
      setScreen(false)
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const renderSocial = () => {
    return (
      <div className="flex">
        {socialIcons.map((social, index) => (
          <a
            className="mx-3 text-xl hover:text-green-500 primary-transition"
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    )
  }

  return (
    <header className="bg shadow">
      <nav className="max-w-screen-xl mx-auto md:flex items-center">
        <div className="px-2 flex items-center justify-between h-16 md:pl-6">
          <h1 className="text-2xl tracking-widest uppercase font-semibold text-green-500">
            {siteTitle}
          </h1>
          {isSmallScreen && (
            <div className="flex items-center">
              <div className="mr-10">{renderSocial()}</div>
              <button
                className="cursor-pointer text-green-500"
                onClick={toggleNav}
              >
                <FaAlignRight />
              </button>
            </div>
          )}
        </div>
        {(!isSmallScreen || isOpen) && (
          <ul className="md:flex md:ml-10">
            {links.map(link => (
              <li key={link.text}>
                <AniLink
                  fade
                  duration={0.1}
                  className="block px-2 py-3 border-b capitalize md:py-0 md:mx-3 md:px-1 md:border-transparent md:hover:border-green-500 primary-transition"
                  to={link.path}
                >
                  {link.text}
                </AniLink>
              </li>
            ))}
          </ul>
        )}
        {!isSmallScreen && <div className="ml-auto pr-6">{renderSocial()}</div>}
      </nav>
    </header>
  )
}

export default Header
