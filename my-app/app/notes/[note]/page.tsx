"use client"
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
import React from 'react'

const Note = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      Single Note
    </div>
  )
}

export default Note
