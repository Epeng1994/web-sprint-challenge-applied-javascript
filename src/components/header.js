const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const head = document.createElement('div')
  head.classList.add('header')

  const hdate = document.createElement('span')
  hdate.classList.add('date')
  hdate.textContent = date

  const htitle = document.createElement('h1')
  htitle.textContent = title

  const htemp = document.createElement('span')
  htemp.classList.add('temp')
  htemp.textContent = temp

  head.append(hdate,htitle,htemp)

  return head
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let text = Header('New York', '4/15/2022', '70c')
  const select = document.querySelector(selector)
  select.appendChild(text)

}

export { Header, headerAppender }
