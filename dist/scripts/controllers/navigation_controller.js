import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = ["hide", "active", "inactive"]
  static values = { currentActive: String }

  initialize() {
    let url = new URL(document.location)
    this.currentActiveValue = url.searchParams.get("tabName")
      ? url.searchParams.get("tabName")
      : ""
  }

  connect() {
    if (this.currentActiveValue != "") {
      this.navigate()
    }
  }

  navigateEvent(event) {
    let url = new URL(document.location)
    this.currentActiveValue = event.currentTarget.dataset.index
    url.searchParams.set("tabName", event.currentTarget.dataset.index)
    window.history.pushState({}, "", url)
    this.navigate()
  }

  navigate() {
    let navBodies = document.querySelectorAll(".navBody")
    navBodies.forEach((el) => {
      if (!el.classList.contains(this.hideClass)) {
        el.classList.add(this.hideClass)
      }
    })

    let navs = document.querySelectorAll(".nav")
    navs.forEach((nav) => {
      if (nav.classList.contains(...this.activeClasses)) {
        nav.classList.remove(...this.activeClasses)
        nav.classList.add(...this.inactiveClasses)
      }
    })

    navs.forEach((nav) => {
      if (nav.dataset.index == this.currentActiveValue) {
        nav.classList.remove(...this.inactiveClasses)
        nav.classList.add(...this.activeClasses)
      }
    })

    document
      .getElementById(this.currentActiveValue)
      .classList.remove(this.hideClass)
  }
}
