import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['asc', 'desc', 'sort']
  static classes = ['hide', 'buttonActive', 'buttonInactive']
  static values = {
    currentSearch: String,
    currentSort: String,
    currentSortOrder: Number,
    currentView: String,
  }

  initialize() {
    let url = new URL(document.location)
    this.currentSearchValue = url.searchParams.get('q') ? url.searchParams.get('q') : ''
    this.currentSortOrderValue = url.searchParams.get('o') ? url.searchParams.get('o') : -1
    this.currentSortValue = url.searchParams.get('s') ? url.searchParams.get('s') : 'coveredpercent'
    this.currentViewValue = url.searchParams.get('tabName')
      ? url.searchParams.get('tabName')
      : 'All Files'
  }

  connect() {
    if (this.currentSearchValue != '') {
      this.search()
    }
    if (this.currentSortValue != '') {
      this.order()
    }
  }

  sortEvent(event) {
    let url = new URL(document.location)
    this.currentSortValue = event.currentTarget.value
    url.searchParams.set('s', event.currentTarget.value)
    window.history.pushState({}, '', url)
    this.currentViewValue = url.searchParams.get('tabName')
      ? url.searchParams.get('tabName')
      : 'All Files'
    this.sort()
  }

  orderEvent(event) {
    let url = new URL(document.location)
    this.currentSortOrderValue = event.currentTarget.value
    url.searchParams.set('o', event.currentTarget.value)
    window.history.pushState({}, '', url)
    this.currentViewValue = url.searchParams.get('tabName')
      ? url.searchParams.get('tabName')
      : 'All Files'
    this.order()
  }

  order() {
    if (this.currentSortOrderValue === -1) {
      this.ascTarget.classList.remove(...this.buttonInactiveClasses)
      this.ascTarget.classList.add(this.buttonActiveClasses)
      this.descTarget.classList.remove(this.buttonActiveClasses)
      this.descTarget.classList.add(...this.buttonInactiveClasses)
    } else if (this.currentSortOrderValue === 1) {
      this.ascTarget.classList.remove(this.buttonActiveClasses)
      this.ascTarget.classList.add(...this.buttonInactiveClasses)
      this.descTarget.classList.remove(...this.buttonInactiveClasses)
      this.descTarget.classList.add(this.buttonActiveClasses)
    }
    this.sort()
  }

  sort() {
    const sortValue = this.currentSortValue
    const sortOrder = this.currentSortOrderValue
    this.sortTarget.value = this.currentSortValue
    let list = Array.from(document.getElementById(this.currentViewValue + '-list').children).filter(
      (item) => item.id != this.currentViewValue + '-hideListItem'
    )
    list.sort(function (a, b) {
      let value1, value2
      switch (sortValue) {
        case 'coveredpercent':
          value1 = a.dataset.coveredPercent
          value2 = b.dataset.coveredPercent
          break
        case 'lines':
          value1 = a.dataset.lines
          value2 = b.dataset.lines
          break
        case 'releventlines':
          value1 = a.dataset.releventLines
          value2 = b.dataset.releventLines
          break
        case 'coveredlines':
          value1 = a.dataset.coveredLines
          value2 = b.dataset.coveredLines
          break
        case 'missedlines':
          value1 = a.dataset.missedLines
          value2 = b.dataset.missedLines
          break
        case 'coveredstrength':
          value1 = a.dataset.coveredStrength
          value2 = b.dataset.coveredStrength
          break
        case 'branchcoveredpercentches':
          value1 = a.dataset.branchCoveredPercent
          value2 = b.dataset.branchCoveredPercent
          break
        case 'branches':
          value1 = a.dataset.branches
          value2 = b.dataset.branches
          break
        case 'branchescoveredes':
          value1 = a.dataset.branchesCovered
          value2 = b.dataset.branchesCovered
          break
        case 'branchesmisseds':
          value1 = a.dataset.branchesMissed
          value2 = b.dataset.branchesMissed
          break
        default:
          value1 = 0
          value2 = 0
          break
      }

      return sortOrder * value1.localeCompare(value2, undefined, { numeric: true })
    })
    for (let i = 0; i < list.length; ++i) {
      document.getElementById(this.currentViewValue + '-list').appendChild(list[i])
    }
  }

  searchEvent(event) {
    let url = new URL(document.location)
    this.currentSearchValue = event.currentTarget.value.toLowerCase()
    url.searchParams.set('q', event.currentTarget.value.toLowerCase())
    window.history.pushState({}, '', url)
    this.currentViewValue = url.searchParams.get('tabName')
      ? url.searchParams.get('tabName')
      : 'All Files'
    this.search()
  }

  search() {
    let list = Array.from(document.getElementById(this.currentViewValue + '-list').children).filter(
      (item) => item.id != this.currentViewValue + '-hideListItem'
    )
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (item.dataset.fileName.toLowerCase().indexOf(this.currentSearchValue) > -1) {
        item.classList.remove(this.hideClass)
      } else {
        item.classList.add(this.hideClass)
      }
    }

    const total = list.length
    const current = Array.from(list).filter((item) =>
      item.classList.contains(this.hideClass)
    ).length
    const hiddenRow = document.getElementById(this.currentViewValue + '-hideListItem')
    if (total == current) {
      hiddenRow.classList.remove(this.hideClass)
    } else {
      hiddenRow.classList.add(this.hideClass)
    }
  }
}
