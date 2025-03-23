import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

const Header: React.FC<Props> = ({ className }) => (
    <div className={cn(
        'border border-b',
        className,
    )}
    >

        Header
    </div>
);

export default Header;
