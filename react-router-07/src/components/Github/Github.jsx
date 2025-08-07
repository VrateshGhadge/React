import React from 'react'
import { useEffect } from 'react'

function Github() {
    useEffect(() => {
     fetch('https://api.github.com/users/hiteshchoudary')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data) 
     })
    }, [])
    
  return (
    <div className='text-center bg-grey-200 m4 text-white'>Github Followers:</div>
  )
}

export default Github