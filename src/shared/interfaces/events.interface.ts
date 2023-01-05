export interface IEvent {
    day: number
    month: 'January' | 'February'
    year: number
    dayOfWeek: 'Monday' | 'Thursday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
    description: string
    title: string
}