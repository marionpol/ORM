const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/orm');

const models = require('../models')


const getAllArticles = (req, res) =>{
    models.Article.findAll({
     
    })
    .then(articles => {
        return res.status(200).render('index', {articles});
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
    
}

const getArticleBySlug = (req, res) =>{
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        include : [{
            model: models.Author
        },
        {
            model: models.Tags,
            through: {
                model: models.ArticleTags
            }
        }
    ]
    })
    .then(article => {
        
        return res.status(200).render('article', {article});
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
    
}

module.exports = {
    getAllArticles,
    getArticleBySlug
};