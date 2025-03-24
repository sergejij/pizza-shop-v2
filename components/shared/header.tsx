import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { User, ShoppingCart, ArrowRight } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => (
    <div className={cn('border border-b', className)}>
        <Container className="flex items-center justify-between py-8">
            <div className="flex items-center gap-4">
                <Image src="/logo.png" alt="Logo pizza" width={35} height={35} />
                <div>
                    <h1 className="text-2xl font-black uppercase">Pizza Shop</h1>
                    <p className="text-sm leading-3 text-gray-400">the best tasty ever</p>
                </div>
            </div>
            <div>middle</div>
            <div className="flex items-center gap-3">
                {/* <Button variant="outline" className="flex items-center gap-1"> */}
                {/*    <User size={16} /> */}
                {/*    Log In */}
                {/* </Button> */}

                <div>
                    <Button className="group relative">
                        <p>5$</p>
                        <span className="mx-3 h-full w-px bg-white/30" />
                        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                            <ShoppingCart size={16} className="relative" />
                            <b>3</b>
                        </div>
                        <ArrowRight
                            className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            size={20}
                        />
                    </Button>
                </div>
            </div>
        </Container>
    </div>
);
