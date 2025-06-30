import React, { useEffect, useState } from 'react'
// import { useLoaderData } from "react-router-dom"


function Github() {
   const [data, setData] = useState([])

   useEffect(() => {
      fetch('https://api.github.com/users/GautamPince')
         .then(response => response.json())
         .then(data => {
            console.log(data)
            setData(data)
         })

   }, [])
   // const data = useLoaderData()
   return (
      <>
         <div className='bg-gray-600 m-2 text-center text-3xl text-white p-4 '>
            {/* GitHub followers:{data.followers} <br /> */}
            GitHub followers:2985 <br />
            GitHub repos:{data.public_repos} <br />
            GitHub gists:{data.public_gists} <br />
            GitHub following:{data.following} <br />
         </div>
         <div className='bg-gray-700 m-2 text-center text-3xl text-white p-4' >
            <img className='w-40 h-43 rounded-full m-auto' src={data.avatar_url} alt="avatar" />
            <h1 className='text-3xl text-center text-gray-900 font-bold'>{data.name}</h1>
            <p className='text-center text-gray-500'>{data.bio}</p>
            <p className='text-center text-gray-500'>Location: {data.location}</p>
            <p className='text-center text-gray-500'>Company: {data.company}</p>
            <p className='text-center text-gray-500'>Blog: {data.blog}</p>
         </div>
      </>
   )
}

export default Github


