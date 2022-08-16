// libraries
import styled from 'styled-components';
// components
import { Breakpoint } from '../Grid';

export const TextWysiwyg = styled.div`
  color: #4c4c4c;

  h1 {
    margin: 0 0 20px;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;
    ${Breakpoint.md} {
      font-size: 55px;
    }
  }

  h2 {
    margin: 0 0 20px;
    font-weight: 400;
    ${Breakpoint.md} {
      margin: 0 0 30px;
    }
  }

  p {
    display: block;
    margin: 0 0 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.75;
    opacity: 0.8;
    ${Breakpoint.md} {
      font-size: 18px;
      line-height: 1.67;
    }

    &.little {
      margin: 0 0 20px;
      font-size: 16px;
    }
  }

  span {
    display: block;
    margin: 0 0 10px;
    font-weight: 600;
    font-size: 18px;
    ${Breakpoint.md} {
      margin: 0 0 30px;
      font-size: 20px;
    }
  }

  ol {
    margin: 0 0 30px;
    padding-left: 15px;
    opacity: 0.8;
    ${Breakpoint.md} {
      padding-left: 40px;
    }

    li {
      margin: 0 0 10px;
      font-size: 15px;
    }
  }

  ul {
    margin-bottom: 35px;

    li {
      position: relative;
      display: block;
      margin-bottom: 10px;
      padding-left: 15px;
      color: #4c4c4c;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.47;
      letter-spacing: -0.3px;
      text-align: left;
      opacity: 0.8;

      &::before {
        position: absolute;
        top: 8px;
        left: 0;
        display: block;
        width: 4px;
        height: 4px;
        background-color: #9edc15;
        border-radius: 50%;
        content: '';
      }
    }
  }

  ul.checked > li {
    position: relative;
    display: block;
    margin-bottom: 5px;
    padding-left: 31px;
    color: #4c4c4c;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: -0.4px;
  }

  ul.checked > li::before {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 20px;
    height: 14px;
    background-color: transparent;
    background-image: url('data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2222%22%20height%3D%2214%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19.162%201.118C16.652%203.445%2011%208.674%208.094%2011.164l-5.33-4.372a1.329%201.329%200%200%200-1.011-.151c-.35.085-.61.301-.685.566-.073.265.052.538.328.718L7.44%2012.93c.417.27%201.078.262%201.433-.047%202.65-2.306%209.244-8.186%2011.841-10.62a.784.784%200%200%200%20.136-.945c-.174-.282-.566-.458-.988-.443-.268.01-.52.097-.7.242z%22%20fill%3D%22%239EDC15%22%20stroke%3D%22%239EDC15%22%20stroke-width%3D%221.44%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
    transform: translateY(-50%);
    content: '';
  }

  a {
    font-weight: 500;
  }
`;
