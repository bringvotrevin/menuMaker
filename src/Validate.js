const { ERROR, COACH } = require('./Constants');

const validateNumberOfCoach = (number) => {
  if (number < COACH.MIN || number > COACH.MAX) {
    throw new Error(ERROR.NUM_OF_COACH);
  }
};

const validateCoache = (coach) => {
  if (coach.length < COACH.NAME_MIN || coach.length > COACH.NAME_MAX) {
    throw new Error(ERROR.COACH_NAME_LENGTH);
  }
};

const validateCoaches = (input) => {
  const coaches = input.split(',');
  validateNumberOfCoach(coaches.length);
  coaches.forEach((coach) => {
    validateCoache(coach);
  });
};

const validateAvoidMenu = (avoidMenu) => {
};

module.exports = {
  validateCoaches,
  validateAvoidMenu,
};
