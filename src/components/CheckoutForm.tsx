import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { CartItem } from './Cart'
import Icon from '@/components/ui/icon'
import { useToast } from '@/hooks/use-toast'

interface CheckoutFormProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  totalPrice: number
  onOrderComplete: () => void
}

const CheckoutForm = ({ isOpen, onClose, items, totalPrice, onOrderComplete }: CheckoutFormProps) => {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryType: 'courier',
    address: '',
    city: '',
    paymentMethod: 'card',
    comment: ''
  })

  const deliveryPrice = totalPrice >= 10000 ? 0 : 500
  const finalPrice = totalPrice + deliveryPrice

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    toast({
      title: "Заказ оформлен!",
      description: `Заказ на сумму ${finalPrice.toLocaleString()} ₽ успешно оформлен. Мы свяжемся с вами в ближайшее время.`,
    })
    
    onOrderComplete()
    setStep(1)
    setFormData({
      name: '',
      email: '',
      phone: '',
      deliveryType: 'courier',
      address: '',
      city: '',
      paymentMethod: 'card',
      comment: ''
    })
  }

  const canProceedToStep2 = formData.name && formData.email && formData.phone
  const canProceedToStep3 = formData.city && formData.address

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Оформление заказа</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              {step > 1 ? <Icon name="Check" size={16} /> : '1'}
            </div>
            <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              {step > 2 ? <Icon name="Check" size={16} /> : '2'}
            </div>
            <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              3
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Контактные данные</h3>
              
              <div>
                <Label htmlFor="name">Имя и фамилия *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>

              <Button 
                type="button" 
                className="w-full"
                onClick={() => setStep(2)}
                disabled={!canProceedToStep2}
              >
                Далее
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Доставка</h3>
              
              <div>
                <Label>Способ доставки</Label>
                <RadioGroup 
                  value={formData.deliveryType}
                  onValueChange={(value) => setFormData({ ...formData, deliveryType: value })}
                  className="space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="courier" id="courier" />
                    <Label htmlFor="courier" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Курьерская доставка</div>
                      <div className="text-sm text-muted-foreground">
                        {deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice} ₽`} • 1-3 дня
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Самовывоз</div>
                      <div className="text-sm text-muted-foreground">Бесплатно • Сегодня</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="city">Город *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Москва"
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Адрес доставки *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Улица, дом, квартира"
                  required
                  rows={2}
                />
              </div>

              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  Назад
                </Button>
                <Button 
                  type="button" 
                  className="flex-1"
                  onClick={() => setStep(3)}
                  disabled={!canProceedToStep3}
                >
                  Далее
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Оплата и подтверждение</h3>
              
              <div>
                <Label>Способ оплаты</Label>
                <RadioGroup 
                  value={formData.paymentMethod}
                  onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                  className="space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Банковская карта</div>
                      <div className="text-sm text-muted-foreground">Visa, Mastercard, МИР</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Наличными при получении</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="comment">Комментарий к заказу</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Дополнительная информация для курьера"
                  rows={2}
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold mb-3">Состав заказа:</h4>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} × {item.quantity}</span>
                    <span className="font-semibold">{(item.price * item.quantity).toLocaleString()} ₽</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-2 border-t">
                  <span>Доставка:</span>
                  <span className="font-semibold">{deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice} ₽`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Итого:</span>
                  <span className="text-primary">{finalPrice.toLocaleString()} ₽</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(2)}
                >
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  Назад
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1"
                >
                  <Icon name="Check" size={18} className="mr-2" />
                  Оформить заказ
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CheckoutForm
