import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Icon from '@/components/ui/icon'

const Reviews = () => {
  const reviews = [
    {
      name: 'Алексей Петров',
      rating: 5,
      text: 'Беру кофеварку в каждый поход. Качество эспрессо не уступает кофейне! Компактная и надёжная.',
      initials: 'АП'
    },
    {
      name: 'Мария Соколова',
      rating: 5,
      text: 'Потрясающий дизайн и экологичные материалы. Чувствуешь связь с природой, когда готовишь кофе на рассвете в горах.',
      initials: 'МС'
    },
    {
      name: 'Дмитрий Волков',
      rating: 5,
      text: 'Использую в рабочих поездках. Теперь не завис от качества кофе в отелях. EcoBrevo Pro — лучшее вложение!',
      initials: 'ДВ'
    },
    {
      name: 'Елена Новикова',
      rating: 4,
      text: 'Отличная кофеварка для кемпинга. Единственное — нужно немного практики, чтобы научиться делать идеальный эспрессо.',
      initials: 'ЕН'
    },
    {
      name: 'Игорь Смирнов',
      rating: 5,
      text: 'Купил как подарок другу-путешественнику. Он в восторге! Качество сборки на высоте.',
      initials: 'ИС'
    },
    {
      name: 'Анна Кузнецова',
      rating: 5,
      text: 'Стильная и функциональная. Беру на пикники и в офис. Коллеги постоянно просят попробовать кофе из моей EcoBrevo.',
      initials: 'АК'
    }
  ]

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас любители кофе и путешествий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
