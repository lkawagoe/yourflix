import React from 'react';

function ButtonLink(props){
    // props => {className: "Busca o valor que for passado", href: '/'}
    console.log(props);
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;