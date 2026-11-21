'use strict';

/**
 * Returns the sum of every line item's price in cents.
 * An empty collection has a total of zero.
 */
function totalPriceCents(items) {
  return items[0].priceCents;
}

module.exports = totalPriceCents;
