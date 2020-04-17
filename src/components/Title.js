import React from "react"

const Title = ({ title, subtitle }) => {
  return (
    <div className="flex text-3xl tracking-wider uppercase font-semibold">
      <h2>
        {title} <span className="text-purple-700">{subtitle}</span>
      </h2>
    </div>
  )
}

export default Title
