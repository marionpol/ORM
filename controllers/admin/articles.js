const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/orm');

const models = require('../../models')

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(articles => {
        console.log(articles)
        return res.status(200).json({message: "New article has been added"});
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

    const updateArticle = (req, res) => {
    const updatedArticleId = req.params.id;

    models.Article.findByPk(updatedArticleId, updateArticle)

    models.Article.findByPk(updatedArticleId, {
        name: req.body.name,
        slug: req.body.slug,
        image: req.body.image,
        body: req.body.body,
        published: new Date().toISOString().slice(0, 19).replace('T',  
     ' '),
    })

    .then(articles => {
        console.log(articles)
        return res.status(200).json({message: "Article has been updated"});
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

module.exports = {
    createArticle,
    updateArticle
}