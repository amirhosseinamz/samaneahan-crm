export default function(context) {
  if (localStorage.getItem('adminToken')) {
    return context.redirect('/dashboard');
  }
};
