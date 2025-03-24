import React from 'react';
import { cn } from '@/lib/utils';
import { Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup } from '@/components/shared';
import { Input } from '@/components/ui';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="mb-3 font-bold">Цена от и до:</p>
                <div className="mb-5 flex gap-3">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" placeholder="1000" min={100} max={1000} />
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                className="mt-5"
                limit={6}
                searchInputPlaceholder="Поиск..."
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                ]}
                // onChange={() => {}}
            />
        </div>
    );
};
