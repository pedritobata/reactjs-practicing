import classes from './Button.module.css'

type Props = {
    text: string;
    variant: 'primary' | 'outlined';
}

export default function Button(props: Props) {
    return (
        <button className={`${classes.btn} ${props.variant === 'primary' ? classes.primary : classes.outlined}`} >
            {props.text}
        </button>
    )
}
