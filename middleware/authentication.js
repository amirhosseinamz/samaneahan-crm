export default function(context) {
  console.log('ddd')
  if (!localStorage.getItem('adminToken')) {
    sessionStorage.setItem('previousRoute', context.route.fullPath);
    return context.redirect("/admin/login");
  }
}
