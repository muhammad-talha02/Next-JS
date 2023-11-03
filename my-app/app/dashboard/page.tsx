"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter()
  return (
    <div>
      {/* <Navbar/> */}
      <button onClick={()=> router.push("/notes")}>Go Home</button> <br />
      I am a Dashboard
    </div>
  )
}

export default Dashboard
