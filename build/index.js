const keys = [
  {
    key: 'A',
    sound: './white_keys/A.mp3'
  },
  {
    key: 'S',
    sound: './white_keys/S.mp3'
  },
  {
    key: 'D',
    sound: './white_keys/D.mp3'
  },
  {
    key: 'F',
    sound: './white_keys/F.mp3'
  },
  {
    key: 'G',
    sound: './white_keys/G.mp3'
  },
  {
    key: 'H',
    sound: './white_keys/H.mp3'
  },
  {
    key: 'J',
    sound: './white_keys/J.mp3'
  },

  {
    key: 'W',
    sound: './black_keys/W.mp3'
  },
  {
    key: 'E',
    sound: './black_keys/E.mp3'
  },
  {
    key: 'T',
    sound: './black_keys/T.mp3'
  },
  {
    key: 'Y',
    sound: './black_keys/Y.mp3'
  },
  {
    key: 'U',
    sound: './black_keys/U.mp3'
  }
]
const $keys = document.querySelectorAll('.key')

document.addEventListener('keydown', function(e) {
  const key = e.key.toUpperCase()
  const audio = new Audio()

  keys.forEach( (k, i) => {
    if (k.key === key) {
      console.log(`The '${key}' key is pressed.`)
      audio.src = k.sound
      $keys[i].classList.add('keyActive')

      setTimeout(() => {
        $keys[i].classList.remove('keyActive')
      }, 300)
    }
  })

  audio.play()
})

