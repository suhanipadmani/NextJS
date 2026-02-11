import React from 'react'

export default function loading() {
  return (
     <>
      <h1>Todos</h1>
      <div className="todos-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="shimmer">
            <div className="shimmer-checkbox"></div>
            <div className="shimmer-text"></div>
          </li>
        ))}
      </div>
    </>
  )
}
