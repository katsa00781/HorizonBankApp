import { space } from 'postcss/lib/list'
import React from 'react'

const HeaderBox = ({type = "title", title, subtext, user} : HeaderBoxProps) => {
  return (
    <div>
        <div className='header-box'>
            <h1 className='header-box-title'>
            {title}
            {type === "greeting" && (
                <span className='text-bankGradient'>
                    {/* // az &nbsp egy üres karakter amivel szóközt adunk az üdvözlés és a felhasználó közé // */}
                    &nbsp;{user}</span>
            )}
            </h1>
            <p className='header-box-subtext'>
                {subtext}
            </p>
        </div>
    </div>
  )
}

export default HeaderBox