import Swiper, { Pagination, Autoplay, Navigation } from 'swiper'
import JustValidate from 'just-validate'
import Inputmask from '../../../node_modules/inputmask/dist/inputmask.es6.js'

export function isWebp() {
  function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

export const burger = () => {
  if (
    document.querySelector('.header_mobie-top__burger') &&
    window.innerWidth < 992
  ) {
    const openBtn = document.querySelector('.header_mobie-top__burger')
    const menu = document.querySelector('.header_mobie-menu')
    const bg = document.querySelector('.header-bg')
    const body = document.querySelector('body')

    let toggleBurger = () => {
      if (openBtn.classList.contains('_active')) {
        openBtn.classList.remove('_active')
        menu.classList.remove('_active')
        body.classList.remove('_lock')
        bg.classList.remove('_active')
      } else {
        openBtn.classList.add('_active')
        menu.classList.add('_active')
        body.classList.add('_lock')
        bg.classList.add('_active')
      }
    }

    openBtn.addEventListener('click', toggleBurger)
    bg.addEventListener('click', toggleBurger)
  }
}

export const tabs = () => {
  if (document.querySelector('.js-tab-trigger')) {
    let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
      jsContents = document.querySelectorAll('.js-tab-content')
    jsTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        let id = this.getAttribute('data-tab'),
          content = document.querySelector(
            '.js-tab-content[data-tab="' + id + '"]'
          ),
          activeTrigger = document.querySelector('.js-tab-trigger._active'),
          activeContent = document.querySelector('.js-tab-content._active')

        activeTrigger.classList.remove('_active') // 1
        trigger.classList.add('_active') // 2

        activeContent.classList.remove('_active') // 3
        content.classList.add('_active') // 4
      })
    })
  }
}

export const menu = () => {
  if (document.querySelector('.header-bottom') && window.innerWidth > 991) {
    const btns = document.querySelectorAll(`.header-body__menu ul li`)
    const submenuItems = document.querySelectorAll(`.header-bottom`)
    const bg = document.querySelector(`.header-bg`)
    const body = document.querySelector(`body`)
    const content = document.querySelectorAll('.container')

    const toggleSubMenu = (index) => {
      if (index) {
        let div = document.createElement('div')
        div.style.overflowY = 'scroll'
        div.style.width = '50px'
        div.style.height = '50px'
        document.body.append(div)
        let scrollWidth = div.offsetWidth - div.clientWidth

        div.remove()

        if (!submenuItems[index - 1].classList.contains('_active')) {
          btns.forEach((item) => item.classList.remove('_active'))
          submenuItems.forEach((item) => item.classList.remove('_active'))
          btns[index - 1].classList.add('_active')
          submenuItems[index - 1].classList.add('_active')
          body.classList.add('_lock')

          if (window.innerWidth > 991) {
            bg.classList.add('_active')
            content.forEach((item) => {
              item.style.maxWidth = `${1280 + scrollWidth}px`
              item.style.padding = ` 0 ${scrollWidth + 15}px 0 15px`
            })
          }
        } else {
          btns.forEach((item) => item.classList.remove('_active'))
          submenuItems.forEach((item) => item.classList.remove('_active'))
          body.classList.remove('_lock')

          if (window.innerWidth > 991) {
            bg.classList.remove('_active')
            content.forEach((item) => {
              item.style.maxWidth = `1280px`
              item.style.padding = ` 0 15px`
            })
          }
        }
      } else {
        btns.forEach((item) => item.classList.remove('_active'))
        submenuItems.forEach((item) => item.classList.remove('_active'))
        body.classList.remove('_lock')

        if (window.innerWidth > 991) {
          bg.classList.remove('_active')
          content.forEach((item) => {
            item.style.maxWidth = `1280px`
            item.style.padding = ` 0 15px`
          })
        }
      }
    }

    btns.forEach((item) => {
      item.addEventListener('click', () =>
        toggleSubMenu(item.dataset.submenubtn)
      )
    })

    bg.addEventListener('click', () => {
      btns.forEach((item) => item.classList.remove('_active'))
      submenuItems.forEach((item) => item.classList.remove('_active'))
      body.classList.remove('_lock')
      bg.classList.remove('_active')

      content.forEach((item) => {
        item.style.maxWidth = `1280px`
        item.style.padding = ` 0 15px`
      })
    })
  }
}

