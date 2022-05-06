const Record = require("../database/Record");

const getRecordsForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordsForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
module.exports = { getRecordsForWorkout };