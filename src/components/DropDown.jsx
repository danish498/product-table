import React, { useState } from 'react';

const DropDown = ({
  toggleSortDropdown,
  isSortOpen,
  handleSortClick,
  selectedSort,
}) => {
  return (
    <div>
      <button
        id='dropdown-button'
        data-dropdown-toggle='dropdown'
        class='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
        type='button'
        onClick={toggleSortDropdown}
      >
        {selectedSort === null ? 'Asc & Dec' : selectedSort}

        <svg
          aria-hidden='true'
          class='w-4 h-4 ml-1'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clip-rule='evenodd'
          ></path>
        </svg>
      </button>
      {isSortOpen && (
        <div
          id='dropdown'
          class='z-10  absolute top-36 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
        >
          <ul
            class='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdown-button'
          >
            <li>
              <button
                type='button'
                class='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => handleSortClick('asc')}
              >
                asc
              </button>
            </li>
            <li>
              <button
                type='button'
                class='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => handleSortClick('desc')}
              >
                desc
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
