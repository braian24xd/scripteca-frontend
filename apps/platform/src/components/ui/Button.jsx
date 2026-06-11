import clsx from 'clsx'
import s from '@styles/components/button.module.scss'

const Button = ({ children, to, type, variant, className, p, ...props }) => {
    
    const classes = clsx(
        type ? s[type] : s['button--single'],
        variant ? s[`button--${variant}`] : s['button--classic'],
        className
    )

    return (
        <button className={classes} {...props} style={{padding: p}}>
            <span>
                {children}
            </span>
        </button>
    )
}

export default Button