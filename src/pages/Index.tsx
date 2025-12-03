import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductCatalog from '@/components/ProductCatalog'
import CompareProducts from '@/components/CompareProducts'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Delivery from '@/components/Delivery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Index = () => {
  const [compareProducts, setCompareProducts] = useState<number[]>([])

  const toggleCompare = (productId: number) => {
    setCompareProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    )
  }

  return (
    <div className="min-h-screen">
      <Header compareCount={compareProducts.length} />
      <Hero />
      <ProductCatalog 
        compareProducts={compareProducts}
        onToggleCompare={toggleCompare}
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
