import React from 'react';

const ListingContainer:React.FC<{ isCollapsed?: boolean; isMasonry?: boolean; ref: React.ForwardedRef<unknown> }> = 
    React.forwardRef(({ children, isCollapsed = false, isMasonry = true }, ref):JSX.Element => (
    <div 
        className="overflow-y-scroll p-2 mt-4" 
        ref={ref as React.LegacyRef<HTMLDivElement>}
    >
        {children}
    </div>
));

export default ListingContainer;
