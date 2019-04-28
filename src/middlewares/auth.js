export default function auth({ next, router }) {
  const token = localStorage.getItem("token")
  console.log("token", token);
  if (!token) {
    return router.push({ name: 'login' })
  }
  return next()
}