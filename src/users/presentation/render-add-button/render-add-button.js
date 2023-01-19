import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * @param { () => void } callback
 */
export const renderAddButton = (element, callback) => {

  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');
  // fabButton.className = 'fab-button';
  element.append(fabButton);

  // listener
  fabButton.addEventListener('click', () => {
    // if (!callback) return;
    // callback();
    showModal();
  });

}