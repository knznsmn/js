const main      = document.getElementsByTagName('main')[0]; 
const article = document.createElement('article');
const section = document.createElement('section');

article.classList = "countdown";

export function Countdown() {
  // Genesis
  const date  = {
    now: new Date(),
    end: new Date(2025, 5, 3, 23, 59, 59)
  };
  const time  = {
    now: {
      year: date.now.getFullYear(),
      moin: date.now.getMonth(),
      jour: date.now.getDay(),
      hour: date.now.getHours(),
      mins: date.now.getMinutes(),
      secs: date.now.getSeconds()
    },
    end: {
      year: date.end.getFullYear(),
      moin: date.end.getMonth(),
      jour: date.end.getDay(),
      hour: date.end.getHours(),
      mins: date.end.getMinutes(),
      secs: date.end.getSeconds()
    }
  }

  const timeDifference = date.end - date.now;
  const endDate = {
    year: timeDifference / (60 * 60 * 60 * 24 * 30)
  }
  console.log(endDate.year);
  const now = `${time.now.hour}:${time.now.mins}:${time.now.secs}`;
  section.innerText = now;
    
  article.appendChild(section);
  main.appendChild(article);
}