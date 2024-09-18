import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Modal = ({ title, show = false, className = '', children, cancel = 'Cancel', handleClosePopUp, footer = false }) => {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [show]);

    if (!show) return null;
    return (
        <div className={`modal ${className}`}>
            <div className="modal-content">
                <header>
                    <div className="row popHead">
                        <div className="w-100">
                            <h1>{title}</h1>
                        </div>
                        <div className="col-3 popHeadCross">
                            <FontAwesomeIcon icon={faXmark} onClick={handleClosePopUp} />
                        </div>
                    </div>
                </header>
                {children}
                {
                    footer ? <footer>
                        <div>
                            <button onClick={handleClosePopUp}>{cancel}</button>
                        </div>
                    </footer> : null
                }
            </div>
        </div>
    );
}

export default Modal;
