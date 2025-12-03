import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import Icon from '@/components/ui/icon'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  features: string[]
  specs: {
    pressure: string
    weight: string
    capacity: string
    material: string
  }
}

const products: Product[] = [
  {
    id: 1,
    name: 'EcoBrevo Classic',
    price: 12900,
    image: 'https://cdn.poehali.dev/projects/626920f0-20e5-4589-a588-5deef3dd843f/files/2c3911f2-f5d3-47a9-99d5-b6956de07b5e.jpg',
    description: 'Классическая портативная кофеварка для повседневного использования',
    features: ['Ручной насос', 'Экологичные материалы', 'Компактный дизайн'],
    specs: {
      pressure: '9 бар',
      weight: '450г',
      capacity: '50мл',
      material: 'Нержавеющая сталь, бамбук'
    }
  },
  {
    id: 2,
    name: 'EcoBrevo Pro',
    price: 18900,
    image: 'https://cdn.poehali.dev/projects/626920f0-20e5-4589-a588-5deef3dd843f/files/5f05fb4a-9103-43f0-8793-4861e9c1f6fe.jpg',
    description: 'Профессиональная модель с повышенным давлением',
    features: ['Двойной насос', 'Термоизоляция', 'Премиум материалы', 'Дорожный чехол'],
    specs: {
      pressure: '15 бар',
      weight: '580г',
      capacity: '70мл',
      material: 'Титан, орех'
    }
  },
  {
    id: 3,
    name: 'EcoBrevo Travel',
    price: 15900,
    image: 'https://cdn.poehali.dev/projects/626920f0-20e5-4589-a588-5deef3dd843f/files/4dc61dde-788b-464e-826b-b948f24774d8.jpg',
    description: 'Ультра-компактная модель для путешествий',
    features: ['Складная конструкция', 'Легкий вес', 'Защита от протечек'],
    specs: {
      pressure: '12 бар',
      weight: '320г',
      capacity: '40мл',
      material: 'Алюминий, бамбук'
    }
  }
]

interface ProductCatalogProps {
  compareProducts: number[]
  onToggleCompare: (id: number) => void
  onAddToCart: (product: Product) => void
}

const ProductCatalog = ({ compareProducts, onToggleCompare, onAddToCart }: ProductCatalogProps) => {
  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши кофеварки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите модель, которая подходит вашему стилю жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary">
                    <Icon name="Leaf" size={14} className="mr-1" />
                    Эко
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      checked={compareProducts.includes(product.id)}
                      onCheckedChange={() => onToggleCompare(product.id)}
                      disabled={compareProducts.length >= 3 && !compareProducts.includes(product.id)}
                    />
                    <span className="text-sm text-muted-foreground">Сравнить</span>
                  </div>
                </div>

                <p className="text-muted-foreground">{product.description}</p>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full" onClick={() => onAddToCart(product)}>
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCatalog
export type { Product }
export { products }