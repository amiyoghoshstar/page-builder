import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

router.get('/editor', (req, res) => {
  res.render('editor', { title: 'Editor' });
});

// router.all('*', (req, res) => {
//   res.render('404');
// });

export default router;