export const menuSpoiler = () => {
  if (document.querySelector('._menu__dropdown')) {
    const dropdownBtns = document.querySelectorAll('._menu__btn')
    const dropdownItems = document.querySelectorAll('._menu__dropdown')

    const toggleDropdown = (index) => {
      if (index) {
        if (!dropdownItems[index - 1].classList.contains('_active')) {
          dropdownBtns.forEach((item) => item.classList.remove('_active'))
          dropdownItems.forEach((item) => item.classList.remove('_active'))
          dropdownBtns[index - 1].classList.add('_active')
          dropdownItems[index - 1].classList.add('_active')
        } else {
          dropdownBtns.forEach((item) => item.classList.remove('_active'))
          dropdownItems.forEach((item) => item.classList.remove('_active'))
        }
      } else {
        dropdownBtns.forEach((item) => item.classList.remove('_active'))
        dropdownItems.forEach((item) => item.classList.remove('_active'))
      }
    }

    dropdownBtns.forEach((item) =>
      item.addEventListener('click', () =>
        toggleDropdown(item.dataset.spoilerbtn)
      )
    )
  }
}

export const sliderSectionLast = () => {
  const swiperLast = new Swiper('.last-body__item-imgs', {
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.last-body__item-imgs-pagination',
      clickable: true,
    },
  })
}

export const sliderSectionPartners = () => {
  const swiperPartners = new Swiper('.partners-body', {
    modules: [Autoplay, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 60,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        centeredSlides: false,
      },
    },
  })
}

export const blogTextSlice = () => {
  if (document.querySelector('.blog-body__item p')) {
    const texts = document.querySelectorAll('.blog-body__item p')
    const isMobile = window.innerWidth < 767

    texts.forEach((item) => {
      let text = item.innerHTML.trim()

      let str = text.slice(0, isMobile ? 125 : 135)
      let a = str.split(' ')
      a.splice(a.length - 1, 1)
      str = a.join(' ')

      item.innerHTML = `${str}...`
    })
  }
}

export const modalSend = () => {
  if (document.querySelector('._modal-send')) {
    const openBtn = document.querySelectorAll('._modal-send-open-btn')
    const closeBtn = document.querySelector('._modal-send-open-close')
    const modal = document.querySelector('._modal-send')
    const modalBg = document.querySelector('._modal-send__bg')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')

    let toggleModal = (e) => {
      e.preventDefault()

      let div = document.createElement('div')
      div.style.overflowY = 'scroll'
      div.style.width = '50px'
      div.style.height = '50px'
      document.body.append(div)
      let scrollWidth = div.offsetWidth - div.clientWidth

      div.remove()

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active')
        body.classList.remove('_lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1280px`
            item.style.padding = ` 0 15px`
          })
        }
      } else {
        modal.classList.add('_active')
        body.classList.add('_lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1280 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 15}px 0 15px`
          })
        }
      }
    }

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    modalBg.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)
  }
}

export const modalCall = () => {
  if (document.querySelector('._modal-call')) {
    const openBtn = document.querySelectorAll('._modal-call-open-btn')
    const closeBtn = document.querySelector('._modal-call-open-close')
    const modal = document.querySelector('._modal-call')
    const modalBg = document.querySelector('._modal-call__bg')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')

    let toggleModal = (e) => {
      e.preventDefault()

      let div = document.createElement('div')
      div.style.overflowY = 'scroll'
      div.style.width = '50px'
      div.style.height = '50px'
      document.body.append(div)
      let scrollWidth = div.offsetWidth - div.clientWidth

      div.remove()

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active')
        body.classList.remove('_lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1280px`
            item.style.padding = ` 0 15px`
          })
        }
      } else {
        modal.classList.add('_active')
        body.classList.add('_lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1280 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 15}px 0 15px`
          })
        }
      }
    }

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    modalBg.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)
  }
}

