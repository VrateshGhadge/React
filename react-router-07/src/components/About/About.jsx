import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      As passionate React developers, we live and breathe the component-based architecture that powers the modern web. Our commitment goes beyond simply writing JSX; it's about mastering the entire ecosystem, from state management with hooks to building performant, scalable applications.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Every component we build and every state we manage is guided by a singular purpose: to create a seamless, elegant, and powerful connection between the user and the application. This is more than our job; it's our passion made tangible.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}