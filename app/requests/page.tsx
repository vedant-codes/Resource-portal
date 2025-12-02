"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import {
  ArrowUp,
  Clock,
  Plus,
  Search,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import { NewRequestDialog } from "@/components/requests/NewRequestDialog"
import { RequestCommentsDialog } from "@/components/requests/RequestCommentDialog"

interface Request {
  id: string
  title: string
  description: string
  subject: string
  semester: string | null
  courseCode: string | null
  status: string
  priority: string
  tags: string[]
  createdAt: string
  requester: {
    id: string
    name: string | null
    image: string | null
  }
  _count: {
    upvotes: number
    comments: number
    fulfillments: number
  }
  upvotes: Array<{ userId: string }>
}

interface Stats {
  total: number
  fulfilled: number
  inProgress: number
  open: number
  fulfillmentRate: number
}

const subjects = ["All Subjects", "Computer Science", "Mathematics", "Physics", "Chemistry", "Biology", "Engineering"]
const statuses = ["All Status", "open", "in-progress", "fulfilled", "closed"]
const sortOptions = [
  { value: "recent", label: "Most Recent" },
  { value: "upvoted", label: "Most Upvoted" },
  { value: "commented", label: "Most Commented" },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-blue-500/10 text-blue-600 border-blue-200"
    case "in-progress":
      return "bg-yellow-500/10 text-yellow-600 border-yellow-200"
    case "fulfilled":
      return "bg-green-500/10 text-green-600 border-green-200"
    case "closed":
      return "bg-gray-500/10 text-gray-600 border-gray-200"
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-200"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500/10 text-red-600 border-red-200"
    case "medium":
      return "bg-orange-500/10 text-orange-600 border-orange-200"
    case "low":
      return "bg-green-500/10 text-green-600 border-green-200"
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-200"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "fulfilled":
      return CheckCircle
    case "in-progress":
      return AlertCircle
    default:
      return Clock
  }
}

const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`
  const weeks = Math.floor(days / 7)
  if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`
  const months = Math.floor(days / 30)
  return `${months} month${months > 1 ? "s" : ""} ago`
}

export default function RequestsPage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [requests, setRequests] = useState<Request[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedStatus, setSelectedStatus] = useState("All Status")
  const [sortBy, setSortBy] = useState("recent")
  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false)
  const [selectedRequestForComments, setSelectedRequestForComments] = useState<string | null>(null)

  const fetchRequests = async () => {
    try {
      const params = new URLSearchParams()
      if (selectedSubject !== "All Subjects") params.append("subject", selectedSubject)
      if (selectedStatus !== "All Status") params.append("status", selectedStatus)
      if (searchQuery) params.append("search", searchQuery)
      params.append("sortBy", sortBy)

      const response = await fetch(`/api/requests?${params.toString()}`)
      if (!response.ok) throw new Error("Failed to fetch requests")
      const data = await response.json()
      setRequests(data)
    } catch (error) {
      console.error("Error fetching requests:", error)
      toast({
        title: "Error",
        description: "Failed to load requests",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/requests/stats")
      if (!response.ok) throw new Error("Failed to fetch stats")
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  useEffect(() => {
    fetchRequests()
    fetchStats()
  }, [selectedSubject, selectedStatus, searchQuery, sortBy])

  const handleUpvote = async (requestId: string) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to upvote requests",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch(`/api/requests/${requestId}/upvote`, {
        method: "POST",
      })

      if (!response.ok) throw new Error("Failed to toggle upvote")

      // Refresh requests to get updated counts
      fetchRequests()
    } catch (error) {
      console.error("Error toggling upvote:", error)
      toast({
        title: "Error",
        description: "Failed to update upvote",
        variant: "destructive",
      })
    }
  }

  const handleNewRequest = async (data: any) => {
    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to create request")

      toast({
        title: "Success",
        description: "Request created successfully",
      })

      setIsNewRequestOpen(false)
      fetchRequests()
      fetchStats()
    } catch (error) {
      console.error("Error creating request:", error)
      toast({
        title: "Error",
        description: "Failed to create request",
        variant: "destructive",
      })
    }
  }

  const isRequestUpvoted = (request: Request) => {
    if (!session?.user?.id) return false
    return request.upvotes.some((upvote) => upvote.userId === session.user.id)
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 lg:ml-64">
        <Header />

        <main className="p-6 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-serif mb-2">Resource Requests</h1>
              <p className="text-muted-foreground">Request specific resources or help fulfill others' requests</p>
            </div>
            <Button
              className="bg-accent hover:bg-accent/90"
              onClick={() => {
                if (!session) {
                  toast({
                    title: "Authentication required",
                    description: "Please sign in to create requests",
                    variant: "destructive",
                  })
                  return
                }
                setIsNewRequestOpen(true)
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Request
            </Button>
          </div>

          {/* Filters and Search */}
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search requests, descriptions, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">Showing {requests.length} requests</p>
          </div>

          {/* Requests List */}
          <div className="space-y-6">
            {requests.map((request) => {
              const StatusIcon = getStatusIcon(request.status)
              const isUpvoted = isRequestUpvoted(request)

              return (
                <Card key={request.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Upvote Section */}
                      <div className="flex flex-col items-center gap-2">
                        <Button
                          variant={isUpvoted ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleUpvote(request.id)}
                          className={`w-12 h-12 rounded-full ${isUpvoted ? "bg-accent hover:bg-accent/90" : ""}`}
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-semibold">{request._count.upvotes}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 hover:text-primary cursor-pointer">
                              {request.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{request.description}</p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <Badge className={getStatusColor(request.status)}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {request.status}
                            </Badge>
                            <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">{request.subject}</Badge>
                          {request.semester && <Badge variant="secondary">{request.semester}</Badge>}
                          {request.courseCode && <Badge variant="secondary">{request.courseCode}</Badge>}
                          {request.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={request.requester.image || undefined} />
                                <AvatarFallback className="text-xs">
                                  {request.requester.name
                                    ?.split(" ")
                                    .map((n) => n[0])
                                    .join("") || "U"}
                                </AvatarFallback>
                              </Avatar>
                              <span>{request.requester.name || "Anonymous"}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {getTimeAgo(request.createdAt)}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {request._count.comments} comments
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedRequestForComments(request.id)}
                            >
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Comment
                            </Button>
                            {request.status === "open" && session && (
                              <Button size="sm" className="bg-accent hover:bg-accent/90">
                                Help Fulfill
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Stats Cards */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.total}</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Fulfilled</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.fulfilled}</div>
                  <p className="text-xs text-muted-foreground">{stats.fulfillmentRate}% success rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">{stats.inProgress}</div>
                  <p className="text-xs text-muted-foreground">Being worked on</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Open</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{stats.open}</div>
                  <p className="text-xs text-muted-foreground">Need attention</p>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>

      <NewRequestDialog
        open={isNewRequestOpen}
        onOpenChange={setIsNewRequestOpen}
        onSubmit={handleNewRequest}
      />

      {selectedRequestForComments && (
        <RequestCommentsDialog
          requestId={selectedRequestForComments}
          open={!!selectedRequestForComments}
          onOpenChange={(open) => !open && setSelectedRequestForComments(null)}
        />
      )}
    </div>
  )
}