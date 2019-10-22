const defaultOptions = {
  leaderboardFrameInterval: 30000,
}

const domains = {
  'linkedup.sfbw.io': {
    chainEndpoint: 'https://chain.linkedup.sfbw.io',
    keyEndpoint: 'https://keyservice.linkedup.sfbw.io',
    contentEndpoint: 'https://linkedup-user-content.s3.us-west-2.amazonaws.com',
  },
  localhost: {
    chainEndpoint: '',
    keyEndpoint: '',
    contentEndpoint: '/linkedup-user-content',
  },
}

const domainOptions = domains[document.location.hostname] || {}

export default {
  ...defaultOptions,
  ...domainOptions,
}
