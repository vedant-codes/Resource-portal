"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar" // Assuming you have these
import { Header } from "@/components/header" // Assuming you have these
import { cn } from "@/lib/utils"

// 1. Import your data and new components
import { resources, subjects, semesters, fileTypes, Resource } from "@/app/resources/data"
import { ResourceFilters } from "@/components/resources/ResourceFilters"
import { ResourceGridCard } from "@/components/resources/ResourceGridCard"
import { ResourceListCard } from "@/components/resources/ResourceListCard"
import { ResourcePreviewModal } from "@/components/resources/ResourcePreviewModal"

export default function ResourcesPage() {
  // 2. All state remains here in the parent component
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedSemester, setSelectedSemester] = useState("All Semesters")
  const [selectedFileType, setSelectedFileType] = useState("All Types")
  const [userRatings, setUserRatings] = useState<Record<number, number>>({})
  const [previewResource, setPreviewResource] = useState<Resource | null>(null)

  // 3. All logic remains here
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

  // 4. The JSX is now simple, clean, and just passes props
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

          {/* Filters and Search Component */}
          <ResourceFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            selectedSubject={selectedSubject}
            onSubjectChange={setSelectedSubject}
            selectedSemester={selectedSemester}
            onSemesterChange={setSelectedSemester}
            selectedFileType={selectedFileType}
            onFileTypeChange={setSelectedFileType}
            subjects={subjects}
            semesters={semesters}
            fileTypes={fileTypes}
          />

          {/* Results */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>

          {/* Resources Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceGridCard
                  key={resource.id}
                  resource={resource}
                  userRating={userRatings[resource.id] || 0}
                  onRate={(rating) => handleRating(resource.id, rating)}
                  onPreview={() => setPreviewResource(resource)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredResources.map((resource) => (
                <ResourceListCard
                  key={resource.id}
                  resource={resource}
                  userRating={userRatings[resource.id] || 0}
                  onRate={(rating) => handleRating(resource.id, rating)}
                  onPreview={() => setPreviewResource(resource)}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Preview Modal Component */}
      {previewResource && (
        <ResourcePreviewModal
          resource={previewResource}
          userRating={userRatings[previewResource.id] || 0}
          onRate={(rating) => handleRating(previewResource.id, rating)}
          onClose={() => setPreviewResource(null)}
        />
      )}
    </div>
  )
}