'use client';

import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title } from '@/components/shared/title';
import { cn } from '@/lib/utils';
import { ProductCart } from '@/components/shared/productCart';

interface Props {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, listClassName, categoryId, items, className }) => {
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log('cat', categoryId, title);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="mb-5 font-extrabold" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((item) => {
                    return (
                        <ProductCart
                            key={item.id}
                            id={item.id}
                            imageUrl={item.imageUrl}
                            name={item.name}
                            price={item.items[0].price}
                        />
                    );
                })}
            </div>
        </div>
    );
};
