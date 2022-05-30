import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["body"]
  static classes = ["dark"]

  initialize() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("color-theme", "dark")
      this.bodyTarget.classList.add(this.darkClass)
    } else {
      localStorage.setItem("color-theme", "light")
    }
  }

  toggle() {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        this.bodyTarget.classList.add(this.darkClass)
        localStorage.setItem("color-theme", "dark")
      } else {
        this.bodyTarget.classList.remove(this.darkClass)
        localStorage.setItem("color-theme", "light")
      }
    } else {
      if (this.bodyTarget.classList.contains("dark")) {
        this.bodyTarget.classList.remove(this.darkClass)
        localStorage.setItem("color-theme", "light")
      } else {
        this.bodyTarget.classList.add(this.darkClass)
        localStorage.setItem("color-theme", "dark")
      }
    }
  }
}
