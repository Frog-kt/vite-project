import React from 'react'

export default function Navigation() {
  return (
    <div className="flex flex-col justify-between w-16 items-center flex-none p-4 bg-gray-200">
      <div className="flex flex-col space-y-2">
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
      </div>
      <div className="flex flex-col space-y-2">
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-300 w-8 h-8"></div></a>
      </div>
    </div>
  )
}
