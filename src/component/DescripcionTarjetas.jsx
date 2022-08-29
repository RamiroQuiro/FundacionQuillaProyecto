import React from 'react'

export default function DescripcionTarjetas({children,className}) {
  return (
    <p className={`${className} font-medium text-left text-sm`}>{children}</p>
  )
}
