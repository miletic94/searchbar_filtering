import React from 'react'

export default function ProductRow({product}) {
  const color = product.stocked ? "black" : "red"
  
  return (
    <tr>
        <td style={{color}}>
            {product.name}
        </td>
        <td>
            {product.price}
        </td>
    </tr>
  )
}

