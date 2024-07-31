self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {}

  const options = {
    body: data.body,
    icon: data.icon,
    vibrate: [200],
    tag: data.tag,
    silent: data.silent || false,
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'Notification', options),
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (self.clients) {
    event.waitUntil(self.clients.openWindow(event.notification.data.url || '/'))
  } else {
    console.error('Clients API is not available.')
  }
})
