import React from "react"

import services from "../../constants/services"
import Title from "../Title"

const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="section">
        <Title title="our" subtitle="services" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          }}
          className="mt-10 w-full gap-4 md:gap-10"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white shadow md:items-center"
            >
              <div className="flex mb-2 md:flex-col md:items-center">
                <span className="text-4xl mr-4 text-green-500 mb-2">
                  {service.icon}
                </span>
                <h2 className="capitalize text-2xl tracking-wide md:border-b md:pb-1 md:border-green-500">
                  {service.title}
                </h2>
              </div>
              <p className="mt-auto md:text-center">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
