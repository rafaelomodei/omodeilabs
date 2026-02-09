import { GradientDivider } from '@/components/atoms/gradient-divider';
import { RevealOnScroll } from '@/components/atoms/reveal-on-scroll';
import { SectionHeading } from '@/components/atoms/section-heading';
import { ProductCard } from '@/components/molecules/product-card';

const PRODUCTS = [
  {
    id: 1,
    name: 'Vaso Espiral Frisado com linhas curvas ',
    price: 'R$ 59,90',
    image: '/png/products/product01.png',
  },
  {
    id: 2,
    name: 'Vaso Concreto Minimalista',
    price: 'R$ 129,90',
    image: '/png/products/product02.png',
  },
  {
    id: 3,
    name: 'Vaso Cilíndrico Moderno',
    price: 'R$ 79,90',
    image: '/png/products/product03.png',
  },
  {
    id: 4,
    name: 'Kit Premium Organizador de Maquiagem',
    price: 'R$ 159,90',
    image: '/png/products/product04.png',
  },
  {
    id: 5,
    name: 'Pensador',
    price: 'R$ 19,90',
    image: '/png/products/product05.png',
  },
  {
    id: 6,
    name: 'Vasilha com textura de folhas',
    price: 'R$ 69,90',
    image: '/png/products/product06.png',
  },
] as const;

export function ProductsSection() {
  return (
    <section id='produtos' className='px-6 py-24'>
      <div className='mx-auto flex max-w-6xl flex-col gap-16'>
        <div className='text-center'>
          <RevealOnScroll>
            <SectionHeading highlight='Coleção'>Nossa</SectionHeading>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <p className='mt-4 text-lg text-[#B8A896]'>
              Formas que transformam. Design que inspira.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <GradientDivider className='mx-auto mt-6' />
          </RevealOnScroll>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {PRODUCTS.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 100}>
              <ProductCard
                index={index}
                name={product.name}
                price={product.price}
                image={product.image}
                href='https://shopee.com.br/verdeforma'
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
