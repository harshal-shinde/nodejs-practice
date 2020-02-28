/**
 * fn <Function>
error <RegExp> | <Function>
message <string>
Asserts that the function fn does not throw an error.

Using assert.doesNotThrow() is actually not useful because there is no benefit in catching an error and then rethrowing it. Instead, consider adding a comment next to the specific code path that should not throw and keep error messages as expressive as possible.

When assert.doesNotThrow() is called, it will immediately call the fn function.

If an error is thrown and it is the same type as that specified by the error parameter, then an AssertionError is thrown. If the error is of a different type, or if the error parameter is undefined, the error is propagated back to the caller.

If specified, error can be a Class, RegExp or a validation function. See assert.throws() for more details.

The following, for instance, will throw the TypeError because there is no matching error type in the assertion:
 */

 const assert = require("assert");
 assert.doesNotThrow(() => {
   throw new TypeError("Wrong values passed");
 }, SyntaxError);


 assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  TypeError
);