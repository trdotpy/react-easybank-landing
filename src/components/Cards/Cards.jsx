import React from 'react'
import BlogPosts from '../../data/Posts'

export default function Cards() {
  return (
    //
    <div className="bg-white p-10 py-14 md:p-14 lg:py-24">
      <div className="md:ml-20 md:w-1/2">
        <h1 className="pb-12 text-4xl font-light text-gray-700">
          Latest Articles
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 md:ml-20 md:mr-20 lg:grid-cols-4 lg:gap-7">
        {BlogPosts.map((BlogPost) => (
          <div
            className="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3 bg-white pb-4 shadow-md"
            key={BlogPost.key}
          >
            <img
              src={BlogPost.imageUrl}
              alt=""
              className="h-48 w-full rounded-t-md object-cover"
            />

            <div className="lg:px-6 lg:pt-2">
              <p className="pt-5 text-xs text-gray-400">{BlogPost.author}</p>
              <h2 className="cursor-pointer py-2 text-lg text-gray-800 hover:text-green-400">
                {' '}
                {BlogPost.title}
              </h2>
              <p className="text-left text-sm text-gray-400">
                {' '}
                {BlogPost.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
