import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSet } from 'react-use';

interface PriceRange {
    priceFrom?: number;
    priceTo?: number;
}

export interface QueryFilters extends PriceRange {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

export interface Filters {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceRange;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceRange, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(','))
    );

    const [prices, setPrices] = useState<PriceRange>({
        priceTo: Number(searchParams.get('priceTo')) || 1000,
        priceFrom: Number(searchParams.get('priceFrom')) || 0,
    });

    const [sizes, { toggle: setSizes }] = useSet(
        new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
    );

    const [pizzaTypes, { toggle: setPizzaTypes }] = useSet(
        new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [])
    );

    const updatePrice = (name: keyof PriceRange, value: number) => {
        setPrices((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return {
        sizes,
        pizzaTypes,
        selectedIngredients,
        prices,
        setPrices: updatePrice,
        setPizzaTypes,
        setSizes,
        setSelectedIngredients,
    };
};
