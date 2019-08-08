/**
 * @file
 * Accesible megamenu apply script.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.accessibleMegamenu = {
    attach: function (context, settings) {

      $(".megamenu").accessibleMegaMenu({
        /* prefix for generated unique id attributes, which are required
           to indicate aria-owns, aria-controls and aria-labelledby */
        uuidPrefix: "megamenu",

        /* css class used to define the megamenu styling */
        menuClass: "au-link-list",

        /* css class for a top-level navigation item in the megamenu */
        topNavItemClass: "menu-item",

        /* css class for a megamenu panel */
        panelClass: "sub-nav",

        /* css class for a group of items within a megamenu panel */
        panelGroupClass: "sub-nav__group",

        /* css class for the hover state */
        hoverClass: "hover",

        /* css class for the focus state */
        focusClass: "focus",

        /* css class for the open state */
        openClass: "open",

        toggleButtonClass: "megamenu-toggle"

      });

    }
  };

})(jQuery, Drupal);
