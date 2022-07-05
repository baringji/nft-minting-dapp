export function useQuantity() {
  const tokenQuantity = useState('tokenQuantity', () => 1)
  const tokenLimit = useState('tokenLimit', () => 1)

  function increment() {
    tokenQuantity.value >= tokenLimit.value ? tokenQuantity.value = tokenLimit.value : tokenQuantity.value++
  }

  function decrement() {
    tokenQuantity.value <= 1 ? tokenQuantity.value = 1 : tokenQuantity.value--
  }

  return {
    tokenQuantity,
    tokenLimit,
    increment,
    decrement,
  }
}
