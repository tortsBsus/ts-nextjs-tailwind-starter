// import React from 'react';
import Image from 'next/image';
import { IoIosClose } from 'react-icons/io';

type Option = {
  image: string;
  name: string;
  email: string;
};


type BadgeProps = {
  onExit: (x: Option, mode: string) => void;
  option?: Option;
};

function Badge({ option, onExit }: BadgeProps) {
  return (
    option != undefined ? <div>
      {/* Chips when selected */}
      <div className='flex justify-between rounded-full shadow-sm bg-slate-200  p-2 align-baseline hover:bg-slate-400'>
        <div className=' col-start-2 rounded-full'>
          <div className=' rounded-full'>
            <Image

              alt='option'
              src={option.image}
              className='mx-2 h-10 w-10 rounded-full'
              width={700}
              height={475}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px'
            />
          </div>
        </div>
        <div className='self-center'>{option.name}</div>
        <IoIosClose size='2em' className='self-center' onClick={() => onExit(option, "remove")} />
      </div>
    </div> : <></>
  )
}

export default Badge;
