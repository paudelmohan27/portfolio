import { useState } from 'react'
import { contact, profile } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { SectionLabel, isPlaceholder } from './ui.jsx'

const field =
  'h-12 rounded-xl border border-[#DADDE8] bg-[#F7F8FC] px-3.5 text-base text-[#0E1116] outline-none transition focus:border-[#3451F5] focus:ring-4 focus:ring-[#3451F5]/15'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const hasEmail = !isPlaceholder(profile.email)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No backend needed: opens the visitor's mail app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    if (!hasEmail) return
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 pt-24 sm:px-6 sm:pt-32">
      <Reveal className="mx-auto flex max-w-[1240px] flex-col gap-12 rounded-[36px] bg-gradient-to-br from-[#3451F5] to-[#6F86FF] p-8 text-white sm:p-12 lg:flex-row lg:p-[72px] dark:from-[#2B3FD0] dark:to-[#1A2A80]">
        <div className="min-w-0 lg:flex-1">
          <SectionLabel light>Contact</SectionLabel>
          <h2 className="mt-4 text-[40px] leading-none font-semibold tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-[440px] text-lg leading-relaxed text-white/85">{contact.body}</p>
          <a
            href={hasEmail ? `mailto:${profile.email}` : '#contact'}
            className="mt-8 inline-flex h-[52px] items-center rounded-full bg-white px-6 text-base font-medium text-[#0E1116]"
          >
            {profile.email}
          </a>
        </div>

        <form onSubmit={submit} className="flex min-w-0 flex-col gap-4 rounded-3xl bg-white p-7 text-[#0E1116] lg:flex-1">
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Name
            <input required type="text" autoComplete="name" value={form.name} onChange={update('name')} className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Email
            <input required type="email" autoComplete="email" value={form.email} onChange={update('email')} className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Message
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={update('message')}
              className={`${field} h-auto resize-y py-3`}
            />
          </label>
          <button
            type="submit"
            disabled={!hasEmail}
            className="h-[52px] cursor-pointer rounded-full bg-[#0E1116] text-base font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send message
          </button>
          {!hasEmail && (
            <p className="text-center text-xs text-[#565C6B]">Add your email in src/data/content.js to enable this form.</p>
          )}
        </form>
      </Reveal>
    </section>
  )
}
