import React from 'react'

const Styled_Button = (props) => {
    return (
        <button type={props.type} onClick={props.onClick} >
            {props.children}
        </button>
    )
}

const Styled_Link = ({link, alt, title}) => {
    return (
        <Link to={link} alt={alt}>
            {title}
        </Link>
    )
}

export {Button, Styled_Link}