
----------------------------------
--Table: users
----------------------------------

CREATE TABLE users (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    date_created TIMESTAMP 
);

----------------------------------
--Table: category
----------------------------------

CREATE TABLE category (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
);

----------------------------------
--Table: recipe
----------------------------------

CREATE TABLE recipe (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    ingredients TEXT,
    instructions TEXT,
    image_url VARCHAR(255),
    temps_preparation INTEGER,
    temps_cuisson INTEGER,
    date_creation TIMESTAMP,

    id_user INTEGER NOT NULL,
    id_category INTEGER NOT NULL,
    id_media INTEGER NOT NULL
);

----------------------------------
--Table: media
----------------------------------

CREATE TABLE media (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    release_date TIMESTAMP
);

----------------------------------
--Table: comments
----------------------------------

CREATE TABLE comments (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    content TEXT NOT NULL,
    date_created TIMESTAMP,

    user_id INTEGER NOT NULL,
    recipe_id INTEGER NOT NULL,
);

--------------------------------------------------------------------
--Table : comments_has_users (association many to many)
--------------------------------------------------------------------

CREATE TABLE public.comment_has_users (
    comment_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    PRIMARY KEY (comments_id, user_id),

    FOREIGN KEY (comment_id),
        REFERENCES comments (id) ON DELETE CASCADE,

    FOREIGN KEY (user_id),
        REFERENCES users (id) ON DELETE CASCADE
);

--------------------------------------------------------------------
--Table : comments_has_recipe (association many to many)
--------------------------------------------------------------------

CREATE TABLE public.comments_has_recipe (
    comment_id INTEGER NOT NULL,
    recipe_id INTEGER NOT NULL,

    PRIMARY KEY (comment_id, recipe_id),

    FOREIGN KEY (comment_id),
        REFERENCES comments (id) ON DELETE CASCADE,
    

    FOREIGN KEY (recipe_id),
        REFERENCES recipe (id) ON DELETE CASCADE
);

--------------------------------------------------------------------
--Table : recipe_has_users (association many to many)
--------------------------------------------------------------------

CREATE TABLE public.recipe_has_users (
    recipe_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    PRIMARY KEY (recipe_id, user_id),

    FOREIGN KEY (recipe_id),
        REFERENCES recipe (id) ON DELETE CASCADE,

    FOREIGN KEY (user_id),
        REFERENCES users (id) ON DELETE CASCADE
);

--------------------------------------------------------------------
--Table : recipe_has_category (association many to many)
--------------------------------------------------------------------

CREATE TABLE public.recipe_has_category (
    recipe_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,

    PRIMARY KEY (recipe_id, category_id),

    FOREIGN KEY (recipe_id),
        REFERENCES recipe (id) ON DELETE CASCADE,

    FOREIGN KEY (category_id),
        REFERENCES category (id) ON DELETE CASCADE
);

--------------------------------------------------------------------
--Table : recipe_has_media (association many to many)
--------------------------------------------------------------------

CREATE TABLE public.recipe_has_media (
    recipe_id INTEGER NOT NULL,
    media_id INTEGER NOT NULL,
   
    PRIMARY KEY (media_id, recipe_id),

    FOREIGN KEY (media_id),
        REFERENCES media (id) ON DELETE CASCADE,
    
    FOREIGN KEY (recipe_id),
        REFERENCES recipe (id) ON DELETE CASCADE 
);


______________________________________________

CREATE TABLE users (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    age INTEGER NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE category (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE media (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    release_date DATE
);

CREATE TABLE recipes (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    image_url VARCHAR(255),
    prep_time INTEGER,
    cook_time INTEGER,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    user_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    media_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    content TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    user_id INTEGER NOT NULL,
    recipe_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);