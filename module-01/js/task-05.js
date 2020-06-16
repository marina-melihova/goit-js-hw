let input = prompt('Введите название вашей страны:');
let cost;
let ableDeliver = true;
if (input !== null) {
  let country = input.toLowerCase();
  switch (country) {
    case 'китай':
      cost = 100;
      break;
    case 'чили':
      cost = 250;
      break;
    case 'австралия':
      cost = 170;
      break;
    case 'индия':
      cost = 80;
      break;
    case 'ямайка':
      cost = 120;
      break;
    default:
      ableDeliver = false;
  }
  if (ableDeliver) {
    let countryName = country[0].toUpperCase() + country.slice(1);
    alert(`Доставка в ${countryName} будет стоить ${cost} кредитов`);
  } else alert('В вашей стране доставка не доступна');
} else console.log('Отменено пользователем!');
