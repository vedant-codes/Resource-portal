"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Search, Grid3X3, List, Download, Star, Eye, FileText, Video, Archive, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"

const resources = [
  {
    id: 1,
    title: "Advanced Calculus Complete Notes",
    description: "Comprehensive notes covering limits, derivatives, integrals, and series with solved examples.",
    subject: "Mathematics",
    semester: "Semester 3",
    faculty: "Dr. Smith",
    type: "PDF",
    size: "2.4 MB",
    downloads: 234,
    rating: 4.8,
    uploadedBy: "Sarah Chen",
    timeAgo: "2 hours ago",
    tags: ["calculus", "mathematics", "derivatives", "integrals"],
  },
  {
    id: 2,
    title: "Physics Lab Manual - Mechanics",
    description: "Complete lab manual with experiments, procedures, and analysis for mechanics course.",
    subject: "Physics",
    semester: "Semester 2",
    faculty: "Prof. Johnson",
    type: "DOCX",
    size: "1.8 MB",
    downloads: 156,
    rating: 4.6,
    uploadedBy: "Mike Johnson",
    timeAgo: "5 hours ago",
    tags: ["physics", "lab", "mechanics", "experiments"],
  },
  {
    id: 3,
    title: "Organic Chemistry Reaction Mechanisms",
    description: "Visual guide to organic chemistry reactions with step-by-step mechanisms.",
    subject: "Chemistry",
    semester: "Semester 4",
    faculty: "Dr. Davis",
    type: "PPT",
    size: "5.2 MB",
    downloads: 89,
    rating: 4.9,
    uploadedBy: "Emma Davis",
    timeAgo: "1 day ago",
    tags: ["chemistry", "organic", "reactions", "mechanisms"],
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    description: "Complete implementation guide with code examples in Python and Java.",
    subject: "Computer Science",
    semester: "Semester 3",
    faculty: "Prof. Wilson",
    type: "PDF",
    size: "3.1 MB",
    downloads: 312,
    rating: 4.7,
    uploadedBy: "Alex Kumar",
    timeAgo: "2 days ago",
    tags: ["programming", "algorithms", "data-structures", "python"],
  },
  {
    id: 5,
    title: "Linear Algebra Video Lectures",
    description: "Complete video series covering matrices, eigenvalues, and vector spaces.",
    subject: "Mathematics",
    semester: "Semester 2",
    faculty: "Dr. Brown",
    type: "MP4",
    size: "1.2 GB",
    downloads: 78,
    rating: 4.5,
    uploadedBy: "Lisa Wang",
    timeAgo: "3 days ago",
    tags: ["mathematics", "linear-algebra", "matrices", "videos"],
  },
  {
    id: 6,
    title: "Biology Lab Images Collection",
    description: "High-resolution microscopy images for cell biology and anatomy studies.",
    subject: "Biology",
    semester: "Semester 1",
    faculty: "Dr. Garcia",
    type: "ZIP",
    size: "45 MB",
    downloads: 67,
    rating: 4.4,
    uploadedBy: "Tom Rodriguez",
    timeAgo: "1 week ago",
    tags: ["biology", "microscopy", "cells", "anatomy"],
  },
]

const subjects = ["All Subjects", "Mathematics", "Physics", "Chemistry", "Computer Science", "Biology"]
const semesters = ["All Semesters", "Semester 1", "Semester 2", "Semester 3", "Semester 4"]
const fileTypes = ["All Types", "PDF", "DOCX", "PPT", "MP4", "ZIP"]

const getFileIcon = (type: string) => {
  switch (type) {
    case "PDF":
    case "DOCX":
      return FileText
    case "PPT":
      return FileText
    case "MP4":
      return Video
    case "ZIP":
      return Archive
    default:
      return FileText
  }
}

export default function ResourcesPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedSemester, setSelectedSemester] = useState("All Semesters")
  const [selectedFileType, setSelectedFileType] = useState("All Types")
  const [userRatings, setUserRatings] = useState<Record<number, number>>({})

  const handleRating = (resourceId: number, rating: number) => {
    setUserRatings((prev) => ({ ...prev, [resourceId]: rating }))
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesSubject = selectedSubject === "All Subjects" || resource.subject === selectedSubject
    const matchesSemester = selectedSemester === "All Semesters" || resource.semester === selectedSemester
    const matchesFileType = selectedFileType === "All Types" || resource.type === selectedFileType

    return matchesSearch && matchesSubject && matchesSemester && matchesFileType
  })

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isCollapsed={isCollapsed} onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />

      <div className={cn("flex-1 transition-all duration-300", isCollapsed ? "lg:ml-16" : "lg:ml-64")}>
        <Header />

        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-serif mb-2">Resources</h1>
            <p className="text-muted-foreground">Discover and download study materials shared by your peers</p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search resources, tags, or descriptions..."
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

              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map((semester) => (
                    <SelectItem key={semester} value={semester}>
                      {semester}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedFileType} onValueChange={setSelectedFileType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select file type" />
                </SelectTrigger>
                <SelectContent>
                  {fileTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>

          {/* Resources Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => {
                const FileIcon = getFileIcon(resource.type)
                const userRating = userRatings[resource.id] || 0
                return (
                  <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileIcon className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {resource.rating}
                        </div>
                      </div>

                      <h3 className="font-semibold mb-2 line-clamp-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{resource.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Badge variant="secondary">{resource.subject}</Badge>
                          <Badge variant="secondary">{resource.semester}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {resource.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-sm text-muted-foreground mr-2">Rate:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRating(resource.id, star)}
                            className="transition-colors hover:scale-110"
                          >
                            <Star
                              className={cn(
                                "h-4 w-4",
                                star <= userRating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300 hover:text-yellow-400",
                              )}
                            />
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {resource.downloads}
                        </div>
                        <span>{resource.size}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{resource.uploadedBy}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredResources.map((resource) => {
                const FileIcon = getFileIcon(resource.type)
                const userRating = userRatings[resource.id] || 0
                return (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <FileIcon className="h-6 w-6 text-primary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg">{resource.title}</h3>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                {resource.rating}
                              </div>
                              <Badge variant="outline">{resource.type}</Badge>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-3">{resource.description}</p>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{resource.subject}</Badge>
                            <Badge variant="secondary">{resource.semester}</Badge>
                            <Badge variant="secondary">{resource.faculty}</Badge>
                            {resource.tags.slice(0, 4).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-1 mb-3">
                            <span className="text-sm text-muted-foreground mr-2">Rate:</span>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => handleRating(resource.id, star)}
                                className="transition-colors hover:scale-110"
                              >
                                <Star
                                  className={cn(
                                    "h-4 w-4",
                                    star <= userRating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300 hover:text-yellow-400",
                                  )}
                                />
                              </button>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Download className="h-4 w-4" />
                                {resource.downloads} downloads
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                {resource.uploadedBy}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {resource.timeAgo}
                              </div>
                              <span>{resource.size}</span>
                            </div>

                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="h-4 w-4 mr-1" />
                                Preview
                              </Button>
                              <Button size="sm">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
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
        </main>
      </div>
    </div>
  )
}
