export function randomWord(){
  const words = ["mario", "fountain", "pizza", "python", "penguin", "cart", "world", "unicorn"]

  return words[Math.floor(Math.random() * words.length)]
}