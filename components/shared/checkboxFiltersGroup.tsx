'use client';

import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from '@/components/shared/filtersCheckbox';
import { Input, Skeleton } from '@/components/ui';

type Item = FilterCheckboxProps;

interface Props {
    limit?: number;
    title: string;
    name: string;
    searchInputPlaceholder?: string;
    className?: string;
    defaultValues?: string[];
    selectedValues?: Set<string>;
    loading?: boolean;
    items: Item[];
    defaultItems?: Item[];
    onClickCheckbox?: (id: string) => void;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    limit = 5,
    title,
    name,
    searchInputPlaceholder,
    defaultValues,
    items,
    defaultItems,
    onClickCheckbox,
    className,
    loading,
    selectedValues,
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    if (loading) {
        return (
            <div>
                <p className="mb-3 font-bold">{title}</p>

                {Array(limit)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} className="mb-4 h-6 rounded-[8px]" />
                    ))}
                <Skeleton className="mb-4 h-6 w-28 rounded-[8px]" />
            </div>
        );
    }

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : (defaultItems || items).slice(0, limit);

    return (
        <div className={className}>
            <p className="mb-3 font-bold">{title}</p>
            {showAll && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className="border-none bg-gray-50"
                    />
                </div>
            )}
            <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        name={name}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selectedValues?.has(item.value)}
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'mt-4 border-t-neutral-400' : ''}>
                    <button type="button" onClick={() => setShowAll(!showAll)} className="mt-4 text-primary">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
