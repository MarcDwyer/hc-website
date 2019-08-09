import React from 'react'
import './footer.scss'

type Social = {
    name: string;
    url: string;
}

const social: Social[] = [
    {
        name: "Github",
        url: "https://github.com/MarcDwyer"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/marc-dwyer-53087339/"
    },
    {
        name: "Email",
        url: "marcdwyer1738@gmail.com"
    }
]


const Footer = () => {
    return (
        <div className="footer">
            <div className="sub-footer">
                <div className="contact">
                    <span className="title">Contact me</span>
                    <div className="so-links">
                        {social.map(soc => (
                            <a key={soc.url} href={soc.name === "Email" ? `mailto:${soc.url}` : soc.url} target="_blank" rel="noopener noreferrer">{soc.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer