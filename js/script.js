const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))
