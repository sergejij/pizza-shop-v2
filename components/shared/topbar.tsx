import React from 'react';
import { cn } from '@/lib/utils';
import { Categories, SortPopup, Container } from '@/components/shared';
import { Category } from '@prisma/client';

interface Props {
    items: Category[];
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className, items }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between">
                <Categories items={items} />
                <SortPopup />
            </Container>
        </div>
    );
};
