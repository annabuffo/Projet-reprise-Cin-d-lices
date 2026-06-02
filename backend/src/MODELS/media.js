import { Model } from 'sequelize';
import { sequelize, DataTypes } from './index.js';

export default (sequelize, DataTypes) => {
    class Media extends Model {
        static associate(models) {

            Media.hasMany(models.Order, {
                foreignKey: 'media_Id',
                as: 'orders',
                onDelete: 'CASCADE'
            });
        }
    }

    Media.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        type: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
        },

        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        sequelize,
        modelName: 'Media',
        tableName: 'media',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Media;
}