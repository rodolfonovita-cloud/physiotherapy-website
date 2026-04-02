import React, { useState } from 'react'
import { Search, Plus, Calendar, Clock, User, Filter, ChevronLeft, ChevronRight, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react'

export default function Appointments() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState('day')
  const [showAddModal, setShowAddModal] = useState(false)

  const appointments = [
    {
      id: 1,
      patientName: 'John Smith',
      date: '2024-03-20',
      time: '09:00 AM',
      duration: '45 min',
      type: 'Initial Consultation',
      status: 'scheduled',
      notes: 'Lower back pain assessment',
      therapist: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      date: '2024-03-20',
      time: '10:30 AM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'scheduled',
      notes: 'Shoulder injury progress review',
      therapist: 'Dr. Mike Davis'
    },
    {
      id: 3,
      patientName: 'Mike Davis',
      date: '2024-03-20',
      time: '02:00 PM',
      duration: '45 min',
      type: 'Exercise Review',
      status: 'completed',
      notes: 'Knee rehabilitation exercises',
      therapist: 'Dr. Emma Wilson'
    },
    {
      id: 4,
      patientName: 'Emma Wilson',
      date: '2024-03-20',
      time: '03:30 PM',
      duration: '30 min',
      type: 'Progress Assessment',
      status: 'scheduled',
      notes: 'Ankle sprain recovery evaluation',
      therapist: 'Dr. Sarah Johnson'
    },
    {
      id: 5,
      patientName: 'Robert Brown',
      date: '2024-03-21',
      time: '11:00 AM',
      duration: '45 min',
      type: 'Initial Consultation',
      status: 'scheduled',
      notes: 'Neck pain assessment',
      therapist: 'Dr. Mike Davis'
    }
  ]

  const filteredAppointments = appointments.filter(appointment =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.therapist.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      case 'no-show': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Initial Consultation': return 'bg-purple-100 text-purple-800'
      case 'Follow-up': return 'bg-blue-100 text-blue-800'
      case 'Exercise Review': return 'bg-green-100 text-green-800'
      case 'Progress Assessment': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const timeSlots = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM'
  ]

  const getAppointmentsForTimeSlot = (timeSlot) => {
    return filteredAppointments.filter(apt => apt.time === timeSlot)
  }

  const navigateDate = (direction) => {
    const newDate = new Date(selectedDate)
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1))
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7))
    } else if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1))
    }
    setSelectedDate(newDate)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Schedule Appointment
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <button className="btn-outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          
          <div className="flex bg-gray-100 rounded-lg p-1">
            {['day', 'week', 'month'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === mode
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateDate('prev')}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h2>
          <p className="text-sm text-gray-500">
            {filteredAppointments.filter(apt => apt.date === '2024-03-20').length} appointments
          </p>
        </div>
        
        <button
          onClick={() => navigateDate('next')}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Calendar View */}
      <div className="card overflow-hidden">
        <div className="grid grid-cols-12">
          {/* Time column */}
          <div className="col-span-2 border-r border-gray-200">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Time</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {timeSlots.map((timeSlot) => (
                <div key={timeSlot} className="p-4 text-sm text-gray-600">
                  {timeSlot}
                </div>
              ))}
            </div>
          </div>
          
          {/* Appointments column */}
          <div className="col-span-10">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Appointments</h3>
            </div>
            <div className="divide-y divide-gray-200 min-h-[600px]">
              {timeSlots.map((timeSlot) => {
                const slotAppointments = getAppointmentsForTimeSlot(timeSlot)
                return (
                  <div key={timeSlot} className="p-4 min-h-[60px]">
                    {slotAppointments.length > 0 ? (
                      <div className="space-y-2">
                        {slotAppointments.map((appointment) => (
                          <div key={appointment.id} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <User className="w-4 h-4 text-gray-400" />
                                  <span className="font-medium text-gray-900">{appointment.patientName}</span>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                                    {appointment.status}
                                  </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <span className="flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {appointment.duration}
                                  </span>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(appointment.type)}`}>
                                    {appointment.type}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{appointment.notes}</p>
                                <p className="text-xs text-gray-400 mt-1">with {appointment.therapist}</p>
                              </div>
                              <div className="flex space-x-1">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                                {appointment.status === 'scheduled' && (
                                  <>
                                    <button className="text-green-600 hover:text-green-900">
                                      <CheckCircle className="w-4 h-4" />
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-900">
                                      <XCircle className="w-4 h-4" />
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 text-sm">
                        No appointments scheduled
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add Appointment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50" onClick={() => setShowAddModal(false)} />
            <div className="relative bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule Appointment</h3>
              <form className="space-y-4">
                <div>
                  <label className="label">Patient</label>
                  <select className="input">
                    <option value="">Select patient</option>
                    <option value="1">John Smith</option>
                    <option value="2">Sarah Johnson</option>
                    <option value="3">Mike Davis</option>
                    <option value="4">Emma Wilson</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Date</label>
                    <input type="date" className="input" />
                  </div>
                  <div>
                    <label className="label">Time</label>
                    <input type="time" className="input" />
                  </div>
                </div>
                
                <div>
                  <label className="label">Duration</label>
                  <select className="input">
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">Type</label>
                  <select className="input">
                    <option value="">Select type</option>
                    <option value="Initial Consultation">Initial Consultation</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Exercise Review">Exercise Review</option>
                    <option value="Progress Assessment">Progress Assessment</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">Therapist</label>
                  <select className="input">
                    <option value="">Select therapist</option>
                    <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                    <option value="Dr. Mike Davis">Dr. Mike Davis</option>
                    <option value="Dr. Emma Wilson">Dr. Emma Wilson</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">Notes</label>
                  <textarea className="input" rows="3" placeholder="Add notes..."></textarea>
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
                    Schedule Appointment
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
