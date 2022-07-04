import React from 'react'

export default function Description() {
  return (
    <div className="ml-8 bg-primary font-montserrat">
      <img className="w-96 h-96" src="mainpic.webp" alt="Smith" />
      <div className="text-grey pl-12 pt-12 text-sm">
        <p className="text-xl text-white font-semibold pb-8">
          General Information
        </p>
        <p className="pb-2">
          <img className="inline-block pr-5" src="crayon.webp" alt="" />
          Name: <span className="text-white pl-2">Justin Bieber</span>
        </p>
        <p className="pl-9 pb-2">
          Location: <span className="text-white pl-2">London UK</span>
        </p>
        <p className="pb-2">
          <img className="inline-block pr-4" src="lettre.webp" alt="" />
          contactme@templatename.com
        </p>
        <p className="pb-2">
          <img className="inline-block pr-4" src="tel.webp" alt="" />
          +76 6524 567862 763
        </p>
        <p className="pb-6">
          <img className="inline-block pr-4" src="ecran.webp" alt="" />
          www.mytemplatename.com
        </p>
      </div>
    </div>
  );
}
