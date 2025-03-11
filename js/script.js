const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))


function onTabClick(e){
  tabs.forEach((tab) => {
    tab.children[0]
  })
}