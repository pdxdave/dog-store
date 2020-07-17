import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-capitalize py-2">
                        all rights and paw prints reserved &copy; {new Date().getFullYear().toString()}
                    </div>
                </div>
            </div>
        </footer>
    )
}
