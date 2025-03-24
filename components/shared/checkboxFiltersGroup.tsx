'use client';

import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from '@/components/shared/filtersCheckbox';
import { Input } from '@/components/ui';

type Item = FilterCheckboxProps;

interface Props {
    limit: number;
    title: string;
    searchInputPlaceholder?: string;
    className?: string;
    defaultValues?: string[];
    items: Item[];
    defaultItems: Item[];
    onChange?: (values: string[]) => void;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    limit = 5,
    title,
    searchInputPlaceholder,
    defaultValues,
    items,
    defaultItems,
    onChange,
    className,
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);

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
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
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
