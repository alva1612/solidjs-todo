import { IEvent } from "../../../shared/interfaces/events.interface"

import style from './list-item.module.css'

interface ListItemProp {
    event: IEvent
}

function ListItem(props: ListItemProp) {
    const { 
        description, day, 
        dayOfWeek, month, 
        year, title 
    } = props.event

    return (
        <div class={style.ListItem}>
            <h1>{ title }</h1>
        </div>
        
    )
}

export default ListItem