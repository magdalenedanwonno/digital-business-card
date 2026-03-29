
import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            {/* Replace '#' with your actual social media URLs */}
            <a href="https://twitter.com/madley197" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-square-twitter"></i>
            </a>
            
            <a href="https://instagram.com/madley_crochet" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-square-instagram"></i>
            </a>
            
            <a href="https://github.com/magdalenedanwonno" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-square-github"></i>
            </a>
        </footer>
    )
}