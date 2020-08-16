const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const express = require('express');
const server = express();

const nunjucks = require('nunjucks')

nunjucks.configure('source/views', {
    express: server,
    noCache: true,
})

server.use(express.static('public'))
.use(express.urlencoded({ extended: true }))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen('3000')



