import React from 'react';
import { Link } from 'react-router-dom';

import { OrderedListItem, OrderedListProps } from './types';

const OrderedList: React.FC<OrderedListProps> = ({ list, title }): JSX.Element => <div className="my-20">
        {title && <span className="text-primary-bold text-sm font-bold">{title}</span>}
        <ol className="text-primary-normal mt-2">
            {list.map(({ name, to, active, onClick }: OrderedListItem) => (
                <li key={name}>
                    <Link className={`text-sm leading-7 hover:opacity-75 
                        ${active ? "text-primary-bold font-bold":"font-medium" }`} 
                        key={name} onClick={onClick} to={to}>{name}</Link>
                </li>
            ))}
        </ol>
    </div>;

export default OrderedList;