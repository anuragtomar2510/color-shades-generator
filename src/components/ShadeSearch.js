import React from 'react'
import './ShadeSearch.css'

const ShadeSearch = ({setColor}) => {
        return (
                <div className="shade-search">
                        <div className="emojis">🐼🐹🦁🌋🌈🐻</div>
                        <input type="text" className="shade-input" placeholder="Enter color" onChange={(e) => setColor(e.target.value)}/>
                        <div className="emojis">🌮🌱🌲🌷🌸🌼</div>
                </div>
        )
}

export default ShadeSearch
