'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Title, RangeSlider, CheckboxFiltersGroup } from '@/components/shared';
import { Input } from '@/components/ui';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading } = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map(({ id, name }) => ({ value: String(id), text: name }));

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };

    return (
        <div className={cn('', className)}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                title="Тип теста"
                name="sizes"
                className="mb-5"
                onClickCheckbox={filters.setPizzaTypes}
                selectedValues={filters.pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                name="sizes"
                className="mb-5"
                onClickCheckbox={filters.setSizes}
                selectedValues={filters.sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
            />

            {/*<div className="flex flex-col gap-4">*/}
            {/*    <FilterCheckbox text="Можно собирать" name="Можно собирать" value="1" />*/}
            {/*    <FilterCheckbox text="Новинки" name="Новинки" value="2" />*/}
            {/*</div>*/}

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="mb-3 font-bold">Цена от и до:</p>
                <div className="mb-5 flex gap-3">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        step={10}
                        max={1000}
                        value={String(filters.prices?.priceFrom)}
                        onChange={(e) => filters.setPrices('priceFrom', Number(e.currentTarget.value))}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        step={10}
                        max={1000}
                        value={String(filters.prices?.priceTo)}
                        onChange={(e) => filters.setPrices('priceTo', Number(e.currentTarget.value))}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[filters.prices?.priceFrom || 0, filters.prices?.priceTo || 1000]}
                    onValueChange={updatePrices}
                />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                name="Ингредиенты"
                className="mt-5"
                limit={6}
                searchInputPlaceholder="Поиск..."
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selectedValues={filters.selectedIngredients}
            />
        </div>
    );
};
