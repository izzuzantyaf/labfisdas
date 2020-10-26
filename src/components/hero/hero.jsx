import React, { useEffect } from 'react'
import './hero.scss'

// level 0 component
export default function Hero() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <section className="hero">
            <div className="container">
                <div className="main-title">Laboratorium Fisika Dasar <br></br> Universitas Telkom</div>
                <div className="desc">The official website of<br />Tel-U Physics Laboratory</div>
            </div>
        </section>
    )
}