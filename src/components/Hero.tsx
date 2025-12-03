import { Button } from '@/components/ui/button'

const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Кофе в любой точке мира
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Премиальные портативные кофеварки для тех, кто ценит качество и свободу. 
              Эспрессо барного уровня в горах, на пляже или в дороге.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToCatalog} className="text-lg">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('about')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/626920f0-20e5-4589-a588-5deef3dd843f/files/2c3911f2-f5d3-47a9-99d5-b6956de07b5e.jpg"
                alt="Мобильная кофеварка EcoBrevo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg max-w-[200px]">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Экологичные материалы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
