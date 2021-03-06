import React from 'react';
import './_rankDescription.css';

const rankDescription = props => (
    <td>
        <p><b className="orange-link">{props.name}</b></p>
        <article className="desc-article">
            {props.desc}
        </article>
    </td>
    
);

export default rankDescription;