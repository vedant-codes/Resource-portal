"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import {
  Search,
  Grid3X3,
  List,
  Heart,
  MessageCircle,
  MapPin,
  Clock,
  User,
  DollarSign,
  BookOpen,
  Laptop,
  Beaker,
  Loader2,
} from "lucide-react"

const categories = ["All Categories", "Books", "Electronics", "Lab Equipment", "Stationery", "Other"]
const conditions = ["All Conditions", "New", "Like New", "Excellent", "Good", "Fair"]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Books":
      return BookOpen
    case "Electronics":
      return Laptop
    case "Lab Equipment":
      return Beaker
    default:
      return DollarSign
  }
}

const getPriceRange = (range: string) => {
  switch (range) {
    case "Under $25":
      return { min: 0, max: 25 }
    case "$25-$50":
      return { min: 25, max: 50 }
    case "$50-$100":
      return { min: 50, max: 100 }
    case "$100-$200":
      return { min: 100, max: 200 }
    case "Over $200":
      return { min: 200, max: 999999 }
    default:
      return null
  }
}

const getTimeAgo = (date: string) => {
  const now = new Date()
  const created = new Date(date)
  const diffMs = now.getTime() - created.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 60) return `${diffMins} minutes ago`
  if (diffHours < 24) return `${diffHours} hours ago`
  if (diffDays === 1) return "1 day ago"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 14) return "1 week ago"
  return `${Math.floor(diffDays / 7)} weeks ago`
}

export default function MarketplacePage() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedCondition, setSelectedCondition] = useState("All Conditions")
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices")
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchItems()
  }, [searchQuery, selectedCategory, selectedCondition, selectedPriceRange])

  const fetchItems = async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams()
      if (searchQuery) params.append("search", searchQuery)
      if (selectedCategory !== "All Categories") params.append("category", selectedCategory)
      if (selectedCondition !== "All Conditions") params.append("condition", selectedCondition)

      const priceRange = getPriceRange(selectedPriceRange)
      if (priceRange) {
        params.append("minPrice", priceRange.min.toString())
        params.append("maxPrice", priceRange.max.toString())
      }

      const response = await fetch(`/api/marketplace?${params.toString()}`)
      if (!response.ok) throw new Error("Failed to fetch items")

      const data = await response.json()
      setItems(data)
    } catch (err) {
      setError("Failed to load marketplace items. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = async (itemId: string) => {
    try {
      const response = await fetch(`/api/marketplace/${itemId}/like`, {
        method: "POST",
      })

      if (response.ok) {
        fetchItems()
      }
    } catch (err) {
      console.error("Error liking item:", err)
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isCollapsed={isCollapsed} onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />

      <div className={cn("flex-1 transition-all duration-300", isCollapsed ? "lg:ml-16" : "lg:ml-64")}>
        <Header />

        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-serif mb-2">Marketplace</h1>
            <p className="text-muted-foreground">
              Buy and sell textbooks, calculators, and study materials with fellow students
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search items, descriptions, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Prices">All Prices</SelectItem>
                  <SelectItem value="Under $25">Under $25</SelectItem>
                  <SelectItem value="$25-$50">$25-$50</SelectItem>
                  <SelectItem value="$50-$100">$50-$100</SelectItem>
                  <SelectItem value="$100-$200">$100-$200</SelectItem>
                  <SelectItem value="Over $200">Over $200</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {loading ? "Loading..." : `Showing ${items.length} items`}
            </p>
            <Button>
              <DollarSign className="h-4 w-4 mr-2" />
              Sell Item
            </Button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={fetchItems}>Try Again</Button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && items.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">No items found matching your criteria</p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All Categories")
                setSelectedCondition("All Conditions")
                setSelectedPriceRange("All Prices")
              }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Items Grid/List */}
          {!loading && !error && items.length > 0 && (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => {
                    const CategoryIcon = getCategoryIcon(item.category)
                    return (
                      <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img
                              src={item.images[0] || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary">{item.condition}</Badge>
                            </div>
                            <div className="absolute top-2 left-2">
                              <Badge className="bg-green-600 hover:bg-green-700">${item.price}</Badge>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <CategoryIcon className="h-4 w-4 text-primary" />
                                <Badge variant="outline">{item.category}</Badge>
                              </div>
                              {item.originalPrice && item.originalPrice > item.price && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${item.originalPrice}
                                </span>
                              )}
                            </div>

                            <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                            <div className="flex flex-wrap gap-1 mb-3">
                              {item.tags.slice(0, 3).map((tag: string) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                {item.seller.name || "Anonymous"}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {item.location}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <button 
                                  onClick={() => handleLike(item.id)}
                                  className="flex items-center gap-1 hover:text-red-500 transition-colors"
                                >
                                  <Heart className="h-4 w-4" />
                                  {item._count.likes}
                                </button>
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  {item._count.comments}
                                </div>
                              </div>
                              <Button size="sm">Contact Seller</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const CategoryIcon = getCategoryIcon(item.category)
                    return (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <img
                              src={item.images[0] || "/placeholder.svg"}
                              alt={item.title}
                              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                            />

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-semibold text-lg">{item.title}</h3>
                                  <Badge variant="secondary">{item.condition}</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl font-bold text-green-600">${item.price}</span>
                                  {item.originalPrice && item.originalPrice > item.price && (
                                    <span className="text-lg text-muted-foreground line-through">
                                      ${item.originalPrice}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <p className="text-muted-foreground mb-3">{item.description}</p>

                              <div className="flex flex-wrap gap-2 mb-3">
                                <div className="flex items-center gap-1">
                                  <CategoryIcon className="h-4 w-4 text-primary" />
                                  <Badge variant="outline">{item.category}</Badge>
                                </div>
                                {item.tags.slice(0, 4).map((tag: string) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    {item.seller.name || "Anonymous"}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {item.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {getTimeAgo(item.createdAt)}
                                  </div>
                                  <button 
                                    onClick={() => handleLike(item.id)}
                                    className="flex items-center gap-1 hover:text-red-500 transition-colors"
                                  >
                                    <Heart className="h-4 w-4" />
                                    {item._count.likes}
                                  </button>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="h-4 w-4" />
                                    {item._count.comments}
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  <Button variant="ghost" size="sm" onClick={() => handleLike(item.id)}>
                                    <Heart className="h-4 w-4 mr-1" />
                                    Save
                                  </Button>
                                  <Button size="sm">Contact Seller</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}