export const modalThanks = () => {
  if (document.querySelector('._modal-thanks')) {
    // const openBtn = document.querySelectorAll('._modal-thanks-open-btn')
    const closeBtn = document.querySelector('._modal-thanks-open-close')
    const modal = document.querySelector('._modal-thanks')
    // const modalSend = document.querySelector('._modal-send')
    // const modalCall = document.querySelector('._modal-call')
    const modalBg = document.querySelector('._modal-thanks__bg')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')

    let toggleModal = (e) => {
      e.preventDefault()

      // modalSend.classList.remove('_active')
      // modalCall.classList.remove('_active')

      let div = document.createElement('div')
      div.style.overflowY = 'scroll'
      div.style.width = '50px'
      div.style.height = '50px'
      document.body.append(div)
      let scrollWidth = div.offsetWidth - div.clientWidth

      div.remove()

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active')
        body.classList.remove('_lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1280px`
            item.style.padding = ` 0 15px`
          })
        }
      } else {
        modal.classList.add('_active')
        body.classList.add('_lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1280 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 15}px 0 15px`
          })
        }
      }
    }

    // openBtn.forEach((item) => {
    //   item.addEventListener('click', toggleModal)
    // })
    modalBg.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)
  }
}

export const sliderSectionTeam = () => {
  const sliderFunc = () => {
    if (window.innerWidth < 768) {
      const swiperLast = new Swiper('.team-body', {
        modules: [Navigation],
        autoHeight: true,
        spaceBetween: 50,
        navigation: {
          nextEl: '.team-button-next',
          prevEl: '.team-button-prev',
        },
      })
    }
  }
  sliderFunc()
  // window.addEventListener('resize', sliderFunc)
}

export const maskPhoneNumber = () => {
  if (document.querySelector('._phone-mask')) {
    const selector = document.querySelectorAll('._phone-mask')
    Inputmask({ mask: '+9999999999999' }).mask(selector)
  }
}

export const validateModalSend = () => {
  if (document.querySelector('._modal-send__form')) {
    const validateCallback = new JustValidate('._modal-send__form')
    validateCallback
      .addField('.input-name', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваше имя',
        },
      ])
      .addField('.input-phone', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваш номер телефона',
        },
      ])
      .addField('.input-email', [
        {
          rule: 'required',
          errorMessage: 'Введите ваш email',
        },
        {
          rule: 'email',
          errorMessage: 'Неверный email',
        },
      ])
      .addField('.input-check', [
        {
          rule: 'required',
          errorMessage: ' ',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target)

        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            const content = document.querySelectorAll('.container')
            document.querySelector('._modal-send').classList.remove('_active')
            document.querySelector('._modal-thanks').classList.add('_active')
            setTimeout(() => {
              document
                .querySelector('._modal-thanks')
                .classList.remove('_active')

              document.querySelector('body').classList.remove('_lock')

              if (window.innerWidth > 992) {
                content.forEach((item) => {
                  item.style.maxWidth = `1280px`
                  item.style.padding = ` 0 15px`
                })
              }
            }, 5000)

            if (xhr.status === 200) {
              console.log('Mail send')
            }
          }
        }

        xhr.open('POST', 'mail.php', true)
        xhr.send(formData)

        event.target.reset()
      })
  }
}

export const validateModalCall = () => {
  if (document.querySelector('._modal-call__form')) {
    const validateCallback = new JustValidate('._modal-call__form')
    validateCallback
      .addField('.input-name', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваше имя',
        },
      ])
      .addField('.input-phone', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваш номер телефона',
        },
      ])
      .addField('.input-check', [
        {
          rule: 'required',
          errorMessage: ' ',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target)

        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            const content = document.querySelectorAll('.container')
            document.querySelector('._modal-call').classList.remove('_active')
            document.querySelector('._modal-thanks').classList.add('_active')
            setTimeout(() => {
              document
                .querySelector('._modal-thanks')
                .classList.remove('_active')

              document.querySelector('body').classList.remove('_lock')

              if (window.innerWidth > 992) {
                content.forEach((item) => {
                  item.style.maxWidth = `1280px`
                  item.style.padding = ` 0 15px`
                })
              }
            }, 5000)

            if (xhr.status === 200) {
              console.log('Mail send')
            }
          }
        }

        xhr.open('POST', 'mail.php', true)
        xhr.send(formData)

        event.target.reset()
      })
  }
}

