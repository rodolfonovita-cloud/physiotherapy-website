# Physio Therapy Management System

A comprehensive physiotherapy practice management system built with React, Vite, and Tailwind CSS. This application helps physiotherapy clinics manage patients, exercises, appointments, and track progress efficiently.

## Features

### 🏥 **Patient Management**
- Complete patient profiles with contact information
- Medical history and condition tracking
- Status management (Active/Inactive)
- Search and filter capabilities
- Add, edit, and delete patient records

### 💪 **Exercise Library**
- Comprehensive exercise database
- Categorized by type (Strength, Flexibility, Balance, Cardio, Rehabilitation)
- Difficulty levels (Beginner, Intermediate, Advanced)
- Video demonstration support
- Target muscle groups and equipment requirements
- Exercise prescription management

### 📅 **Appointment Scheduling**
- Calendar-based appointment management
- Multiple view modes (Day, Week, Month)
- Therapist assignment
- Appointment status tracking
- Time slot management
- Quick status updates (Complete, Cancel)

### 📊 **Progress Tracking**
- Patient progress monitoring
- Pain level, mobility, and strength tracking
- Exercise compliance metrics
- Recovery rate analytics
- Condition-based statistics
- Exportable reports

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Clean, professional interface
- Intuitive navigation
- Real-time search and filtering
- Modal-based forms
- Status indicators and progress bars

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Date Handling**: date-fns
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd physiotherapy-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   └── Layout.jsx          # Main application layout
├── pages/
│   ├── Dashboard.jsx       # Dashboard with overview stats
│   ├── Patients.jsx        # Patient management
│   ├── Exercises.jsx       # Exercise library
│   ├── Appointments.jsx    # Appointment scheduling
│   └── Progress.jsx        # Progress tracking
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## Key Features Explained

### Dashboard
- Overview statistics for patients, exercises, appointments, and recovery rates
- Today's appointments at a glance
- Recent patient registrations
- Quick action buttons for common tasks

### Patient Management
- Comprehensive patient database
- Advanced search and filtering
- Contact information and medical conditions
- Appointment history
- Status management

### Exercise Library
- Searchable exercise database
- Category-based organization
- Detailed exercise information including:
  - Difficulty levels
  - Target muscle groups
  - Equipment requirements
  - Duration and repetition guidelines
  - Video demonstration links

### Appointment System
- Visual calendar interface
- Multiple viewing modes
- Drag-and-drop scheduling (future enhancement)
- Therapist assignment
- Status management
- Automated reminders (future enhancement)

### Progress Tracking
- Multi-dimensional progress metrics
- Visual progress indicators
- Compliance tracking
- Condition-based analytics
- Export functionality for reports

## Future Enhancements

- [ ] Backend API integration
- [ ] Database persistence
- [ ] User authentication and authorization
- [ ] Real-time notifications
- [ ] Telehealth integration
- [ ] Mobile app version
- [ ] Advanced analytics dashboard
- [ ] Automated reporting
- [ ] Integration with medical billing systems
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please contact the development team or open an issue in the repository.

---

**Physio Therapy Management System** - Streamlining physiotherapy practice management for better patient care.
