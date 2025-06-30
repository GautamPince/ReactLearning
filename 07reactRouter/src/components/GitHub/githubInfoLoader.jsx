import React from 'react'

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/GautamPince')
   return response.json()
}

export default githubInfoLoader
