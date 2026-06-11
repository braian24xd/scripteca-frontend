const Modal = ({title, children }) => {

    return (
        <section className="modal" id="modal">
            <section className="modal__window">
                <section className="modal__window--header">
                    <h1>{title}</h1>
                </section>
                {children}
            </section>
        </section>
    )
}

export default Modal