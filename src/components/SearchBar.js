import React from 'react'

export default function SearchBar({switchChecked, handleFilterText}) {
  const handleFilterTextChange = event => {
    const text = event.target.value 
    handleFilterText(text)
  }
  return (
    <form>
      <input type="text" onChange={handleFilterTextChange} placeholder='Search...'/>
      <p>
      <label>
        <input type="checkbox" onChange={switchChecked}/>
        {""} 
        Only show products in stock
      </label>
      
      </p>

    </form>
  )
}
