import React from 'react';

function MainContent() {
    return (
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">메인 페이지</h1>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">Primary Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat other cards */}
                </div>
                <div className="row">
                    {/* Chart Components */}
                </div>
            </div>
        </main>
    );
}

export default MainContent;