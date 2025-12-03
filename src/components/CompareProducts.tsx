import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { products } from './ProductCatalog'
import Icon from '@/components/ui/icon'

interface CompareProductsProps {
  productIds: number[]
  onClearCompare: () => void
}

const CompareProducts = ({ productIds, onClearCompare }: CompareProductsProps) => {
  const selectedProducts = products.filter(p => productIds.includes(p.id))

  if (selectedProducts.length === 0) return null

  return (
    <section id="compare" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">Сравнение моделей</h2>
          <Button variant="outline" onClick={onClearCompare}>
            <Icon name="X" size={18} className="mr-2" />
            Очистить
          </Button>
        </div>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-[800px]">
            {selectedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</p>

                  <div className="space-y-3 pt-4">
                    <div className="border-t pt-3">
                      <p className="text-sm font-semibold mb-2">Характеристики:</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Давление:</span>
                          <span className="text-sm font-medium">{product.specs.pressure}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Вес:</span>
                          <span className="text-sm font-medium">{product.specs.weight}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Объем:</span>
                          <span className="text-sm font-medium">{product.specs.capacity}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Материал:</span>
                          <span className="text-sm font-medium text-right">{product.specs.material}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <p className="text-sm font-semibold mb-2">Особенности:</p>
                      <div className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon name="Check" size={14} className="text-secondary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {selectedProducts.length < 3 && (
          <p className="text-center text-muted-foreground mt-6">
            Вы можете добавить ещё {3 - selectedProducts.length} {selectedProducts.length === 2 ? 'модель' : 'модели'} для сравнения
          </p>
        )}
      </div>
    </section>
  )
}

export default CompareProducts
