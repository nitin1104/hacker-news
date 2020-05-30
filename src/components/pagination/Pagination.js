import React from 'react';
import './Pagination.scss';

export default function Pagination(props) {
    const prev = () => {
        props.onPaginate(props.currentPage - 1);
    }

    const next = () => {
        props.onPaginate(props.currentPage + 1);
    }

    const page = props.currentPage + 1;

    return (
        <div className="pagination-container">
            <p className="pagination-info">Showing Page {page} of {props.totalPages}</p>
            <div>
                <button className="pagination-cta" onClick={prev} disabled={page === 1}>Prev</button>
                <button className="pagination-cta" onClick={next} disabled={page >= props.totalPages}>Next</button>
            </div>
        </div>
    );
}