import { Card, CardContent } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const Delivery = () => {
  const deliveryOptions = [
    {
      icon: 'Truck',
      title: 'Бесплатная доставка',
      description: 'По России при заказе от 10 000 ₽'
    },
    {
      icon: 'Clock',
      title: 'Быстрая доставка',
      description: '2-5 дней по России, 7-14 дней международная'
    },
    {
      icon: 'Package',
      title: 'Экологичная упаковка',
      description: 'Перерабатываемые материалы и минимум пластика'
    },
    {
      icon: 'Shield',
      title: 'Страхование груза',
      description: 'Полная защита вашего заказа при доставке'
    }
  ]

  return (
    <section id="delivery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Доставка</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Доставляем наши кофеварки по всему миру с заботой о качестве и экологии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliveryOptions.map((option, idx) => (
            <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-2">
                  <Icon name={option.icon} size={24} />
                </div>
                <h3 className="text-lg font-bold">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-6">
            <h3 className="text-2xl font-bold mb-4">Стоимость и сроки доставки</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <p className="font-semibold">Москва и МО</p>
                  <p className="text-sm text-muted-foreground">Курьерская доставка</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">500 ₽</p>
                  <p className="text-sm text-muted-foreground">1-2 дня</p>
                </div>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <p className="font-semibold">Санкт-Петербург</p>
                  <p className="text-sm text-muted-foreground">Курьерская доставка</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">600 ₽</p>
                  <p className="text-sm text-muted-foreground">2-3 дня</p>
                </div>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <p className="font-semibold">Регионы России</p>
                  <p className="text-sm text-muted-foreground">СДЭК, Boxberry</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">От 400 ₽</p>
                  <p className="text-sm text-muted-foreground">3-7 дней</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Международная доставка</p>
                  <p className="text-sm text-muted-foreground">DHL, FedEx</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Рассчитывается</p>
                  <p className="text-sm text-muted-foreground">7-14 дней</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg mt-6">
              <p className="text-sm">
                <Icon name="Gift" size={16} className="inline mr-2" />
                <span className="font-semibold">Бесплатная доставка</span> по России при заказе от 10 000 ₽
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Delivery
