import { Container, Filters, Title, TopBar, ProductsGroupList, ProductCart } from '@/components/shared';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="All pizzas" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                key={1}
                                items={[
                                    {
                                        id: 21,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 20,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 19,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 18,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 17,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 16,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 15,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 14,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 13,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 12,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                ]}
                                title="Пицца"
                                categoryId="1"
                            />

                            <ProductsGroupList
                                key={2}
                                items={[
                                    {
                                        id: 1,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 7,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 8,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 9,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                    {
                                        id: 10,
                                        name: 'Mozzarela',
                                        imageUrl:
                                            'https://media.dodostatic.com/image/r:292x292/11ef1cfefac2305bb20b0b2349b787d9.jpg',
                                        items: [{ price: 4.5 }],
                                    },
                                ]}
                                title="Завтрак"
                                categoryId="2"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
