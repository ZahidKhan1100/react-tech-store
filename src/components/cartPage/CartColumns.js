import React from 'react'

export default function cartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-5">
            <div className="row">
                {/* {single column} */}
                <div className="col-lg-2">
                    <p className="text-uppercase">
                        products
                    </p>
                </div>
                {/* {end of single columns} */}
                {/* {single column} */}
                <div className="col-lg-2">
                    <p className="text-uppercase">
                        name of product
                    </p>
                </div>
                {/* {end of single columns} */}
                {/* {single column} */}
                <div className="col-lg-2">
                    <p className="text-uppercase">
                        price
                    </p>
                </div>
                {/* {end of single columns} */}
                {/* {single column} */}
                <div className="col-lg-2">
                    <p className="text-uppercase">
                        quantity
                    </p>
                </div>
                {/* {end of single columns} */}
                {/* {single column} */}
                <div className="col-lg-2">
                    <p className="text-uppercase">
                        remove
                    </p>
                </div>
                {/* {end of single columns} */}
                {/* {single column} */}
                <div className="col-lg-2">
                    <p className="text-uppercase">
                        totals
                    </p>
                </div>
                {/* {end of single columns} */}
            </div>
            
        </div>
    )
}
