const year = [
    {
      month: "January",
      id: "jan",
      nth: 1,
      days: 31,
    },
    {
      month: "February",
      id: "febr",
      nth: 2,
      days: 28,
    },
    {
      month: "March",
      id: "marc",
      nth: 3,
      days: 31,
    },
    {
      month: "April",
      id: "apr",
      nth: 4,
      days: 30,
    },
    {
      month: "May",
      id: "may",
      nth: 5,
      days: 31,
    },
    {
      month: "June",
      id: "june",
      nth: 6,
      days: 30,
    },
    {
      month: "July",
      id: "july",
      nth: 7,
      days: 31,
    },
    {
      month: "August",
      id: "aug",
      nth: 8,
      days: 31,
    },
    {
      month: "September",
      id: "sept",
      nth: 9,
      days: 30,
    },
    {
      month: "October",
      id: "oct",
      nth: 10,
      days: 31,
    },
    {
      month: "November",
      id: "nov",
      nth: 11,
      days: 30,
    },
    {
      month: "December",
      id: "dec",
      nth: 12,
      days: 31,
    },
  ];
  
  function renderCalendar() {
    const root = document.querySelector("#root");
    root.innerHTML = "";
  
    for (let i = 0; i < year.length; i++) {
      const monthEl = createMonth(year[i]);
      root.append(monthEl);
    }
  }
  
  function createMonth(month) {
    const monthEl = document.createElement('section');
    monthEl.id = month.id;

  
    const actualYear = new Date().getFullYear();
    const actualMonth = month.nth;
  
    for (let i = 1; i < month.days; i++) {
      const cardEl = document.createElement('div');
      cardEl.className = 'card';
  
      const yyyy = document.createElement('time');
      yyyy.datetime = actualYear;
      yyyy.innerText = actualYear;
  
      const mm = document.createElement('time');
      mm.datetime = actualMonth;
      mm.innerText = actualMonth;
  
      const dd = document.createElement('time');
      dd.datetime = i;
      dd.innerText = i;
  
      cardEl.append(yyyy, mm, dd);
      monthEl.append(cardEl);
    }
  
    return monthEl;
  }
  
  function initInteractions() {
    const cards = document.querySelectorAll('.card');
  
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function(event) {
        event.currentTarget.classList.toggle('funny');
      });
    }
  }
  
  function main() {
    renderCalendar();
    initInteractions();
  }

  // let imageContaier = document.createElement('div');
  // imageContaier.classList.add('imageContainer');
  // monthEl.appendChild(imageContainer);
  // const januaryImg = document.createElement('img');
  // januaryImg.classList.add('image');
  // januaryImg.src = 'january.jpeg';
  // imageContaier.appendChild(january.jpeg);
  
  main();