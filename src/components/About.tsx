import Icon from '@/components/ui/icon'

const About = () => {
  const values = [
    {
      icon: 'Leaf',
      title: 'Устойчивость',
      description: 'Используем только экологичные материалы и производственные процессы'
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Каждая кофеварка проходит строгий контроль качества'
    },
    {
      icon: 'Heart',
      title: 'Страсть к кофе',
      description: 'Создаём продукты для настоящих ценителей эспрессо'
    },
    {
      icon: 'Globe',
      title: 'Мобильность',
      description: 'Ваш любимый кофе всегда с вами, где бы вы ни были'
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании EcoBrevo</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Мы создаём портативные кофеварки для тех, кто не готов идти на компромисс 
            между качеством эспрессо и свободой передвижения. Наша миссия — сделать 
            настоящий кофе доступным в любой точке мира, сохраняя при этом заботу о природе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx}
              className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground mb-4">
                <Icon name={value.icon} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-secondary mb-2">50K+</p>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-secondary mb-2">25+</p>
            <p className="text-muted-foreground">Стран доставки</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-secondary mb-2">5 лет</p>
            <p className="text-muted-foreground">На рынке</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
