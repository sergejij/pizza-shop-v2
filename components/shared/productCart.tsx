import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Title } from '@/components/shared/title';
import { Button } from '@/components/ui';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    className?: string;
}

export const ProductCart: React.FC<Props> = ({ className, imageUrl, name, id, price }) => {
    return (
        <div className={className}>
            <Link href="/product/1">
                <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
                    <img className="" src={imageUrl} alt={name} width={215} height={215} /> {/* todo change to Image */}
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex illum ipsam maiores, molestiae
                    repellendus vel voluptatum. Architecto, consectetur facere illo porro, quia quis quod ratione
                    tenetur, ullam velit voluptates.
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-[20px]">
                        от <b>{price}$</b>
                    </span>

                    <Button variant="secondary">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
};
