import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { Flame, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { usePageAnalytics } from '../hooks/useAnalytics'
import { useToast } from '../context/ToastContext'

export function Login() {
  usePageAnalytics()
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ email: '', password: '', name: '', handle: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    if (mode === 'login') {
      const result = await login({ email: form.email, password: form.password })
      if (result.success) {
        addToast('Welcome back!', 'success')
        navigate('/profile')
      } else {
        setError(result.error)
        setStatus('idle')
      }
    } else {
      if (!form.name.trim() || !form.handle.trim()) {
        setError('Name and handle are required')
        setStatus('idle')
        return
      }
      const result = await register({
        email: form.email,
        password: form.password,
        name: form.name,
        handle: form.handle,
      })
      if (result.success) {
        addToast('Account created successfully!', 'success')
        navigate('/profile')
      } else {
        setError(result.error)
        setStatus('idle')
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>{mode === 'login' ? 'Log In' : 'Sign Up'} — The Forge</title>
      </Helmet>
      <div className="pt-28 pb-16 px-6 min-h-[70vh] flex items-center justify-center">
        <ScrollReveal className="w-full max-w-sm">
          <div className="bg-white border border-forge-200 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-10 h-10 bg-ember-500 rounded-sm flex items-center justify-center mx-auto mb-3">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <h1 className="font-serif text-xl font-semibold text-forge-900">
                {mode === 'login' ? 'Welcome back' : 'Join the Forge'}
              </h1>
              <p className="text-sm text-forge-500 mt-1">
                {mode === 'login'
                  ? 'Log in to your account'
                  : 'Create a free account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-forge-800 mb-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forge-800 mb-1">Handle</label>
                    <input
                      name="handle"
                      type="text"
                      value={form.handle}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
                      required
                    />
                  </div>
                </>
              )}
              <div>
                <label className="block text-sm font-medium text-forge-800 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forge-800 mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-forge-200 text-forge-900 focus:outline-none focus:ring-2 focus:ring-ember-500/40 text-sm"
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">{error}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-medium px-4 py-2.5 rounded transition-colors disabled:opacity-60"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {mode === 'login' ? 'Log In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-forge-500">
              {mode === 'login' ? (
                <>
                  No account?{' '}
                  <button
                    onClick={() => { setMode('register'); setError('') }}
                    className="text-ember-600 hover:text-ember-500 font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => { setMode('login'); setError('') }}
                    className="text-ember-600 hover:text-ember-500 font-medium"
                  >
                    Log in
                  </button>
                </>
              )}
            </div>

            <p className="mt-4 text-xs text-forge-400 text-center">
              Demo system. Passwords are not encrypted.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}
