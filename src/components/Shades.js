import React, {useState, useEffect} from 'react'
import './Shades.css'
import Values from 'values.js'
import isColor from 'is-color'
import Shade from './Shade'


const Shades = ({ color }) => {

        const [shades, setShades] = useState([])

        useEffect(() => {

                if(isColor(color)) {

                        const generatedShades = new Values(color).shades(1);
                        setShades(generatedShades)

                }

        }, [color])

        return (
                
                        <div className="shadesContainer">
                        
                                {shades.map((shade) => <Shade shade={shade}/>)}
                        
                        </div>
               
        )
}

export default Shades
