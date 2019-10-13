/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus = 'family', knowsProgramming = true, config = { family: 4 }) {
  const middleJS = 800;
  const basicJS = 500;
  let hours = 0;

  if (knowsProgramming) {
    hours = Math.ceil(middleJS / config[focus]);
  } else {
    hours = Math.ceil((basicJS + middleJS) / config[focus]);
  }

  return hours;
};