export const validateServiceDetails = () => {
  if (document.querySelector('._service-details__form')) {
    const validateCallback = new JustValidate('._service-details__form')
    validateCallback
      .addField('.input-name', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваше имя',
        },
      ])
      .addField('.input-phone', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваш номер телефона',
        },
      ])
      .addField('.input-email', [
        {
          rule: 'required',
          errorMessage: 'Введите ваш email',
        },
        {
          rule: 'email',
          errorMessage: 'Неверный email',
        },
      ])
      .addField('.input-check', [
        {
          rule: 'required',
          errorMessage: ' ',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target)

        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            const content = document.querySelectorAll('.container')
            document.querySelector('._modal-thanks').classList.add('_active')
            document.querySelector('body').classList.add('_lock')

            let div = document.createElement('div')
            div.style.overflowY = 'scroll'
            div.style.width = '50px'
            div.style.height = '50px'
            document.body.append(div)
            let scrollWidth = div.offsetWidth - div.clientWidth

            div.remove()

            if (window.innerWidth > 992) {
              content.forEach((item) => {
                item.style.maxWidth = `${1280 + scrollWidth}px`
                item.style.padding = ` 0 ${scrollWidth + 15}px 0 15px`
              })
            }

            setTimeout(() => {
              document
                .querySelector('._modal-thanks')
                .classList.remove('_active')

              document.querySelector('body').classList.remove('_lock')

              if (window.innerWidth > 992) {
                content.forEach((item) => {
                  item.style.maxWidth = `1280px`
                  item.style.padding = ` 0 15px`
                })
              }
            }, 5000)

            if (xhr.status === 200) {
              console.log('Mail send')
            }
          }
        }

        xhr.open('POST', 'mail.php', true)
        xhr.send(formData)

        event.target.reset()
      })
  }
}

export const validateContacts = () => {
  if (document.querySelector('.contacts__form')) {
    const validateCallback = new JustValidate('.contacts__form')
    validateCallback
      .addField('.input-name', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваше имя',
        },
      ])
      .addField('.input-email', [
        {
          rule: 'required',
          errorMessage: 'Введите ваш email',
        },
        {
          rule: 'email',
          errorMessage: 'Неверный email',
        },
      ])
      .addField('.input-check', [
        {
          rule: 'required',
          errorMessage: ' ',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target)

        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            const content = document.querySelectorAll('.container')
            document.querySelector('._modal-thanks').classList.add('_active')
            document.querySelector('body').classList.add('_lock')

            let div = document.createElement('div')
            div.style.overflowY = 'scroll'
            div.style.width = '50px'
            div.style.height = '50px'
            document.body.append(div)
            let scrollWidth = div.offsetWidth - div.clientWidth

            div.remove()

            if (window.innerWidth > 992) {
              content.forEach((item) => {
                item.style.maxWidth = `${1280 + scrollWidth}px`
                item.style.padding = ` 0 ${scrollWidth + 15}px 0 15px`
              })
            }

            setTimeout(() => {
              document
                .querySelector('._modal-thanks')
                .classList.remove('_active')

              document.querySelector('body').classList.remove('_lock')

              if (window.innerWidth > 992) {
                content.forEach((item) => {
                  item.style.maxWidth = `1280px`
                  item.style.padding = ` 0 15px`
                })
              }
            }, 5000)

            if (xhr.status === 200) {
              console.log('Mail send')
            }
          }
        }

        xhr.open('POST', 'mail.php', true)
        xhr.send(formData)

        event.target.reset()
      })
  }
}
