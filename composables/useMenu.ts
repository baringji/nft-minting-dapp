export function useMenu() {
  const menu = useState('menu', () => false)

  function showMenu() {
    menu.value = true
  }

  function hideMenu() {
    menu.value = false
  }

  return {
    menu,
    showMenu,
    hideMenu,
  }
}
