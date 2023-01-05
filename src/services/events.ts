import { IEvent } from "../shared/interfaces/events.interface"

export class EventService {
    public get findAll(): IEvent[] {
        const event: IEvent = {
            day: 1,
            dayOfWeek: 'Monday',
            description: 'XD',
            month: 'February',
            year: 2022,
            title: 'Title 1'
        }

        const event1: IEvent = {
            day: 1,
            dayOfWeek: 'Friday',
            description: 'XDD',
            month: 'January',
            year: 2020,
            title: 'Title 2'
        }

        const event2: IEvent = {
            day: 1,
            dayOfWeek: 'Sunday',
            description: 'XDDD',
            month: 'January',
            year: 2021,
            title: 'Title 3'
        }

        return [event, event1, event2]
    }
}