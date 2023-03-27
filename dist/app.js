import { Application } from '@hotwired/stimulus'

import DarkthemeController from './scripts/controllers/darktheme_controller'
import NavigationController from './scripts/controllers/navigation_controller'
import SearchController from './scripts/controllers/search_controller'
import SlideoverController from './scripts/controllers/slideover_controller'
import './scripts/timeago.js'

window.Stimulus = Application.start()
Stimulus.register('search', SearchController)
Stimulus.register('navigation', NavigationController)
Stimulus.register('darktheme', DarkthemeController)
Stimulus.register('slideover', SlideoverController)
