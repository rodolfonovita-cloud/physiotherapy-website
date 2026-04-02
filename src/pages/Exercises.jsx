import React, { useState } from 'react'
import { Search, Plus, Filter, Play, Clock, Target, Zap, Edit, Trash2 } from 'lucide-react'

export default function Exercises() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)

  const categories = [
    { id: 'all', name: 'All Exercises' },
    { id: 'strength', name: 'Strength Training' },
    { id: 'flexibility', name: 'Flexibility' },
    { id: 'balance', name: 'Balance' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'rehabilitation', name: 'Rehabilitation' }
  ]

  const exercises = [
    {
      id: 1,
      name: 'Bridge Exercise',
      category: 'strength',
      difficulty: 'Beginner',
      duration: '3 sets x 10 reps',
      targetMuscles: ['Glutes', 'Lower Back'],
      equipment: 'None',
      description: 'Lie on your back with knees bent and lift your hips off the floor.',
      videoUrl: '#'
    },
    {
      id: 2,
      name: 'Shoulder Rolls',
      category: 'flexibility',
      difficulty: 'Beginner',
      duration: '2 sets x 15 reps',
      targetMuscles: ['Shoulders', 'Upper Back'],
      equipment: 'None',
      description: 'Roll your shoulders in circular motions forward and backward.',
      videoUrl: '#'
    },
    {
      id: 3,
      name: 'Single Leg Balance',
      category: 'balance',
      difficulty: 'Intermediate',
      duration: '3 sets x 30 seconds',
      targetMuscles: ['Core', 'Legs'],
      equipment: 'None',
      description: 'Stand on one leg while maintaining balance.',
      videoUrl: '#'
    },
    {
      id: 4,
      name: 'Wall Squats',
      category: 'strength',
      difficulty: 'Beginner',
      duration: '3 sets x 12 reps',
      targetMuscles: ['Quadriceps', 'Glutes'],
      equipment: 'Wall',
      description: 'Lean against wall and perform squat movements.',
      videoUrl: '#'
    },
    {
      id: 5,
      name: 'Hamstring Stretch',
      category: 'flexibility',
      difficulty: 'Beginner',
      duration: '3 sets x 30 seconds',
      targetMuscles: ['Hamstrings'],
      equipment: 'None',
      description: 'Sit and reach forward to stretch hamstrings.',
      videoUrl: '#'
    },
    {
      id: 6,
      name: 'Walking Heel-to-Toe',
      category: 'balance',
      difficulty: 'Intermediate',
      duration: '3 sets x 20 steps',
      targetMuscles: ['Core', 'Legs'],
      equipment: 'None',
      description: 'Walk in straight line placing heel directly in front of toes.',
      videoUrl: '#'
    }
  ]

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.targetMuscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'strength': return <Zap className="w-4 h-4" />
      case 'flexibility': return <Target className="w-4 h-4" />
      case 'balance': return <Clock className="w-4 h-4" />
      default: return <Play className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Exercise Library</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Exercise
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise) => (
          <div key={exercise.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                {getCategoryIcon(exercise.category)}
                <span className="ml-2 text-sm font-medium text-gray-600 capitalize">
                  {exercise.category}
                </span>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{exercise.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{exercise.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                {exercise.duration}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Target className="w-4 h-4 mr-2 text-gray-400" />
                {exercise.targetMuscles.join(', ')}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-4 h-4 mr-2 text-gray-400">🏋️</span>
                Equipment: {exercise.equipment}
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t">
              <button className="btn-primary btn-sm">
                <Play className="w-4 h-4 mr-2" />
                Demo
              </button>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Exercise Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50" onClick={() => setShowAddModal(false)} />
            <div className="relative bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Exercise</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Exercise Name</label>
                    <input type="text" className="input" placeholder="Bridge Exercise" />
                  </div>
                  <div>
                    <label className="label">Category</label>
                    <select className="input">
                      <option value="">Select category</option>
                      {categories.filter(cat => cat.id !== 'all').map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Difficulty</label>
                    <select className="input">
                      <option value="">Select difficulty</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Duration/Reps</label>
                    <input type="text" className="input" placeholder="3 sets x 10 reps" />
                  </div>
                </div>
                
                <div>
                  <label className="label">Target Muscles (comma-separated)</label>
                  <input type="text" className="input" placeholder="Glutes, Lower Back" />
                </div>
                
                <div>
                  <label className="label">Equipment</label>
                  <input type="text" className="input" placeholder="None" />
                </div>
                
                <div>
                  <label className="label">Description</label>
                  <textarea className="input" rows="3" placeholder="Describe the exercise..."></textarea>
                </div>
                
                <div>
                  <label className="label">Video URL (optional)</label>
                  <input type="url" className="input" placeholder="https://example.com/video" />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="btn-outline"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Add Exercise
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
