import React, { useState } from 'react'
import { Search, Filter, TrendingUp, TrendingDown, Calendar, Download, User, Activity, Target, BarChart3, LineChart, PieChart } from 'lucide-react'

export default function Progress() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPatient, setSelectedPatient] = useState('all')
  const [selectedTimeRange, setSelectedTimeRange] = useState('30days')
  const [selectedReport, setSelectedReport] = useState('overview')

  const patients = [
    { id: 1, name: 'John Smith', condition: 'Lower Back Pain' },
    { id: 2, name: 'Sarah Johnson', condition: 'Shoulder Injury' },
    { id: 3, name: 'Mike Davis', condition: 'Knee Rehabilitation' },
    { id: 4, name: 'Emma Wilson', condition: 'Ankle Sprain' }
  ]

  const progressData = [
    {
      patientId: 1,
      patientName: 'John Smith',
      date: '2024-03-20',
      painLevel: 4,
      mobility: 6,
      strength: 5,
      notes: 'Showing improvement in mobility exercises',
      exercisesCompleted: 8,
      exercisesPrescribed: 10
    },
    {
      patientId: 2,
      patientName: 'Sarah Johnson',
      date: '2024-03-20',
      painLevel: 2,
      mobility: 8,
      strength: 7,
      notes: 'Excellent progress, ready for advanced exercises',
      exercisesCompleted: 12,
      exercisesPrescribed: 12
    },
    {
      patientId: 3,
      patientName: 'Mike Davis',
      date: '2024-03-19',
      painLevel: 3,
      mobility: 7,
      strength: 6,
      notes: 'Steady improvement in knee stability',
      exercisesCompleted: 9,
      exercisesPrescribed: 10
    }
  ]

  const filteredProgress = progressData.filter(data => {
    const matchesSearch = data.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPatient = selectedPatient === 'all' || data.patientId.toString() === selectedPatient
    return matchesSearch && matchesPatient
  })

  const getProgressColor = (value, type) => {
    if (type === 'pain') {
      if (value <= 2) return 'text-green-600'
      if (value <= 5) return 'text-yellow-600'
      return 'text-red-600'
    } else {
      if (value >= 8) return 'text-green-600'
      if (value >= 5) return 'text-yellow-600'
      return 'text-red-600'
    }
  }

  const getProgressIcon = (current, previous) => {
    if (current > previous) return <TrendingUp className="w-4 h-4 text-green-600" />
    if (current < previous) return <TrendingDown className="w-4 h-4 text-red-600" />
    return <div className="w-4 h-4 bg-gray-300 rounded-full" />
  }

  const overallStats = {
    totalPatients: 124,
    averageRecovery: 78,
    exercisesCompleted: 892,
    improvementRate: 85
  }

  const conditionStats = [
    { condition: 'Lower Back Pain', patients: 45, avgRecovery: 82 },
    { condition: 'Shoulder Injury', patients: 32, avgRecovery: 76 },
    { condition: 'Knee Rehabilitation', patients: 28, avgRecovery: 79 },
    { condition: 'Ankle Sprain', patients: 19, avgRecovery: 85 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
        <button className="btn-primary mt-4 sm:mt-0">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.target.value)}
            className="input"
          >
            <option value="all">All Patients</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
          
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="input"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
          
          <button className="btn-outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'patients', label: 'Patients', icon: User },
          { id: 'exercises', label: 'Exercises', icon: Activity },
          { id: 'conditions', label: 'Conditions', icon: Target }
        ].map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedReport === report.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <report.icon className="w-4 h-4" />
            {report.label}
          </button>
        ))}
      </div>

      {/* Overview Report */}
      {selectedReport === 'overview' && (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-500">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-semibold text-gray-900">{overallStats.totalPatients}</p>
                  <p className="text-sm text-green-600">+12% this month</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-500">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Recovery</p>
                  <p className="text-2xl font-semibold text-gray-900">{overallStats.averageRecovery}%</p>
                  <p className="text-sm text-green-600">+5% improvement</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-purple-500">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Exercises Completed</p>
                  <p className="text-2xl font-semibold text-gray-900">{overallStats.exercisesCompleted}</p>
                  <p className="text-sm text-green-600">+8% this week</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-orange-500">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Improvement Rate</p>
                  <p className="text-2xl font-semibold text-gray-900">{overallStats.improvementRate}%</p>
                  <p className="text-sm text-green-600">+3% this month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Chart Placeholder */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Overall Progress Trend</h3>
              <LineChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <LineChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Progress chart visualization</p>
                <p className="text-sm text-gray-400">Integration with charting library needed</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Patients Report */}
      {selectedReport === 'patients' && (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pain Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mobility
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Strength
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exercise Compliance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProgress.map((progress) => (
                  <tr key={`${progress.patientId}-${progress.date}`} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{progress.patientName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                        {progress.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getProgressColor(progress.painLevel, 'pain')}`}>
                        {progress.painLevel}/10
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getProgressColor(progress.mobility, 'mobility')}`}>
                        {progress.mobility}/10
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getProgressColor(progress.strength, 'strength')}`}>
                        {progress.strength}/10
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(progress.exercisesCompleted / progress.exercisesPrescribed) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {progress.exercisesCompleted}/{progress.exercisesPrescribed}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {progress.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Conditions Report */}
      {selectedReport === 'conditions' && (
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Condition Statistics</h3>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditionStats.map((stat) => (
              <div key={stat.condition} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{stat.condition}</h4>
                  <span className="text-sm text-gray-500">{stat.patients} patients</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${stat.avgRecovery}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{stat.avgRecovery}% avg recovery</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exercises Report */}
      {selectedReport === 'exercises' && (
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Exercise Compliance</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Exercise compliance analytics</p>
              <p className="text-sm text-gray-400">Detailed exercise tracking visualization</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
