import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductCatalog, { Product } from '@/components/ProductCatalog'
import CompareProducts from '@/components/CompareProducts'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Delivery from '@/components/Delivery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { CartItem } from '@/components/Cart'
import { useToast } from '@/hooks/use-toast'

const Index = () => {
  const { toast } = useToast()
  const [compareProducts, setCompareProducts] = useState<number[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const toggleCompare = (productId: number) => {
    setCompareProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    )
  }

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      
      if (existingItem) {
        toast({
          title: "Товар добавлен",
          description: `${product.name} — количество увеличено`,
        })
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      toast({
        title: "Товар добавлен в корзину",
        description: product.name,
      })
      
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      }]
    })
  }

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeCartItem(id)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeCartItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div className="min-h-screen">
      <Header 
        compareCount={compareProducts.length}
        cartItems={cartItems}
        onUpdateCartQuantity={updateCartQuantity}
        onRemoveCartItem={removeCartItem}
        onClearCart={clearCart}
      />
      <Hero />
      <ProductCatalog 
        compareProducts={compareProducts}
        onToggleCompare={toggleCompare}
        onAddToCart={addToCart}
      />
      {compareProducts.length > 0 && (
        <CompareProducts 
          productIds={compareProducts}
          onClearCompare={() => setCompareProducts([])}
        />
      )}
      <About />
      <Blog />
      <Reviews />
      <FAQ />
      <Delivery />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index