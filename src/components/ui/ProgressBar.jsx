import '@styles/components/progressBar.scss'

const ProgressBar = () => {


    return (
        <section className="progress-bar">
            <div>
                <section className="progress-bar__indicator">
                </section>
            </div>
            <span className="progress-bar__percent">65%</span>
        </section>
    )
}

export default ProgressBar