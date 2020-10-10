export function navigate(elementId) {
  const tabGroups = document.querySelectorAll('.tab-groups');
  const desktopNav = document.querySelectorAll('.desktop-nav > a');
  const mobileNav = document.querySelectorAll('.mobile-nav > a');

  for (var i = 0; i < tabGroups.length; i++) {
    var txtValue = tabGroups[i].attributes.name.value;
    if (txtValue.indexOf(elementId) > -1) {
      tabGroups[i].classList.remove('hidden');
    } else {
      tabGroups[i].classList.add('hidden');
    }
  }

  for (var i = 0; i < desktopNav.length; i++) {
    if (desktopNav[i].attributes.name.value == elementId) {
      desktopNav[i].classList.remove(
        'text-gray-300', 'hover:text-white', 'hover:bg-gray-700', 'focus:text-white', 'focus:bg-gray-700',
      );
      desktopNav[i].classList.add('text-white', 'bg-gray-900');
    } else {
      desktopNav[i].classList.remove('text-white', 'bg-gray-900');
      desktopNav[i].classList.add(
        'text-gray-300', 'hover:text-white', 'hover:bg-gray-700', 'focus:text-white', 'focus:bg-gray-700',
      );
    }
  }

  for (var i = 0; i < mobileNav.length; i++) {
    if (mobileNav[i].attributes.name.value == elementId) {
      mobileNav[i].classList.remove(
        'text-gray-300', 'hover:text-white', 'hover:bg-gray-700', 'focus:text-white', 'focus:bg-gray-700',
      );
      mobileNav[i].classList.add('text-white', 'bg-gray-900');
    } else {
      mobileNav[i].classList.remove('text-white', 'bg-gray-900');
      mobileNav[i].classList.add(
        'text-gray-300', 'hover:text-white', 'hover:bg-gray-700', 'focus:text-white', 'focus:bg-gray-700',
      );
    }
  }
}

window.navigate = navigate;
