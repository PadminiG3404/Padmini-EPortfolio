'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'
import { skillCategories } from '@/app/skills/skillsData'
import SkillGrid from './SkillGrid'

export default function SkillTabs() {
  const [selectedTab, setSelectedTab] = useState('all')

  const filteredCategories =
    selectedTab === 'all'
      ? skillCategories
      : skillCategories.filter(cat => cat.id === selectedTab)

  return (
    <div className="w-full mt-16">
      <h2 className="text-3xl font-bold text-charcoal mb-4">My Technical Stack</h2>
      <p className="text-muted-foreground max-w-2xl mb-6">
        A well-balanced toolkit built through continuous learning, real-world application, and curiosity-driven exploration.
      </p>

      <Tabs defaultValue="all" onValueChange={setSelectedTab}>
        <TabsList className="mb-4 flex flex-wrap gap-2">
          <TabsTrigger value="all">All</TabsTrigger>
          {skillCategories.map(cat => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.title.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedTab}>
          <SkillGrid categories={filteredCategories} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
