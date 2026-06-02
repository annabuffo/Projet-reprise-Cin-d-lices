import { Models } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Order, {
                foreignKer: 'categoryId',
                as: 'orders',
                onDelete: 'CASCADE'
            });
        }
    }

    const category = category.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },

        description: {
            type: DataTypes.TEXT,
        }

    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'categories',
        underscored: true,
        timestamps: true,
        created: 'created_at',
        update: 'update_at'
    });

    return Category;
}