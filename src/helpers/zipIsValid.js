// @flow

const zipIsValid = (zip: string): boolean => {
  if (!zip || typeof parseInt(zip, 10) !== 'number' || zip.length !== 5) {
    return false;
  }
  return true;
};

export default zipIsValid;
