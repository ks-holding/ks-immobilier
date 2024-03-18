/**
 * @param{String} value
 * @param{Number} min
 * @param{number} max
 * @return {boolean}
 */
const VerifLength = (target, min, max) => {
  let verified = true;

  if (target != undefined) {
    if (target.length < min) {
      verified = false;
    }
    if (target.length > max) {
      verified = false;
    }
  }
  return verified;
};

export default VerifLength;
