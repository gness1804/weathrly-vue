import commonStyles from './CommonStyles';

const styles = {
  getWeatherButton: {
    backgroundColor: commonStyles.button.backgroundColor,
    borderRadius: commonStyles.button.borderRadius,
    border: commonStyles.button.border,
    color: commonStyles.button.color,
    margin: '30px auto',
    padding: commonStyles.button.padding,
  },
  h2: {
    fontStyle: 'italic',
  },
  h3: {
    fontStyle: 'italic',
  },
  logo: {
    margin: '0 auto',
  },
  setCityModeButton: {
    backgroundColor: commonStyles.button.backgroundColor,
    borderRadius: commonStyles.button.borderRadius,
    border: commonStyles.button.border,
    color: commonStyles.button.color,
    marginRight: '20px',
    padding: commonStyles.button.padding,
  },
  setZipModeButton: {
    backgroundColor: commonStyles.button.backgroundColor,
    borderRadius: commonStyles.button.borderRadius,
    border: commonStyles.button.border,
    color: commonStyles.button.color,
    padding: commonStyles.button.padding,
  },
  weatherContainer: {
    border: '2px solid #000000',
    borderRadius: '5px',
    margin: '30px auto',
    maxWidth: '80vw',
  },
};

export default styles;
