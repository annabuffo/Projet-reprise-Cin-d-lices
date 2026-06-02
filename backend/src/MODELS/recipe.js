import { Model } from 'sequelize';
import { sequelize, DataTypes } from './index.js';

export default (sequelize, DataTypes) => {
    class Recipe extends Model {
        static associate(models) {

            Recipe.belongTo(models.User, {
                foreignKey: 'user_Id',
                as: 'author',
                onDelete: 'SET NULL',
            });

            Recipe.belongTo(models.Category, {
                foreignKey: 'category_Id',
                as: 'category',
                onDelete: 'SET NULL',
            });

            Recipe.belongTo(models.Media, {
                foreignKey: 'media_Id',
                as: 'media',
                onDelete: 'SET NULL',
            });
        }


        getTotalTime() {
            return (this.prep_time || 0) + (this.cook_time || 0);
        }
    }

    const recipe = Recipe.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: tru
        },

        ingredients: {
            type: DataTypes.TEXT,
        },

        instructions: {
            type: DataTypes.TEXT,
        },

        image_url: {
            type: DataTypes.STRING(255),
        },

        prep_time: {
            type: DataTypes.INTEGER,
        },

        cook_time: {
            type: DataTypes.INTEGER,
        },

        date_created: {
            type: DataTypes.DATE,
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

    return Recipe;
}