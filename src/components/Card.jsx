import React from 'react'

const Card = (
    {title, 
    desc,
    img,
    date,
    orgname,
    orgicon,
    venname,
    vencity,
    vencntry} = props) => {
  return (
    <div className="flex w-1/3 flex-col items-center rounded-md border mx-2 my-2 bg-gray-400 shadow-2xl hover:shadow-slate-500">
      <div className="h-full w-full">
        <img
          src={img}
          alt="Image failed to load"
          className="h-full w-full rounded-md object-fit"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold underline">
            {title}
          </h1>
          <p class="mt-3 text-sm font-semibold text-blue-900">
            {desc}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-900 border-2 border-black">
            📅{date}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-900 border-2 border-black">
            📌{venname},{vencity}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-900 border-2 border-black">
            🏳️{vencntry}
            </span>
          </div>
      <div className="mt-3 flex items-center space-x-2">
        <img
          className="inline-block h-8 w-8 rounded-full border-2"
          src={orgicon}
          alt="Image failed to load"
        />
        <span className="flex flex-col">
          <span className="text-[10px] font-black text-gray-900 text-lg">{orgname}</span>
        </span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Card
