/**
 * @file
 * JS for wrapping tables in a div with .table-responsive class.
 */

(function ($) {

  Drupal.behaviors.govcms8_uikit_starter_tableResponsive = {
    attach: function (context, settings) {
      $('table', context).wrap('<div class="table-responsive"></div>');
    }
  };

})(jQuery);
