export const revalidate = 60


import { Pagination, Title } from "@/components";
import { ProductGrid } from '../../components/products/product-grid/ProductGrid';
import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string  
  }
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams
  const page = params.page ? parseInt( params.page ) : 1

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page })

  if (products.length === 0) {
    redirect('/')
  }

  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={ products }
      />

      <Pagination totalPages={ totalPages }/>
    </>
  );
}
