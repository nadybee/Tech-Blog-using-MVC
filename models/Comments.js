const { Model, DataTypes } = require("sequelize")
const Blogs = require("./Blogs")
const User = require("./User")
const sequelize = require("../config/connection")

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    //   references: {
    //       model: User,
    //       key: "username"
    //   }

    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: Blogs,
        key: "id",
      }
    },
},  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comments",
  }

)

module.exports = Comments
