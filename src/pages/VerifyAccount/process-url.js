const processUrl = () => {
  const currentUrl = new URL(document.location.href)
  const { searchParams } = currentUrl

  const address = searchParams.get('attendee')
  const secret = searchParams.get('secret')

  let profile = searchParams.get('profile')
  profile = JSON.parse(atob(profile))

  const name = `${profile.first_name} ${profile.last_name.charAt(0)}`
  const attributes = [
    {
      label: 'Email',
      value: profile.email,
    },
  ]
  const defaultShare = attributes.map(a => a.label) // turn on all by default

  currentUrl.search = ''
  window.history.replaceState({}, '', currentUrl.toString())

  return { address, secret, profile: { name, attributes, defaultShare } }
}

export default processUrl
