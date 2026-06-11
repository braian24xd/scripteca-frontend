import clsx from 'clsx'
import '@styles/components/progressBar.scss'

const ProgressBar = ({ value, type, variant, w, h, className }) => {

    const progressBarClasses = clsx(
        'progress-bar',
        type ? `progress-bar--${type}` : 'progress-bar--simple',
        className
    )

    const innerBarClasses = clsx(
        `bg--${variant} box-shadow--${variant}` ?? ''
    )

    return (
        <section className={progressBarClasses} style={{width: w ? w : '100%'}}>
            <div>
                <section className={`progress-bar__inner ${innerBarClasses}`} style={{ width: `${value}%`, height: h ?? '' }}>
                </section>
            </div>
            <span className="progress-bar__value">{value ?? '-'}%</span>
        </section>
    )
}

export default ProgressBar