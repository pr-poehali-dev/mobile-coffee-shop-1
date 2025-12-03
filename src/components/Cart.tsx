import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { useState } from 'react'
import CheckoutForm from './CheckoutForm'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartProps {
  items: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
  onClearCart: () => void
}

const Cart = ({ items, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  const handleOrderComplete = () => {
    setIsCheckoutOpen(false)
    onClearCart()
  }

  return (
    <>
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="relative">
            <Icon name="ShoppingCart" size={18} />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {totalItems}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl">Корзина</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <Icon name="ShoppingCart" size={32} className="text-muted-foreground" />
              </div>
              <p className="text-lg font-semibold mb-2">Корзина пуста</p>
              <p className="text-muted-foreground text-sm">Добавьте товары из каталога</p>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="font-semibold leading-tight">{item.name}</h4>
                      <p className="text-lg font-bold text-primary">
                        {(item.price * item.quantity).toLocaleString()} ₽
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-auto"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Icon name="Trash2" size={14} className="text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Товары ({totalItems}):</span>
                  <span className="font-bold">{totalPrice.toLocaleString()} ₽</span>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Доставка:</span>
                  <span>{totalPrice >= 10000 ? 'Бесплатно' : '500 ₽'}</span>
                </div>

                <div className="flex justify-between text-xl font-bold pt-2 border-t">
                  <span>Итого:</span>
                  <span className="text-primary">
                    {(totalPrice + (totalPrice >= 10000 ? 0 : 500)).toLocaleString()} ₽
                  </span>
                </div>

                {totalPrice < 10000 && (
                  <p className="text-sm text-muted-foreground text-center">
                    До бесплатной доставки: {(10000 - totalPrice).toLocaleString()} ₽
                  </p>
                )}
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={handleCheckout}
              >
                Оформить заказ
              </Button>

              <Button 
                variant="ghost" 
                className="w-full"
                onClick={onClearCart}
              >
                Очистить корзину
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutForm 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={items}
        totalPrice={totalPrice}
        onOrderComplete={handleOrderComplete}
      />
    </>
  )
}

export default Cart
