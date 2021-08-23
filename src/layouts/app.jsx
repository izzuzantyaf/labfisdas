import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

export default function AppLayout(props) {
  const Content = props.content
  return (
    <>
      <Navbar />
      {Content}
      <Footer />
    </>
  )
}