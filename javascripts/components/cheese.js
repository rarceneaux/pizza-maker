import utilities from '../helpers/utilities.js';

const cheesePrint = () => {
  let domString = '<h1>cheese</h1>';
  utilities.printToDom('cheese-counter',domString);
};




export default {cheesePrint};