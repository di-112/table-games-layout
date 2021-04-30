const ratingsArray = document.querySelectorAll('.game__rating, .game-section__rating')

ratingsArray.forEach((rating) => {
  const spanText = rating.textContent
  if (spanText >= 0 && spanText <= 1) rating.style.background = '#f86a69'
  if (spanText > 1 && spanText <= 2) rating.style.background = '#f98471'
  if (spanText > 2 && spanText <= 3) rating.style.background = '#fca275'
  if (spanText > 3 && spanText <= 4) rating.style.background = '#febe7e'
  if (spanText > 4 && spanText <= 5) rating.style.background = '#fddd82'
  if (spanText > 5 && spanText <= 6) rating.style.background = '#eee683'
  if (spanText > 6 && spanText <= 7) rating.style.background = '#cddd83'
  if (spanText > 7 && spanText <= 8) rating.style.background = '#a8d37d'
  if (spanText > 8 && spanText <= 9) rating.style.background = '#86c87f'
  if (spanText > 9 && spanText <= 10) rating.style.background = '#62be7b'
})
