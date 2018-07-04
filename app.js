var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('movie started on port ' + port);

// index page
app.get('/', function (req, res) {
  res.render('index', {
    title: 'imooc 首页',
    movies:[
      {
        title: '侏罗纪世界2',
        _id: 1,
        poster: 'https://dummyimage.com/100x100/79f29a'
      },
      {
        title: '侏罗纪世界2',
        _id: 2,
        poster: 'https://dummyimage.com/100x100/79e6f2'
      },
      {
        title: '侏罗纪世界2',
        _id: 3,
        poster: 'https://dummyimage.com/100x100/f2a779'
      },
      {
        title: '侏罗纪世界2',
        _id: 4,
        poster: 'https://dummyimage.com/100x100/8bf279'
      },
      {
        title: '侏罗纪世界2',
        _id: 5,
        poster: 'https://dummyimage.com/100x100/f279b2'
      },
      {
        title: '侏罗纪世界2',
        _id: 6,
        poster: 'https://dummyimage.com/100x100/f2e379'
      },
    ]
  })
})
// detail page
app.get('/movie/:id', function (req, res) {
  res.render('detail', {
    title: 'imooc 详情页',
    movie: {
      doctor: '导演',
      country: '美国',
      title: '侏罗纪世界2',
      year: 2018,
      poster: 'https://dummyimage.com/100x100/f2e379',
      language: '英语',
      flash: 'https://pic.ibaotu.com/00/62/97/79k888piC6bM.mp4',
      summary: 'It is a Test.'
    }
  })
})
// admin page
app.get('/admin/movie', function (req, res) {
  res.render('admin', {
    title: 'imooc 后台录入页',
    movie: {
      doctor: '',
      country: '',
      title: '',
      year: '',
      poster: '',
      language: '',
      flash: '',
      summary: '',
    }
  })
})
// list page
app.get('/admin/list', function (req, res) {
  res.render('list', {
    title: 'imooc 列表页',
    movies:[
      {
        _id: 1,
        doctor: '导演',
        country: '美国',
        title: '侏罗纪世界2',
        year: 2018,
        poster: 'https://dummyimage.com/100x100/f2e379',
        language: '英语',
        flash: 'https://pic.ibaotu.com/00/62/97/79k888piC6bM.mp4',
        summary: 'It is a Test.'
      }
    ]
  })
})
