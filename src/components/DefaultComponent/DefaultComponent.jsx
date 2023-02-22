import React from 'react';
import { ContactComponent } from '../ContactComponent/ContactComponent';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { ListComponent } from '../ListComponent/ListComponent';

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <ContactComponent />
            <HeaderComponent />
            <ListComponent />
            {children}
        </div>
    );
};
export default DefaultComponent;
