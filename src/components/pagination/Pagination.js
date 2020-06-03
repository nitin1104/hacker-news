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
            <div>
                <button className="pagination-cta" onClick={prev} disabled={page === 1}>Previous</button> |
                <button className="pagination-cta" onClick={next} disabled={page >= props.totalPages}>Next</button>
            </div>
        </div>
    );
}