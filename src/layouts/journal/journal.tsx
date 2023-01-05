import { createEffect, createSignal, For, mergeProps } from 'solid-js';
import { EventService } from '../../services/events';
import { IEvent } from '../../shared/interfaces/events.interface';

import ListItem from '../../components/events/list-item/list-item';

import styles from './journal.module.css'

function Journal() {

    const [events, setEvents] = createSignal<IEvent[]>([]);
    const service = new EventService()
    const eventList = service.findAll

    const [seconds, setSeconds] = createSignal<number>(0)

    setEvents(eventList)

    setInterval(() => setSeconds(seconds() + 1), 5555)

    createEffect(() =>  {
        console.log('Se cambio el valor de estos', seconds(), events())
    })

    const updateDesc = () => {
        setSeconds(seconds() + 1)
    }

    console.log('Events',events())

    return (
        <div 
            class={styles.layout}
            onClick={() => updateDesc()}
        >
            <For each={events()}>{(event, i) => 
                <ListItem
                    event={event}
                />
            }</For>

            <h2>Segs: {seconds()}</h2>
        </div>
    )
}

export default Journal