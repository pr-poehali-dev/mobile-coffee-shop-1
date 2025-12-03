import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Blog = () => {
  const posts = [
    {
      title: 'Как выбрать портативную кофеварку',
      excerpt: 'Подробное руководство по выбору идеальной мобильной кофеварки для ваших нужд',
      category: 'Гайды',
      date: '15 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/626920f0-20e5-4589-a588-5deef3dd843f/files/2c3911f2-f5d3-47a9-99d5-b6956de07b5e.jpg'
    },
    {
      title: 'Лучшие места для кофе на природе',
      excerpt: 'Топ-10 локаций для любителей кофе и путешествий',
      category: 'Путешествия',
      date: '10 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/626920f0-20e5-4589-a588-5deef3dd843f/files/5f05fb4a-9103-43f0-8793-4861e9c1f6fe.jpg'
    },
    {
      title: 'Экологичное производство кофеварок',
      excerpt: 'Как мы заботимся о планете при создании наших продуктов',
      category: 'Экология',
      date: '5 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/626920f0-20e5-4589-a588-5deef3dd843f/files/4dc61dde-788b-464e-826b-b948f24774d8.jpg'
    }
  ]

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные статьи о кофе, путешествиях и устойчивом образе жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary">
                    {post.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-3">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
