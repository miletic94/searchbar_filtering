import React from 'react'

export default function ProductCategoryRow({product}) {
  return (
    <tr>
      <td span="2">
        {product.category}
      </td>
    </tr>
  )
}
