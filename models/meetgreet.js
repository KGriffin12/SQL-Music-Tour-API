'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  MeetGreet.init(
    {
      meet_greet_id: DataTypes.INTEGER,
      event_id: DataTypes.SMALLINT,
      band_id: DataTypes.SMALLINT,
      meet_start_time: DataTypes.DATE,
      meet_end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'MeetGreet',
    }
  );
  return MeetGreet;
};