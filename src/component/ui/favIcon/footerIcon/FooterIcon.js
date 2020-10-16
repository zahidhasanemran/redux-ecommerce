import React from 'react';
import {Link} from 'react-router-dom';

const FooterIcon = ({link, IconName, fontClass}) => {
    return (
        <Link to={link}>
            <IconName className={fontClass} />
        </Link>
    );
};

export default FooterIcon;