import React from 'react'
import classes from './Card.module.css'
const Card = ( props ) => {
    return (
        //De esta manera se puede agregar className a un componente wrapper.
        <div className={`${classes.Card} ${props.className}`}> 
            { props.children }
        </div>
    )
}
export default Card