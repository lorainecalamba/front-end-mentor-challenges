import React from 'react'

const UnorderedList = (props) => {

  const displayList = props.arrayList.map((item, index) => (
    <li className='pb-2' key={index}>{item}</li>
  ));

  return (
    <ul className='list-none'>
      {displayList}
    </ul>
  )
}

export default UnorderedList
