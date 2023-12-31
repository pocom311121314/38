const dc = "dcshopv3"
const assets = [
  "/",
  "/index-mobile.html",
  "/search-mobile.html",
  "/ordertracking-mobile.html",
  "/static/data.js",
  "/static/style-mobile.css",
  

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })