const { Model, DataTypes } = require('sequelize');
const User = require('./User')

const sequelize = require('../config/connection');

class Blogs extends Model { }

    Blogs.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
              },

              blog_title: {
                  type:DataTypes.STRING,
                //   allowNull: false, 

              },
              username: {
                type: DataTypes.STRING,
                allowNull: false,

              },
              user_id: {
                type: DataTypes.INTEGER,
                // references: {
                //   model: User,
                //   key: 'id'
                // }
            },
                date: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },

                content: {
                    type:DataTypes.TEXT,
                    allowNull: false, 

                }
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: "blogs",
          }
    
    )

    

module.exports = Blogs