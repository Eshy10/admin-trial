import { useState, useEffect } from 'react';

const usePagination = (paginationData, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(paginationData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = paginationData.slice(startIndex, endIndex);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      } else if (event.key === 'ArrowRight') {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, totalPages]);

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return {
    currentPage,
    totalPages,
    onPageChange,
    currentPageData
  };
};

export default usePagination;




// import { useState, useEffect } from 'react';

// const usePagination = (totalPages) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [totalPages]);

//   const onPageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const goToNextPage = () => {
//     onPageChange(currentPage + 1);
//   };

//   const goToPreviousPage = () => {
//     onPageChange(currentPage - 1);
//   };

//   return {
//     currentPage,
//     totalPages,
//     onPageChange,
//     goToNextPage,
//     goToPreviousPage,
//   };
// };

// export default usePagination;
