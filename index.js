/* function for enterting items */

$(function() {
	$('#js-shopping-list-form').submit(event => {


		const addItem = $('.js-shopping-list-entry').val();

			$('#shopping-list-entry').val('');

			    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

	})
}

	)