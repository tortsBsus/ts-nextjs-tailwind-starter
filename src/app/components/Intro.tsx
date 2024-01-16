import React from 'react'

function Intro() {
  return (
    <div className="m-10 text-center shadow-xl">
      <h1>Created by Meghana Rathanraj</h1>
      <p>Thanks for the oppurtunity, it was an interesting assignment!</p>
      <div className='flex justify-evenly m-3 p-10'>
        <button className="p-4 bg-black text-white rounded-lg" onClick={() => window.location.href = "https://drive.google.com/file/d/1l3g_2eIfqyKRSSK5MpJksebWXPXMkMDZ/view?usp=drive_link"}>Resume</button>
        <button className="p-4 bg-black text-white rounded-lg" onClick={() => window.location.href = "https://www.linkedin.com/in/meghana-rathanraj-link-to-profile/"}>Linkedin</button>
        <button className="p-4 bg-black text-white rounded-lg" onClick={() => window.location.href = "https://twitter.com/megTries"}>Twitter</button>
      </div>
    </div>
  )
}

export default Intro