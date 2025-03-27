'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useClickAway, useDebounce } from 'react-use';
import Link from 'next/link';
import { Api } from '@/services/apiClient';
import { Product } from '@prisma/client';

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [focused, setFocused] = useState(false);
    const ref = useRef(null);
    const handleInputClick = () => {
        setFocused(true);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleItemClick = () => {
        setFocused(false);
        setProducts([]);
        setSearchQuery('');
    };

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(
        async () => {
            try {
                const response = await Api.products.search(searchQuery);
                setProducts(response);
            } catch (error) {
                console.log(error);
            }
        },
        250,
        [searchQuery]
    );

    return (
        <>
            {focused && <div className="fixed inset-0 z-30 bg-black/50" />}
            <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
                <Search className="absolute left-3 top-1/2 h-5 -translate-y-1/2 text-gray-400" />
                <input
                    className="w-full rounded-2xl bg-gray-100 pl-11 outline-none"
                    type="text"
                    placeholder="Найти пиццу..."
                    onClick={handleInputClick}
                    value={searchQuery}
                    onChange={handleInputChange}
                />

                {products.length > 0 && (
                    <div
                        className={cn(
                            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                            focused && 'visible opacity-100 top-12'
                        )}
                    >
                        {products.map((product) => {
                            return (
                                <Link
                                    key={product.id}
                                    className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10"
                                    href={`/product/${product.id}`}
                                    onClick={handleItemClick}
                                >
                                    <img
                                        className="rounded-sm"
                                        src={product.imageUrl}
                                        width={32}
                                        height={32}
                                        alt={product.name}
                                    />
                                    <span>{product.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};
