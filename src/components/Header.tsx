import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Cart, { CartItem } from './Cart'

interface HeaderProps {
  compareCount: number
  cartItems: CartItem[]
  onUpdateCartQuantity: (id: number, quantity: number) => void
  onRemoveCartItem: (id: number) => void
  onClearCart: () => void
}

const Header = ({ compareCount, cartItems, onUpdateCartQuantity, onRemoveCartItem, onClearCart }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'Каталог', id: 'catalog' },
    { label: 'О компании', id: 'about' },
    { label: 'Блог', id: 'blog' },
    { label: 'Отзывы', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Доставка', id: 'delivery' },
    { label: 'Контакты', id: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="text-2xl">☕</div>
          <span className="text-2xl font-bold tracking-tight">EcoBrevo</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {compareCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('compare')}
              className="hidden md:flex"
            >
              <Icon name="Scale" size={16} className="mr-2" />
              Сравнить ({compareCount})
            </Button>
          )}

          <Cart 
            items={cartItems}
            onUpdateQuantity={onUpdateCartQuantity}
            onRemoveItem={onRemoveCartItem}
            onClearCart={onClearCart}
          />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-medium transition-colors hover:text-accent"
                  >
                    {item.label}
                  </button>
                ))}
                {compareCount > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('compare')}
                    className="mt-4"
                  >
                    <Icon name="Scale" size={16} className="mr-2" />
                    Сравнить ({compareCount})
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header