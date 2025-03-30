import { useEffect, useState } from 'react';
import { Ingredient } from '@prisma/client';
import { Api } from '@/services/apiClient';

interface Ingredients {
    loading: boolean;
    ingredients: Ingredient[];
}

export const useIngredients = (): Ingredients => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Api.ingredients
            .getAll()
            .then((data) => setIngredients(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return { ingredients, loading };
};
