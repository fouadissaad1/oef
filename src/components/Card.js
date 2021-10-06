import React from 'react';

export function Card(props) {
    const {children, title, extraClassName} = props;
    return (
        <div onClick={() => alert(title || children)} className={`card ${extraClassName}`}>
            {title && <h4>{title}</h4>}
            {children}
        </div>
    );
}

