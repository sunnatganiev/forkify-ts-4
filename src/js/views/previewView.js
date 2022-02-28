import View from './View.js';

class PreviewView extends View {
  // _parentElement = document.querySelector('.results');
  // _errorMessage = 'No recipes found for your query! Please try again ;)';
  // _message = '';

  _parentElement = '';

  // _generateMarkup() {
  //   return this._data.map(this._generateMarkupPreview).join('');
  // }

  // _generateMarkupPreview(result) {
  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
      <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
        </div>
      </a>
    </li>
  `;
  }
}

export default new PreviewView();