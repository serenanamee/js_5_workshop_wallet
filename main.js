let item = document.querySelector('#item-form')

item.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(
    {
      category: item.elements["category"].value,
      date: item.elements["date"].value,
      amount: item.elements["amount"].value,
      description: item.elements["description"].valiue,
    }
  )
  item.reset();
})
