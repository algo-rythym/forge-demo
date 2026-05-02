const USERS_KEY = 'forge_users_v1'
const SESSION_KEY = 'forge_auth_session'

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function registerUser({ email, password, name, handle }) {
  const users = getUsers()
  if (users.some((u) => u.email === email || u.handle === handle)) {
    return { success: false, error: 'Email or handle already taken' }
  }
  const user = {
    id: `u_${Date.now()}`,
    email,
    password, // demo only
    name,
    handle,
    createdAt: Date.now(),
    rsvps: [],
    wishlist: [],
  }
  users.push(user)
  saveUsers(users)
  const session = { userId: user.id, email: user.email, name: user.name, handle: user.handle }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return { success: true, user: session }
}

export function loginUser({ email, password }) {
  const users = getUsers()
  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) return { success: false, error: 'Invalid email or password' }
  const session = { userId: user.id, email: user.email, name: user.name, handle: user.handle }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return { success: true, user: session }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY)
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY))
  } catch {
    return null
  }
}

export function isLoggedIn() {
  return !!getSession()
}

export function addRsvp(eventName) {
  const session = getSession()
  if (!session) return false
  const users = getUsers()
  const user = users.find((u) => u.id === session.userId)
  if (!user) return false
  if (!user.rsvps.includes(eventName)) {
    user.rsvps.push(eventName)
    saveUsers(users)
  }
  return true
}

export function getUserRsvps() {
  const session = getSession()
  if (!session) return []
  const users = getUsers()
  const user = users.find((u) => u.id === session.userId)
  return user ? user.rsvps : []
}

export function toggleWishlist(itemName) {
  const session = getSession()
  if (!session) return null
  const users = getUsers()
  const user = users.find((u) => u.id === session.userId)
  if (!user) return null
  const idx = user.wishlist.indexOf(itemName)
  if (idx >= 0) {
    user.wishlist.splice(idx, 1)
  } else {
    user.wishlist.push(itemName)
  }
  saveUsers(users)
  return user.wishlist
}

export function getWishlist() {
  const session = getSession()
  if (!session) return []
  const users = getUsers()
  const user = users.find((u) => u.id === session.userId)
  return user ? user.wishlist : []
}
