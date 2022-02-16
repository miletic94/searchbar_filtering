import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable({products}) {

  let lastCategory = null

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => {
            
            if(product.category !== lastCategory) {
              lastCategory = product.category
              return (
                <>
                <ProductCategoryRow key={product.category} product={product}/>
                <ProductRow key={product.name.innerText} product={product}/>
                </>
              )
            }
              lastCategory = product.category
              return <ProductRow key={product.name.innerText} product={product}/>
          })
        }
      </tbody>
      
    </table>
  )
}
