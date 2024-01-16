// Custom Multi Slect Component

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Badge from '@/app/components/Badge';
type SelectOptions = {
  image: string;
  name: string;
  email: string;
};

type SelectProps = {
  options: SelectOptions[];
  onModify: (x: SelectOptions, mode: string) => void;
  value?: SelectOptions[];
};

function CustomSelect({ value, onModify, options }: SelectProps) {


  const [menu, setMenu] = useState(
    options.length >= 2
      ? options.sort((a, b) => a.name.localeCompare(b.name))
      : options
  );
  const [backspaceCount, setBackspaceCount] = useState(0);
  // --------------------------------- View menu only when select is active ---------------------------------
  const [open, setOpen] = useState(false);



  // --------------------------------- Option Search ---------------------------------
  const [searchText, setSearchText] = useState('');

  const handleTextBox = (event: any) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {

    if (value != undefined) {
      const emails: string[] = [];
      for (let val of value) {
        emails.push(val.email);
      }
      setMenu(
        options.filter((option) => option.name.toLowerCase().startsWith(searchText.toLowerCase()) && !emails.includes(option.email))
      )
    }
    else {
      setMenu(
        options.filter((option) => option.name.toLowerCase().startsWith(searchText.toLowerCase()))
      )
    }



  }, [searchText, value]);


  const optionSelected = (elem: SelectOptions) => {
    onModify(elem, "add");
  }

  const handleBackspace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value == '' && event.key === 'Backspace') {
      const arr: any = value;
      if (backspaceCount == 1) { onModify(arr.pop(), "remove"); setBackspaceCount(0); }
      setBackspaceCount(1);
    }
    else {
      setBackspaceCount(0);
    }
  }
  useEffect(() => { console.log() }, [backspaceCount])

  return (
    <>

      <div className='border-b-2 border-solid border-blue-400  hover:border-black flex flex-wrap' >

        {/*--------------------------------- Selected Options ---------------------------------*/}
        {
          value != undefined &&
          value.length > 0 &&
          <div className=' flex ' >
            {
              value.slice(0, value.length - 1).map((val) => <>
                <Badge
                  option={val}
                  onExit={onModify}
                />
              </>)
            }
            {value.slice(value.length - 1).map((val) => (backspaceCount == 0) ? (<div key={val.email}>    <Badge option={val} onExit={onModify} />  </div>) :
              (<div className='ring-2 rounded-full' key={val.email}>  <Badge option={val} onExit={onModify} /> </div>))
            }
          </div>

        }


        {/*--------------------------------- Text Box ---------------------------------*/}
        <input
          placeholder='Add new user'
          className='mx-2 max-w-full border-0 text-slate-500 focus:ring-0 min-w-1/5 w-auto'
          onFocus={() => setOpen(true)}
          onChange={handleTextBox}
          onKeyDown={handleBackspace}
        />
      </div>

      {/*--------------------------------- Menu ---------------------------------*/}
      {open || searchText.trim() !== '' ? (
        <ul className=' max-h-40 overflow-y-auto shadow-2xl' onMouseEnter={() => setOpen(true)}>
          {menu.map((elem) => (
            <li key={elem.email}>



              {/*--------------------------------- Options ---------------------------------*/}
              <div
                className='flex flex-1 justify-stretch px-8 py-2 align-baseline hover:bg-slate-400'
                // onClick={onModify(elem)}
                onClick={() => optionSelected(elem)}

              >
                <div className='flex grow '>
                  <div className=' rounded-full'>
                    <Image
                      alt='option'
                      src={elem.image}
                      className='h-10 w-10 rounded-full'
                      width={700}
                      height={475}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px'
                    />
                  </div>

                  <div className='self-center pl-2 text-left '>{elem.name}</div>
                </div>

                <div className='grow self-center pl-2 text-left '>
                  {elem.email}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

export default CustomSelect;
