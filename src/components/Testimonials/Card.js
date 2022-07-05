import React from 'react'

export default function Card( {titre, texte, image, nom}) {
  return (
    <div>
        <div className='bg-white mt-24'>
            <p className='text-primary'>{titre}</p>
            <p className='text-grey-dark'>{texte}</p>
            <img className='' src={image} alt="" />
            <p className='text-secondary'> {nom} <span className='text-grey-dark'>customer</span></p>
        </div>
    </div>
  )
}

<Card
  titre=""
  texte="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, molestiae cumque nam recusandae quasi corrupti, non natus adipisci ducimus repellat consequuntur repudiandae odit a doloremque."
  image=""
  nom=""
/>;
