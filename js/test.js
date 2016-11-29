window.addEventListener('load', () => {
  try {
    function check() {
      chrome.storage.local.get('url', a => {
        console.log(a)
      })
    }

    function init() {
      check()
      setInterval(check, 1000)
    }
    init()
  } catch ({
    message
  }) {
    alert(message)
  }
})
