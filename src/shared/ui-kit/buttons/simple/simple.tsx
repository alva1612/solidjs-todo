import { IButtonOptions } from "../../../interfaces/ui/options.interface";

function SimpleButton(props: IButtonOptions) {
    return (
        <button>
            {props.text}
        </button>
    )
}

export default SimpleButton