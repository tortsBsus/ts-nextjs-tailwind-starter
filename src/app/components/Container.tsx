import Intro from '@/app/components/Intro';
import CustomSelect from '@/app/components/CustomSelect'
import React, { useEffect, useState } from 'react'
function Container() {

  const data: {
    image: string;
    name: string;
    email: string;
  }[] = [
      {
        image: "/images/users/A.jpg",
        name: "Elizabeth Smith",
        email: "elizabeth.smith@example.com",
      },
      {
        image: "/images/users/B.jpg",
        name: "Olivia Johnson",
        email: "olivia.johnson@example.com",
      },
      {
        image: "/images/users/C.jpg",
        name: "Noah Brown",
        email: "noah.brown@example.com",
      },
      {
        image: "/images/users/D.jpg",
        name: "Emma Davis",
        email: "emma.davis@example.com",
      },
      {
        image: "/images/users/E.jpg",
        name: "William Wilson",
        email: "william.wilson@example.com",
      },
      {
        image: "/images/users/F.jpg",
        name: "Sophia Martin",
        email: "sophia.martin@example.com",
      },
      {
        image: "/images/users/G.jpg",
        name: "James Lee",
        email: "james.lee@example.com",
      },
    ];

  const [selected, setSelected] = useState<typeof data | undefined>(undefined);

  const modifyValue = (x: typeof data[0], mode: string) => {
    switch (mode) {
      case "add": if (selected != undefined) {
        const arr: any = [...selected];
        arr.push(x);
        setSelected(arr);
      }
      else {
        const arr: any = [x];
        setSelected(arr);
      }
        break;
      case "remove": if (selected != undefined) setSelected(selected.filter((vals) => vals.name != x.name));
        break;
    }
  }

  return (
    <div className='p-20 flex flex-col align-middle justify-center '>
      {/* Heading */}
      <h1 className='text-blue-600 text-center'>Pick Users</h1>
      {/* Slect Component */}
      <div>
        <CustomSelect
          value={selected}
          onModify={modifyValue}
          options={data} />
      </div>
      <div>
        <Intro />
      </div>
    </div>
  )
}

export default Container