const Modal = ({ children }) => {
    return (
        <section className="modal">
            <section className="modal__window">
                {children}
            </section>
        </section>
    )
}

export default Modal