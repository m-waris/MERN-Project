import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({imgSrc, title, price}) {
  return (
    <>
     <div className="block rounded-lg md:w-72 h-auto border-1 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <Link href="/login">
            <img
              className="rounded-t-lg h-52 w-full"
              src={imgSrc}
              alt="" />
          </Link>
          <div className="p-6">
            <h5
              className="mb-2 font-medium ">
                {title}
            </h5>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-yellow-600">
              Rs.<span className='pl-1'>{price} </span>
            </p>
            <div class="border-t-2 py-3 flex justify-between">
              <div>
                <label className=' font-medium pr-2'>Qnty: </label>
                <select name="" id="" className=' bg-slate-100 w-10 h-8'>
                  {
                    Array.from({ length: 10 }).map((e, i) => {
                      return (
                        <option value={i + 1}>{i + 1}</option>
                      )
                    })

                  }
                </select>
              </div>
              <div>
                <label className=' font-medium pr-2'>Size:</label>
                <select className='bg-slate-100 w-20 h-8'>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>

            </div>
        
          </div>
        </div>
    </>
  )
}
