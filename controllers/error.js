module.exports.get404Error = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: '404 error',
    path: ''
  });
};