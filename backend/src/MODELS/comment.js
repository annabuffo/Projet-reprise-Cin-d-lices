import { Model } from 'sequelize';
import { sequelize, DataTypes } from './index.js';

export default (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {

            Comment.belongTo(models.User, {
                foreignKey: 'user_Id',
                as: 'author',
                onDelete: 'SET NULL',
            });

            Comment.belongTo(models.recipe, {
                foreignKey: 'recipe_Id',
                as: 'recipe',
                onDelete: 'SET NULL',
            });
        }

        getTotalTime() {
            return (this.prep_time || 0) + (this.cook_time || 0);
        }
    }

    const comment = Comment.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        content: {
            type: DataTypes.TEXT,
        },

        dae_created: {
            type: DataTypes.TIMESTAMP,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Comment',
        tableName: 'comments',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Comment;
};