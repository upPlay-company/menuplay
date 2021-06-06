import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 12px;
  background: #fff;
  border-radius: 4px;
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #14bb14;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 9px;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.06, '#14bb14')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;

  }
  img {
    height: 80px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 4px;
    svg {
      color: #7159c1;
      transition: color 0.2s;
    }
    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }
    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    color: #14bb14;
    font-size: 18px;
    margin-left: 5px;
  }
`;