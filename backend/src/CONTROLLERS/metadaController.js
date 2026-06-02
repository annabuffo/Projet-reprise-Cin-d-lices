import db from '../models/index.js';

const {  Category, Comment, Media, Recipe, User } = db;

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllComment = async (req, res) => {
    try {
        const comment = await Comment.findAll();
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllMedia = async (req, res) => {
    try {
        const media = await Media.findAll();
        res.status(200).json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findAll();
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createMedia = async (req, res) => {
    try {
        const { title, type, release_year, tmdb_id, poster_url, image_url } = req.body;

        // Simple validation or duplicate check could go here

        const newMedia = await Media.create({
            title,
            type,
            tmdb_id,
            release_year,
            image_url: image_url || poster_url // Support both field names
        });

        res.status(201).json(newMedia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
