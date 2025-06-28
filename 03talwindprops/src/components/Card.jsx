import React from "react";

function Card({ username, btnText = "Click me" }) {

   // This component renders a card with an image, title, and description
   return (
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-6">
         <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Image description"
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
         />
         <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
               {username ? username : "Username not provided"}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
         </div>
         <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
         </p>
         <button className="w-full px-4 py-2 mt-6 text-sm font-semibold tracking-wide text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300">
            {btnText}
         </button>
      </div>
   );
}
export default Card;