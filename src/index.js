import Ajv from 'ajv';

function check(condition, message) {
  if (!condition) {
    throw new Error('\n' + '           '+  message);
  }
}

export function initContractPlugin(chai){
  var _ajv = new Ajv();

  chai.util.addMethod(chai.Assertion.prototype, 'matchSchema', function (schema) {
    var data = chai.util.flag(this, 'object');
    let validate = _ajv.compile(schema);

    let is_valid = validate(data, schema);
    // optional. It records specific error messages as checks.
    if (!is_valid) {
      console.error(JSON.stringify(validate.errors));
      validate.errors.forEach(error => {
        check(is_valid, `${error.dataPath} ${error.message}`);
      });
    }
    this.assert(
      is_valid
    , "expected to match API schema"
    , "expected to not not match the API schema"
    , null   // expected
    , null   // actual
    );
  });
}
