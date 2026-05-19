import React from "react";
import { blogs } from "../data/blogData";

const BlogCardsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                
                {/* Category */}
                <span className="inline-block bg-[#0b1c48] text-white text-xs px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="text-[16px] font-semibold text-gray-900 leading-snug mb-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {blog.description}
                </p>

                {/* Button */}
                <a href="/blog1">
                <button className="font-semibold text-sm text-black flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More →
                </button>
                </a>
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogCardsSection;