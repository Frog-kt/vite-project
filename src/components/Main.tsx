import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Main() {
  const [address, setAddress] = useState([]);

  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

  let conversionsCards = [];
  for (let i = 0; i < 50; i++) {
    conversionsCards.push(
      <a className="block border-b">
        <div className="border-l-2 border-transparent hover:bg-gray-100 p-3 space-y-4">
          <div className="flex flex-row items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <strong className="flex-grow text-sm">Nikola Tesla</strong>
            <div className="text-sm text-gray-600">5hr</div>
          </div>

          <div className="flex flex-row items-center space-x-1">
            <svg className="flex-none w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div className="flex-grow truncate text-xs">some message content whedkjwhed wkjehdkjweh dkjhwekjdhwekjhd </div>
          </div>
        </div>
      </a>)
  }

  return (
    <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
      <div className="flex flex-col w-1/5">
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="font-semibold text-2xl">Inbox</h1>
          <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex-auto overflow-y-auto">
          {conversionsCards}
        </div>
      </div>
      <div className="w-3/5  border border-l border-r border-gray-300">
        <button onClick={async () => {
          let res = await axios.get('http://localhost:8080/https://zipcloud.ibsnet.co.jp/api/search?zipcode=1410022');
          console.log(res.data.results[0]);
          setAddress(res.data.results[0])
        }}>
          ボタン！
          </button>
        <p>
          {JSON.stringify(address)}
        </p>
      </div>
      <div className="w-1/5 bg-gray-200">right</div>
    </div>
  )
}
