import React, { useState, useEffect } from "react";

import {
    PaginationContainer,
    PageNumber,
    LeftArrowIcon,
    RightArrowIcon,
    Ellipses,
} from "./pagination.styles";

const Pagination = ({ currentPage, totalPages, onPageChange, pageSkip = 2 }) => {
    const [skip, setSkip] = useState(pageSkip);

    useEffect(() => {
        const handleResize = () => {
            setSkip(window.innerWidth < 425 ? 0 : window.innerWidth < 760 ? 1 : pageSkip);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const handleLeftClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }

    const handleRightClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    let pageNumbers = []
    let start = 1
    let end = totalPages
    if (totalPages >= 10) {
        start = currentPage - skip
        end = currentPage + skip
        if (start <= 3) {
            start = 1
            end = 2 * skip + 3
        }
        else if (end >= totalPages - 2) {
            end = totalPages
            start = totalPages - 2 * skip - 2
        }
    }

    pageNumbers = Array.from({ length: end - start + 1 }, (_, index) => start + index);

    return (
        <PaginationContainer>
            <LeftArrowIcon
                $active={currentPage !== 1}
                onClick={handleLeftClick}
            />
            {
                (totalPages >= 10 && currentPage > skip + 3) &&
                <>
                    <PageNumber
                        onClick={() => onPageChange(1)}
                        $isactive={currentPage === 1}
                    >
                        1
                    </PageNumber>
                    <Ellipses />
                </>
            }
            {
                pageNumbers.map((pageNumber) => (
                    <PageNumber
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        $isactive={pageNumber === currentPage}
                    >
                        {pageNumber}
                    </PageNumber>
                ))
            }
            {
                (totalPages >= 10 && currentPage < totalPages - skip - 2) &&
                <>
                    <Ellipses />
                    <PageNumber
                        onClick={() => onPageChange(totalPages)}
                        $isactive={currentPage === totalPages}
                    >
                        {totalPages}
                    </PageNumber>
                </>
            }
            <RightArrowIcon
                $active={currentPage !== totalPages}
                onClick={handleRightClick}
            />
        </PaginationContainer>
    );
};

export default Pagination;