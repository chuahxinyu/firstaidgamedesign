import React from 'react'
import { useScrollSection } from 'react-scroll-section';

export default function Navbar () {
const whatSection = useScrollSection("what")
const referencesSection = useScrollSection("references")

return (
    <div className="navbar">
        <div className="navbar-item" onClick={whatSection.onClick} selected={whatSection.selected}>FIRST AID</div>
        <div className="navbar-item" onClick={whatSection.onClick} selected={whatSection.selected}>design</div>

        <div className="navbar-item" onClick={referencesSection.onClick} selected={referencesSection.selected}>prototype</div>
        <div className="navbar-item"><a href="https://firstaidgameconcept.netlify.app/" target="_blank" rel="noreferrer">pitch (project 1)</a></div>
    </div>
)
}