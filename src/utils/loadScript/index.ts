interface LoadScriptConfig {
  url: string
  id?: string
  async?: boolean
}

export const loadScript = (
  { url, id, async }: LoadScriptConfig,
  cb?: () => void,
) => {
  const s = document.createElement('script')
  s.src = url
  if (async) {
    s.async = async
  }
  if (id) {
    s.id = id
  }
  if (cb) {
    s.addEventListener('load', cb)
  }
  const { body } = document
  if (body) {
    body.appendChild(s)
  }
}
