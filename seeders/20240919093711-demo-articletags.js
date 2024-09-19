'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up (queryInterface, Sequelize) {
    return Promise.all([
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 20,
      tagId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 20,
      tagId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 20,
      tagId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 18,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 18,
      tagId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 18,
      tagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 19,
      tagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 19,
      tagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 19,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
  ])
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
