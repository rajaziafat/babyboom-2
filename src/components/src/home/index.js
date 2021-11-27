import React from 'react'
import Navnbarhome from './Navbar'
import Timer from './Timer'
import Welcome from './Welcome'
import Road from './Road'
import Team from './Team'
import Footer from './Footer'

export default function index() {

    return (
        <div>
            <div className="timerbg" >
            <Navnbarhome/>
            <Timer/>
            </div>
            <Welcome/>
            <Road/>
            <Team/>
            <Footer/>
        </div>
    )
}
