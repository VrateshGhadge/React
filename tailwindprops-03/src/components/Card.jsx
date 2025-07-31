import React from 'react'

function Card({username, price="1000", colorPart}) {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-2 pb-10">
        <div className="flex justify-between items-center">
            <p className="text-lg font-bold">{username}</p>
             <p className="text-sm text-gray-400">Price</p>
       </div>
       <div className="flex justify-between items-center mt-2">
           <p className="font-bold text-cyan-400">{colorPart}</p>
           <p className="font-bold">{price}</p>
       </div>
        </div>
      </div>
    )
}

export default Card