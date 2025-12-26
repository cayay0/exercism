// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let total = 0;
    for (let i = 0; i < limes.length; i++) {
      if (total >= wedgesNeeded) {
        return i;
      }
      switch (limes[i]) {
        case 'small':
          total += 6;
          break;
        case 'medium':
          total += 8;
          break;
        case 'large':
          total += 10;
          break;
    };
  } return limes.length;
} 

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    if (total >= timeLeft) {
      return orders.slice(i);
    }
    switch (orders[i]) {
      case 'Pure Strawberry Joy':
      total += 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      total += 1.5;
      break;
    case 'Tropical Island':
      total += 3;
      break;
    case 'All or Nothing':
      total += 5;
      break;
    default:
      total += 2.5; 
    }
  } return []
}
