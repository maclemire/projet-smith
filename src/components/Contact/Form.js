import React from 'react'

export default function Form() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 gap-8">
          <input
            className="h-8 rounded text-xs italic border-2"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            className="h-8 rounded text-xs italic border-2"
            type="text"
            name=""
            id=""
            placeholder="E-mail"
          />
        </div>
        <input
          className="h-8 rounded text-xs italic border-2 mt-4 w-full"
          type="text"
          name=""
          id=""
          placeholder="Subject"
        />

        <input
          className="h-24 rounded text-xs italic border-1 mt-4 w-full pb-16"
          type="text"
          name=""
          id=""
          placeholder="Message"
        />

        <button
          className="bg-secondary text-white px-14 py-4 mt-30 text-xs"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
