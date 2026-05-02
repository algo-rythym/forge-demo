import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { Flame, Loader2, ArrowRight, Shield } from 'lucide-react'
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
          <div className="bg-forge-900/60 border border-forge-800 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-ember-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Flame className="w-6 h-6 text-ember-500" />
              </div>
              <h1 className="font-serif text-xl font-semibold text-forge-100">
                {mode === 'login' ? 'Welcome back' : 'Join the Forge'}
              </h1>
              <p className="text-sm text-forge-400 mt-1">
                {mode === 'login'
                  ? 'Log in to your account'
                  : 'Create a free account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-forge-300 mb-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-600 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500/40 text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forge-300 mb-1">Handle</label>
                    <input
                      name="handle"
                      type="text"
                      value={form.handle}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-600 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500/40 text-sm transition-all"
                      required
                    />
                  </div>
                </>
              )}
              <div>
                <label className="block text-sm font-medium text-forge-300 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-600 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500/40 text-sm transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forge-300 mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-forge-950 border border-forge-800 text-forge-100 placeholder:text-forge-600 focus:outline-none focus:ring-2 focus:ring-ember-500/40 focus:border-ember-500/40 text-sm transition-all"
                  required
                />
              </div>

              {error && <p className="text-sm text-red-500 bg-red-500/10 px-3 py-2 rounded-lg">{error}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full group inline-flex items-center justify-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-medium px-4 py-2.5 rounded-lg transition-all disabled:opacity-60 shadow-lg shadow-ember-600/20"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {mode === 'login' ? 'Log In' : 'Create Account'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-forge-500">
              {mode === 'login' ? (
                <>
                  No account?{' '}
                  <button
                    onClick={() => { setMode('register'); setError('') }}
                    className="text-ember-500 hover:text-ember-400 font-medium transition-colors"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => { setMode('login'); setError('') }}
                    className="text-ember-500 hover:text-ember-400 font-medium transition-colors"
                  >
                    Log in
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-forge-600">
              <Shield className="w-3 h-3" />
              <span>Demo system. Passwords are not encrypted.</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}
