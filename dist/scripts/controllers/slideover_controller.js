import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['container', 'background', 'view']
  static classes = ['hide', 'toBackground', 'fromBackground', 'toView', 'fromView']
  static values = {
    allowClose: Boolean,
    openTimeout: Number,
    closeTimeout: Number,
    currentActive: String,
  }

  initialize() {
    this.currentActiveValue = window.location.hash.replace('#', '')
  }

  connect() {
    if (this.currentActiveValue != '') {
      this.open()
    }
  }

  disconnect() {
    this.close()
  }

  openEvent(event) {
    this.currentActiveValue = event.currentTarget.dataset.index
    this.open()
  }

  open() {
    document.getElementById(this.currentActiveValue).classList.remove(this.hideClass)
    this.containerTarget.classList.remove(this.hideClass)

    requestAnimationFrame(() => {
      this.backgroundTarget.classList.add(this.toBackgroundClass)
      this.viewTarget.classList.add(this.toViewClass)
      setTimeout(() => {
        this.backgroundTarget.classList.remove(this.fromBackgroundClass)
        this.viewTarget.classList.remove(this.fromViewClass)
      }, this.openTimeoutValue)
    })
  }

  close() {
    this.backgroundTarget.classList.remove(this.toBackgroundClass)
    this.backgroundTarget.classList.add(this.fromBackgroundClass)
    this.viewTarget.classList.remove(this.toViewClass)
    this.viewTarget.classList.add(this.fromViewClass)

    requestAnimationFrame(() => {
      setTimeout(() => {
        this.containerTarget.classList.add(this.hideClass)
        document.getElementById(this.currentActiveValue).classList.add(this.hideClass)
        this.currentActiveValue = ''
        this.remove_hash_from_url()
      }, this.closeTimeoutValue)
    })
  }

  closeBackground(e) {
    if (this.allowCloseValue && e.target === this.backgroundTarget) {
      this.close()
    }
  }

  closeWithKeyboard(e) {
    if (e.keyCode === 27 && !this.containerTarget.classList.contains(this.hideClass)) {
      this.close()
    }
  }

  remove_hash_from_url() {
    var uri = window.location.toString()

    if (uri.indexOf('#') > 0) {
      var clean_uri = uri.substring(0, uri.indexOf('#'))
      window.history.replaceState({}, document.title, clean_uri)
    }
  }
}
