import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="left_header">
                            <div className="brand_logo">
                                <h2>Expense Tracker</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-end">
                        <h6>User Name</h6>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header