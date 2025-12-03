import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = () => {
  const faqs = [
    {
      question: 'Как работает портативная кофеварка?',
      answer: 'Наши кофеварки используют ручной насос для создания давления (9-15 бар), которое проталкивает горячую воду через молотый кофе. Принцип работы аналогичен профессиональным эспрессо-машинам, но в компактном формате.'
    },
    {
      question: 'Какой кофе можно использовать?',
      answer: 'Мы рекомендуем использовать свежемолотый кофе среднего или мелкого помола. Подходит любой сорт зёрен, предназначенный для эспрессо. Также можно использовать чалды (кофе в таблетках).'
    },
    {
      question: 'Как ухаживать за кофеваркой?',
      answer: 'После каждого использования промывайте все съёмные части тёплой водой. Раз в неделю рекомендуется разбирать и тщательно чистить все компоненты. Избегайте использования абразивных средств.'
    },
    {
      question: 'Можно ли готовить не только эспрессо?',
      answer: 'Да! Вы можете готовить американо (добавив горячую воду), лунго (увеличив время экстракции), или использовать эспрессо как основу для капучино и латте.'
    },
    {
      question: 'Сколько служит кофеварка?',
      answer: 'При правильном уходе наши кофеварки служат 5-7 лет и более. Мы даём гарантию 2 года и предоставляем запасные части для всех моделей.'
    },
    {
      question: 'Безопасны ли материалы?',
      answer: 'Абсолютно! Мы используем только пищевую нержавеющую сталь, титан и натуральные материалы (бамбук, орех). Все материалы сертифицированы и не содержат BPA и других вредных веществ.'
    },
    {
      question: 'Какая температура воды нужна?',
      answer: 'Оптимальная температура воды — 90-96°C. Вы можете вскипятить воду и дать ей остыть 30 секунд, или использовать портативный термометр для точности.'
    },
    {
      question: 'Можно ли взять кофеварку в самолёт?',
      answer: 'Да, наши кофеварки компактны и разрешены как в ручной клади, так и в багаже. Многие наши клиенты берут EcoBrevo в путешествия по всему миру.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о наших кофеварках
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-background rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
