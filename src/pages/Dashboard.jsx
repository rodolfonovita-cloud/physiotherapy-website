import React from 'react'
import { Users, Activity, Calendar, TrendingUp, Clock, UserPlus } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Patients',
      value: '124',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Exercises',
      value: '48',
      change: '+8%',
      icon: Activity,
      color: 'bg-green-500'
    },
    {
      title: 'Today\'s Appointments',
      value: '8',
      change: '0%',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      title: 'Recovery Rate',
      value: '87%',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ]

  const recentAppointments = [
    { id: 1, patient: 'John Smith', time: '09:00 AM', type: 'Initial Consultation' },
    { id: 2, patient: 'Sarah Johnson', time: '10:30 AM', type: 'Follow-up' },
    { id: 3, patient: 'Mike Davis', time: '02:00 PM', type: 'Exercise Review' },
    { id: 4, patient: 'Emma Wilson', time: '03:30 PM', type: 'Progress Assessment' }
  ]

  const newPatients = [
    { id: 1, name: 'Robert Brown', date: '2024-03-15', condition: 'Lower Back Pain' },
    { id: 2, name: 'Lisa Anderson', date: '2024-03-14', condition: 'Shoulder Injury' },
    { id: 3, name: 'David Martinez', date: '2024-03-13', condition: 'Knee Rehabilitation' }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="card">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Today's Appointments */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{appointment.patient}</p>
                    <p className="text-sm text-gray-500">{appointment.time}</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {appointment.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* New Patients */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">New Patients</h3>
            <UserPlus className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {newPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{patient.name}</p>
                  <p className="text-sm text-gray-500">{patient.date}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {patient.condition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="btn-primary">
            <Users className="w-4 h-4 mr-2" />
            Add Patient
          </button>
          <button className="btn-secondary">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Appointment
          </button>
          <button className="btn-secondary">
            <Activity className="w-4 h-4 mr-2" />
            Create Exercise Plan
          </button>
          <button className="btn-secondary">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Reports
          </button>
        </div>
      </div>
    </div>
  )
}
