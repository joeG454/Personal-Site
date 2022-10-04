import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

$('.testimonial').on('click', function () {
  const dots = $(this).find('.dots');
  const readMore = $(this).find('.testimonial-readmore');
  const hiddenText = $(this).find('.hidden-text');

  if (hiddenText.hasClass('hidden')) {
      dots.addClass('hidden');
      readMore.html('Read less'); 
      hiddenText.removeClass('hidden');
    } else {
      dots.removeClass('hidden');
      readMore.html('Read more'); 
      hiddenText.addClass('hidden');
    }
});