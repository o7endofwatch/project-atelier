import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const { useState, useEffect } = React;
import { SortContainer } from './styles/Container';

const SortWords = styled.span`
  font-size: 18px;
`

const SortFilter = styled.select`
  width: 120px;
  height: 30px;
  border: 1px solid #999;
  font-size: 18px;
  color: #1c87c9;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 4px 4px #ccc;
`

const Sort = ({ currentProduct, setReviews, reviews, request, filter, setFilter, setShownFilter, sort, setSort, sortValues }) => {

  const handleChange = (e) => {
    setSort(e.target.value);

    request(`/reviews/?product_id=${currentProduct.id}&sort=${e.target.value}&count=10000`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        if (filter.length === 0) {
          setReviews(results.results);
        } else {
          console.log(results.results);
          let reviewsCopy = [];
          let filteredCopy = [];
          for (let review of results.results) {
            reviewsCopy.push(review);
          }

          filteredCopy = reviewsCopy.filter(review => {
            if (filter.includes(review.rating)) {
              return review;
            }
          });

          setReviews(filteredCopy);

        }
      }
    });

  }

  return (
    <SortContainer>
      <SortWords>
        <strong>{reviews.length} reviews, sorted by </strong>
      </SortWords>
      <span>
        &nbsp;
        <select id={sort} className='dropdown' onChange={handleChange} >
          {sortValues.map(sortValue => {
            return (
              <option key={sortValue.value} value={sortValue.value}>
                {sortValue.text}
              </option>
            )
          })}
        </select>
      </span>
    </SortContainer>
  );
};

export default Sort;