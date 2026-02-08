import { Users, GraduationCap, UserCheck, BarChart3, Calendar, FileText, MessageSquare, Home, Settings, Search, Bell } from 'lucide-vue-next';

export const mobileApps = {
    admin: {
        id: 'admin',
        name: 'Admin App',
        label: 'Admin Dashboard',
        icon: Users,
        emoji: '👨‍💼',
        description: 'Complete school management at your fingertips. Monitor everything from student enrollment to financial reports in real-time.',
        headerClass: 'admin-header',
        bgClass: 'admin-bg',
        mockup: {
            headerGradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
            chartGradient: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)',
            barGradient: 'linear-gradient(180deg, #8B5CF6 0%, #A78BFA 100%)',
            lineGradient: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
            lineBorder: '#8B5CF6',
            lineIconGradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
            lineContentGradient: 'linear-gradient(90deg, #DDD6FE 0%, #EDE9FE 100%)'
        },
        stats: [
            { icon: '👥', value: '1,248', name: 'Total Students', class: 'admin-stat' },
            { icon: '👨‍🏫', value: '84', name: 'Teachers', class: 'admin-stat' },
            { icon: '📚', value: '32', name: 'Classes', class: 'admin-stat' },
            { icon: '✓', value: '94%', name: 'Attendance', class: 'admin-stat' }
        ],
        features: [
            'Real-time Dashboard Analytics',
            'Student & Teacher Management',
            'Attendance Monitoring',
            'Financial Reports & Fee Tracking',
            'Academic Performance Analytics',
            'Push Notifications',
            'Multi-user Access Control',
            'Export Reports (PDF/Excel)'
        ],
        activities: [
            { icon: '📝', title: 'New Student Enrolled', time: '2 hours ago', iconClass: 'admin-icon' },
            { icon: '✓', title: 'Attendance Submitted - Class 8A', time: '4 hours ago', iconClass: 'admin-icon' },
            { icon: '💰', title: 'Fee Payment Received', time: '5 hours ago', iconClass: 'admin-icon' }
        ],
        navItems: [
            { icon: Home, label: 'Home', active: true },
            { icon: BarChart3, label: 'Reports', active: false },
            { icon: Users, label: 'Users', active: false },
            { icon: Settings, label: 'Settings', active: false }
        ],
        navClass: 'admin-nav'
    },
    teacher: {
        id: 'teacher',
        name: 'Teacher App',
        label: 'Teacher Portal',
        icon: GraduationCap,
        emoji: '👨‍🏫',
        description: 'Streamline your teaching workflow. Manage classes, track attendance, grade assignments, and communicate with students and parents effortlessly.',
        headerClass: 'teacher-header',
        bgClass: 'teacher-bg',
        mockup: {
            headerGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            boxGradient: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
            boxBorder: '#10B981',
            statGradient: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            activeClassGradient: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)'
        },
        gridItems: [
            { icon: '📚', text: 'Classes', class: 'teacher-box' },
            { icon: '✓', text: 'Attendance', class: 'teacher-box' },
            { icon: '📝', text: 'Assignments', class: 'teacher-box' },
            { icon: '📊', text: 'Results', class: 'teacher-box' }
        ],
        quickActions: [
            { icon: '✓', label: 'Take Attendance', class: 'teacher-action' },
            { icon: '📝', label: 'Grade Assignment', class: 'teacher-action' },
            { icon: '📋', label: 'Class Schedule', class: 'teacher-action' },
            { icon: '💬', label: 'Messages', class: 'teacher-action' }
        ],
        classes: [
            { time: '9:00 - 10:00 AM', name: 'Mathematics - Class 8A', students: '24 Students', status: '✓', statusClass: 'completed', active: false },
            { time: '10:30 - 11:30 AM', name: 'Physics - Class 9B', students: '28 Students', status: '●', statusClass: 'ongoing', active: true },
            { time: '1:00 - 2:00 PM', name: 'Chemistry - Class 10A', students: '22 Students', status: '○', statusClass: 'upcoming', active: false }
        ],
        pendingTasks: [
            'Grade Math Quiz - Class 8A',
            'Submit Monthly Report',
            'Prepare Physics Lab Materials'
        ],
        features: [
            'Digital Attendance System',
            'Assignment Creation & Grading',
            'Class Schedule Management',
            'Student Performance Tracking',
            'Parent Communication',
            'Lesson Planning Tools',
            'Quick Quiz Creation',
            'Resource Library Access'
        ],
        navItems: [
            { icon: Home, label: 'Home', active: true },
            { icon: Calendar, label: 'Schedule', active: false },
            { icon: FileText, label: 'Grades', active: false },
            { icon: MessageSquare, label: 'Messages', active: false }
        ],
        navClass: 'teacher-nav'
    },
    guardian: {
        id: 'guardian',
        name: 'Guardian App',
        label: 'Guardian View',
        icon: UserCheck,
        emoji: '👨‍👩‍👦',
        description: 'Stay connected with your child\'s education journey. Monitor attendance, track academic progress, and communicate with teachers in real-time.',
        headerClass: 'guardian-header',
        bgClass: 'guardian-bg',
        mockup: {
            headerGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            cardGradient: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
            cardBorder: '#F59E0B',
            studentCardGradient: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
            activeTabGradient: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)'
        },
        students: [
            { name: 'John', avatar: '👦', active: true },
            { name: 'Sarah', avatar: '👧', active: false }
        ],
        overview: {
            icon: '📊',
            title: 'Overall Performance',
            score: '85%',
            label: 'Excellent Progress',
            class: 'guardian-card-full'
        },
        schedule: [
            { time: '9:00 AM', subject: 'Mathematics', teacher: 'Mr. Rahman' },
            { time: '10:30 AM', subject: 'Science', teacher: 'Ms. Fatima' },
            { time: '1:00 PM', subject: 'English', teacher: 'Mrs. Khan' }
        ],
        updates: [
            { icon: '✓', title: 'Attendance Marked', time: 'Present - Today 9:05 AM' },
            { icon: '📝', title: 'New Assignment', time: 'Math Homework - Due Friday' }
        ],
        features: [
            'Real-time Attendance Updates',
            'Academic Performance Reports',
            'Daily Schedule & Timetable',
            'Assignment Notifications',
            'Direct Teacher Communication',
            'Fee Payment & History',
            'Event & Announcement Alerts',
            'Multiple Children Management'
        ],
        navItems: [
            { icon: Home, label: 'Home', active: true },
            { icon: Calendar, label: 'Schedule', active: false },
            { icon: BarChart3, label: 'Progress', active: false },
            { icon: MessageSquare, label: 'Messages', active: false }
        ],
        navClass: 'guardian-nav'
    }
};
