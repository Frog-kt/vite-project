import React from 'react'

export default function Inbox() {
  return (
    <div className="w-64 bg-gray-100 p-4 flex flex-col space-y-4">
      <div className="flex flex-row justify-between items-center mb-6">
        <h1 className="font-semibold text-2xl">Inbox</h1>
        <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <div className="bg-red-200 h-64"></div>
      <div className="bg-red-200 h-64"></div>
    </div>
  )
}
