import React, { useState } from 'react'
import ProductTable from './ProductTable'
import {data} from "../data"
import SearchBar from './SearchBar'

export default function FilterableProductTable() {
  const [showStocked, setShowStocked] = useState(false)
  const [filterPattern, setFilterPattern] = useState("")

  const handleChecked = () => {
    setShowStocked(!showStocked)
  } 
  const updateFilterPattern = string => {

    const pattern = new RegExp(string, "gi")
    setFilterPattern(pattern)
  }
  // Napisati program koji uzima šablon iz input-a i filtrira podatke, 
  // a onda - podebljava slova u podatku koja odgovaraju šablonu.

  const filterProducts = (data, pattern) => {
    let products = data.filter(product => product.name.match(pattern))

    let fragments = products.map(product => {
      return {
        ...product,
        name: [...product.name.matchAll(pattern)][0]
      }
    })
    fragments = fragments.map(fragment => {
      return {
        ...fragment, 
        name: <span>
                {fragment.name.input.slice(0, fragment.name.index)}
                <b>{fragment.name[0]}</b>
                {fragment.name.input.slice(fragment.name.index + fragment.name[0].length,)}
              </span>
      }
    })
    console.log({fragments});
    return fragments
  }

  let products = filterProducts(data, filterPattern)
  products = showStocked ? products.filter(product => product.stocked) : products

  console.log({products});

  return (
    <div>
        <SearchBar switchChecked={handleChecked} handleFilterText={updateFilterPattern}/>
        <ProductTable products={products} />
    </div>
  )
}

























