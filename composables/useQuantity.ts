export function useQuantity() {
  const quantity = useState('quantity', () => 1)

  function increment() {
    quantity.value++
  }

  function decrement() {
    quantity.value <= 1 ? quantity.value = 1 : quantity.value--
  }

  return {
    quantity,
    increment,
    decrement,
  }
}
