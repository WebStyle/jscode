/**
 * JavaScript shablonlarni chaqirish.
 * Function vs Method.
 */

/**
 * Model
 */
var model = (function() {

  /**
   * Function
   */
	var funcPrivate = function() {
    return 'this is private function';
	};

  /**
   * Method
   */
	return {
		summa: function(a, b) {
			return a + b
		}
	}
})();

/**
 * with context
 */
var arr = [4,5];
var add = function (a, b) {
  console.log(this.summa(20,2));
  return a + b;
}

var summ = add.apply( model, arr )
console.log(summ);
