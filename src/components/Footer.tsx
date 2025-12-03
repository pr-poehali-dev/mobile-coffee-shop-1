import Icon from '@/components/ui/icon'

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">☕</div>
              <span className="text-xl font-bold">EcoBrevo</span>
            </div>
            <p className="text-sm opacity-90">
              Премиальные портативные кофеварки для настоящих ценителей
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {['Главная', 'Каталог', 'О компании', 'Блог'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              {['Отзывы', 'FAQ', 'Доставка', 'Контакты'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@ecobrevo.com
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, Россия
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © 2024 EcoBrevo. Все права защищены.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Youtube'].map((social) => (
              <button
                key={social}
                className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center"
              >
                <Icon name={social as any} size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
