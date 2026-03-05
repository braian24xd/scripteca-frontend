import { createContext, useContext, useState } from 'react';
import '@styles/components/accordion.scss'
import { FaAngleRight } from "react-icons/fa";

const AccordionContext = createContext()

const AccordionTrigger = ({ children }) => {

    const { isOpen, toggle } = useContext(AccordionContext)

    return (
        <section className="accordion__trigger" onClick={toggle}>
            <section className="accordion__trigger--caption">
                {children}
            </section>
            <div className={`accordion__trigger--icon ${isOpen ? 'rotate' : ''}`}>
                <FaAngleRight size="1.5em" />
            </div>
        </section>
    )
}

const AccordionContent = ({ children }) => {

    const { isOpen } = useContext(AccordionContext)

    return (
        <section className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}>
                {children}
        </section>
    )
}

const Accordion = ({ children, content }) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <AccordionContext.Provider value={{ isOpen, toggle }}>
            <section className="accordion">
                {children}
            </section>
        </AccordionContext.Provider>
    )
}

Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

export default Accordion