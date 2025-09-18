export const animationDelays = {
short: 0.1,
medium: 0.2,
long: 0.3,
} as const

export const animationDurations = {
    fast: '0.3s',
    normal: '0.6s',
    slow: '1s',
} as const

export const easingFunctions = {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const

export const getStaggeredDelay = (index: number, baseDelay: number = 0.1): string => {
    return `${index * baseDelay}s`
}

export const getSkillLevelWidth = (level: string): string => {
    switch (level) {
        case 'Expert':
        return '100%'
        case 'Advanced':
        return '75%'
        case 'Intermediate':
        return '50%'
        case 'Beginner':
        return '25%'
        default:
        return '0%'
}
}

export const getCategoryColor = (category: string) => {
    const colorMap = {
        Frontend: {
        primary: 'text-blue-500',
        bg: 'bg-blue-500/20',
        gradient: 'from-blue-400 to-blue-600',
        },
        Backend: {
        primary: 'text-green-500',
        bg: 'bg-green-500/20',
        gradient: 'from-green-400 to-green-600',
        },
        'AI/ML': {
        primary: 'text-purple-500',
        bg: 'bg-purple-500/20',
        gradient: 'from-purple-400 to-purple-600',
        },
        DevOps: {
        primary: 'text-orange-500',
        bg: 'bg-orange-500/20',
        gradient: 'from-orange-400 to-orange-600',
        },
        Mobile: {
        primary: 'text-pink-500',
        bg: 'bg-pink-500/20',
        gradient: 'from-pink-400 to-pink-600',
        },
} as const

return colorMap[category as keyof typeof colorMap] || colorMap.Frontend
}

export const getStatusColor = (status: string) => {
    switch (status) {
        case 'Completed':
        return 'bg-green-500 text-white'
        case 'In Progress':
        return 'bg-blue-500 text-white'
        case 'Planned':
        return 'bg-gray-500 text-white'
        default:
        return 'bg-gray-500 text-white'
}
}

export const getLevelColor = (level: string) => {
    switch (level) {
        case 'Expert':
        return 'bg-green-500 text-white group-hover:bg-green-400'
        case 'Advanced':
        return 'bg-blue-500 text-white group-hover:bg-blue-400'
        case 'Intermediate':
        return 'bg-yellow-500 text-white group-hover:bg-yellow-400'
        case 'Beginner':
        return 'bg-gray-500 text-white group-hover:bg-gray-400'
        default:
        return 'bg-gray-500 text-white group-hover:bg-gray-400'
}
}