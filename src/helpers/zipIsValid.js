// @flow

const zipIsValid = (zip: string): boolean => {
  console.log('zip:', zip);
  if (!zip || typeof parseInt(zip, 10) !== 'number' || zip.length !== 5) {
    return false;
  }
  return true;
};

export default zipIsValid;
