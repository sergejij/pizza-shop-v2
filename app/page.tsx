import { Container, Filters, Title, TopBar, ProductsGroupList } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    ingredients: true,
                    items: true,
                },
            },
        },
    });

    return (
        <>
            <Container className="mt-10">
                <Title text="All pizzas" size="lg" className="font-extrabold" />
            </Container>
            <TopBar items={categories.filter((item) => item.products.length > 0)} />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map((category) => {
                                if (!category.products) {
                                    return null;
                                }

                                return (
                                    <ProductsGroupList
                                        key={category.id}
                                        title={category.name}
                                        categoryId={category.id}
                                        items={category.products}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
