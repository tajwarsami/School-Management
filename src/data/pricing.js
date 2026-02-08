export const studentRanges = [
    { label: '0-300', value: '0-300' },
    { label: '301-500', value: '301-500' },
    { label: '501-1000', value: '501-1000' },
    { label: '1001-1500', value: '1001-1500' },
    { label: '1501-2000', value: '1501-2000' },
    { label: '2001-3000', value: '2001-3000' },
    { label: '3001-5000', value: '3001-5000' },
    { label: '5001-8000', value: '5001-8000' }
]

export const plans = [
    {
        name: 'Basic',
        description: 'Perfect for small institutions starting their digital journey',
        oneTimeCharge: 2000,
        selectedRange: '0-300',
        icon: '📚',
        features: [
            'Student Management System',
            'Basic Attendance Tracking',
            'Grade Management',
            'Parent Portal Access',
            'Email Support'
        ],
        prices: {
            monthly: {
                '0-300': 2000,
                '301-500': 3000,
                '501-1000': 5500,
                '1001-1500': 7500,
                '1501-2000': 9000,
                '2001-3000': 12000,
                '3001-5000': 17500,
                '5001-8000': 24000
            },
            yearly: {
                '0-300': 22000,
                '301-500': 33000,
                '501-1000': 60000,
                '1001-1500': 82000,
                '1501-2000': 98000,
                '2001-3000': 130000,
                '3001-5000': 185000,
                '5001-8000': 250000
            }
        }
    },
    {
        name: 'Standard',
        description: 'Ideal for growing schools with expanding needs',
        oneTimeCharge: 3000,
        selectedRange: '0-300',
        icon: '🎓',
        features: [
            'Everything in Basic',
            'Advanced Analytics Dashboard',
            'SMS Notifications',
            'Online Exam Module',
            'Library Management',
            'Priority Support'
        ],
        prices: {
            monthly: {
                '0-300': 2500,
                '301-500': 4000,
                '501-1000': 7500,
                '1001-1500': 10500,
                '1501-2000': 13000,
                '2001-3000': 18000,
                '3001-5000': 27500,
                '5001-8000': 40000
            },
            yearly: {
                '0-300': 27000,
                '301-500': 45000,
                '501-1000': 85000,
                '1001-1500': 115000,
                '1501-2000': 145000,
                '2001-3000': 200000,
                '3001-5000': 310000,
                '5001-8000': 460000
            }
        }
    },
    {
        name: 'Premium',
        recommended: true,
        description: 'Complete solution for modern educational institutions',
        oneTimeCharge: 5000,
        selectedRange: '0-300',
        icon: '👑',
        features: [
            'Everything in Standard',
            'Custom Mobile App',
            'AI-Powered Insights',
            'Video Conferencing',
            'Advanced Security Features',
            'Custom Integrations',
            '24/7 Dedicated Support'
        ],
        prices: {
            monthly: {
                '0-300': 4000,
                '301-500': 6500,
                '501-1000': 12000,
                '1001-1500': 17500,
                '1501-2000': 22000,
                '2001-3000': 32000,
                '3001-5000': 50000,
                '5001-8000': 75000
            },
            yearly: {
                '0-300': 45000,
                '301-500': 70000,
                '501-1000': 135000,
                '1001-1500': 190000,
                '1501-2000': 240000,
                '2001-3000': 360000,
                '3001-5000': 580000,
                '5001-8000': 850000
            }
        }
    },
    {
        name: 'Enterprise',
        custom: true,
        description: 'Tailored solutions for large institutions',
        icon: '🏢',
        features: [
            'Everything from Premium',
            'Unlimited Students',
            'Android & iOS App',
            'Dedicated Support Team',
            'Premium School Website',
            'Deploy Your Own Server',
            'White Label License',
            'Custom Feature Development',
            'Onsite Training & Support'
        ]
    }
]
