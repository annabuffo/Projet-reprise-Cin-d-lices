import { Model } from 'sequelize';
import { sequelize, DataTypes } from './index.js';

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Order, {
                foreignKey: 'userId',
                as: 'orders',
                onDelete: 'CASCADE',
            });
        }

        isAdmin() {
            return this.role === 'admin';
        }
    }

    const user = User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },

        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'user',
        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }

    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        underscored: true,
        timestamps: true,
        created: 'created_at',
        update: 'updated_at'
    });

    return User;
};