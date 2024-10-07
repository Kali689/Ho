import { useState, useRef } from 'react'
import { Search, ShoppingBag, Home, Heart, MessageCircle, User, ChevronLeft, Star, Settings, CreditCard, Bell, HelpCircle, LogOut, MapPin, Briefcase, Flag, Camera, Send, Store } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Component() {
  const [currentView, setCurrentView] = useState('home')
  const [cartItems, setCartItems] = useState([])
  const [userInfo, setUserInfo] = useState({ name: '', location: '', country: '' })
  const [comments, setComments] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [newComment, setNewComment] = useState('')
  const commentInputRef = useRef(null)

  const fashionItems = [
    { name: 'Skeleton Every Shirt', price: 352, oldPrice: 420, rating: 5, brand: 'Morninggood', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran_5-10-2024_131216_www.behance.net-LGucnPdm7fi6u5oQb1gxzrlfNOSpAx.jpeg' },
    { name: 'Pigmen Cream Shirt', price: 352, oldPrice: 420, rating: 5, brand: 'Joinplexe', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran_5-10-2024_131216_www.behance.net-LGucnPdm7fi6u5oQb1gxzrlfNOSpAx.jpeg' },
  ]

  const HomeScreen = () => (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-2">
          <Input 
            className="flex-1 rounded-full bg-gray-100" 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button size="icon" className="rounded-full">
            <Search className="w-4 h-4" />
          </Button>
        </div>
        <ShoppingBag className="w-6 h-6 ml-2" onClick={() => setCurrentView('cart')} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Popular Item</h2>
          <button className="text-sm text-blue-600">See all</button>
        </div>
        <div className="bg-orange-100 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Get your special sale up to 50%</h3>
            <p className="text-sm text-gray-600">Enjoy, before it runs out</p>
            <Button className="mt-2" variant="secondary" size="sm">Shop now</Button>
          </div>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran_5-10-2024_131216_www.behance.net-LGucnPdm7fi6u5oQb1gxzrlfNOSpAx.jpeg" alt="Sale item" className="w-24 h-24 object-cover rounded-lg" />
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto py-2">
        {['All', 'Fashion', 'Electronics', 'Shoes', 'Beauty', 'Sports'].map((category) => (
          <Button key={category} variant={category === 'Fashion' ? "secondary" : "ghost"} size="sm" className="rounded-full">
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {fashionItems.map((product, index) => (
          <div key={index} className="space-y-2" onClick={() => setCurrentView('product')}>
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-lg" />
              <Heart className={`absolute top-2 right-2 w-6 h-6 ${index === 0 ? 'text-red-500' : 'text-gray-300'}`} />
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(product.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
              <span className="text-xs text-gray-500">{product.brand}</span>
            </div>
            <div className="text-sm font-semibold">{product.name}</div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 font-bold">${product.price}</span>
              <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const ProductDetail = () => (
    <div className="p-4 space-y-4">
      <Button variant="ghost" size="icon" onClick={() => setCurrentView('home')}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <div className="relative">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran_5-10-2024_13165_www.behance.net-uZkaHSX8hgJEOZtRmxv6QkT4ORLgxk.jpeg" alt="Product" className="w-full aspect-square object-cover rounded-lg" />
        <Heart className="absolute top-4 right-4 w-6 h-6 text-gray-300" />
      </div>
      <div className="flex items-center space-x-2">
        <img src="/placeholder.svg?height=40&width=40" alt="Brand logo" className="w-10 h-10 rounded-full" />
        <span className="font-semibold">Morninggood</span>
        <span className="text-blue-600">✓</span>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Oversized Heritage Taupe T-shirt</h2>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
          ))}
          <span className="text-sm text-gray-500">(121)</span>
        </div>
        <div className="text-blue-600 font-bold text-xl">$332.69</div>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Description</h3>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur. Sapien ac tempus enim id amet sit consectetur. Sapien ac sollicitudin egestas id eget.</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="flex space-x-2">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <Button key={size} variant="outline" size="sm" className="rounded-full">{size}</Button>
          ))}
        </div>
      </div>
      <Button className="w-full rounded-full" onClick={() => {
        setCartItems([...cartItems, { name: 'Oversized Heritage Taupe T-shirt', price: 332.69 }])
        setCurrentView('cart')
      }}>
        Add To Cart
      </Button>
      <div className="space-y-4">
        <h3 className="font-semibold">Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">{comment}</p>
          </div>
        ))}
        <div className="flex space-x-2">
          <Input 
            ref={commentInputRef}
            className="flex-grow rounded-full bg-gray-100" 
            placeholder="Add a comment" 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onFocus={() => {
              setTimeout(() => {
                commentInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }, 100)
            }}
          />
          <Button className="rounded-full" onClick={() => {
            if (newComment.trim()) {
              setComments([...comments, newComment])
              setNewComment('')
            }
          }}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  const CartScreen = () => (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('home')}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <div className="w-6" />
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty</div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 border-b pb-4">
              <img src="/placeholder.svg?height=80&width=80" alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-blue-600">${item.price}</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => {
                const newCartItems = [...cartItems]
                newCartItems.splice(index, 1)
                setCartItems(newCartItems)
              }}>
                Remove
              </Button>
            </div>
          ))}
          <div className="flex justify-between items-center font-semibold">
            <span>Total:</span>
            <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
          </div>
          <Button className="w-full rounded-full">Proceed to Checkout</Button>
        </div>
      )}
    </div>
  )

  const SavedItemsScreen = () => (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-semibold">Saved Items</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: 'Vintage Denim Jacket', price: 89.99, image: '/placeholder.svg?height=200&width=200&text=Denim+Jacket' },
          { name: 'Classic White Sneakers', price: 59.99, image: '/placeholder.svg?height=200&width=200&text=White+Sneakers' },
        ].map((item, index) => (
          <div key={index} className="space-y-2">
            <img src={item.image} alt={item.name} className="w-full aspect-square object-cover rounded-lg" />
            <div className="text-sm font-semibold">{item.name}</div>
            <div className="text-blue-600 font-bold">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const MessagesScreen = () => (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-semibold">Messages</h2>
      <div className="space-y-4">
        {[
          { name: 'Morninggood Support', message: 'Your order has been shipped!', time: '2h ago' },
          { name: 'Joinplexe Team', message: 'New collection available now', time: '1d ago' },
        ].map((chat, index) => (
          <div key={index} className="flex items-center space-x-4 border-b pb-4">
            <img src="/placeholder.svg?height=50&width=50" alt={chat.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-sm text-gray-600">{chat.message}</p>
            </div>
            <span className="text-xs text-gray-500">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  )

  const ProfileScreen = () => (
    <div className="p-4 space-y-6">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg?height=80&width=80&text=JD" alt="Profile" className="w-20 h-20 rounded-full bg-gray-200" />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          <span>New York, USA</span>
        </div>
        <div className="flex items-center space-x-2">
          <Briefcase className="w-5 h-5 text-gray-500" />
          <span>Software Developer</span>
        </div>
        <div className="flex items-center space-x-2">
          <Flag className="w-5 h-5 text-gray-500" />
          <span>United States</span>
        </div>
      </div>
      <div className="space-y-4">
        {[
          { icon: <Settings className="w-6 h-6" />, text: 'Account Settings' },
          { icon: <CreditCard className="w-6 h-6" />, text: 'Payment Methods' },
          { icon: <Bell className="w-6 h-6" />, text: 'Notifications' },
          { icon: <HelpCircle className="w-6 h-6" />, text: 'Help Center' },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full" startIcon={<LogOut className="w-4 h-4" />}>
        Log Out
      </Button>
    </div>
  )

  const SellerScreen = () => (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('home')}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-xl font-semibold">Seller Dashboard</h2>
        <div className="w-6" />
      </div>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Welcome, Seller!</h3>
          <p className="text-sm text-gray-600">Manage your products and orders here.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold">Total Sales</h4>
            <p className="text-2xl font-bold">$10,245</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="font-semibold">Pending Orders</h4>
            <p className="text-2xl font-bold">23</p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Quick Actions</h3>
          <Button className="w-full justify-start" variant="outline">
            <Store className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <ShoppingBag className="w-4 h-4 mr-2" />
            View Orders
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Store Settings
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {currentView === 'home' && <HomeScreen />}
        {currentView === 'product' && <ProductDetail />}
        {currentView === 'cart' && <CartScreen />}
        {currentView === 'saved' && <SavedItemsScreen />}
        {currentView === 'messages' && <MessagesScreen />}
        {currentView === 'profile' && <ProfileScreen />}
        {currentView === 'seller' && <SellerScreen />}
      </div>
      <div className="flex justify-around items-center p-4 border-t">
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('home')}>
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('saved')}>
          <Heart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('messages')}>
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('cart')}>
          <ShoppingBag className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('profile')}>
          <User className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('seller')}>
          <Store className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}