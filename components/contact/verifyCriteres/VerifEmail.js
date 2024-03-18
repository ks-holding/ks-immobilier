/***
 * @param{String} value
 * @returns{boolean} verified or not
 *
 */

const VerifEmail = target => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const verified = re.test(String(target).toLowerCase());
  return verified;
};
export default VerifEmail;
