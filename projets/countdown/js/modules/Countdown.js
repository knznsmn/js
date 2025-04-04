const main    = document.getElementsByTagName('main')[0]; 
const pane    = {
  h2:      document.createElement('h2'),
  h3:      document.createElement('h3'),
  article: document.createElement('article'),
  section: document.createElement('section')
}

pane.article.classList = "countdown";

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

  // Contents
  
  const timeDifference = date.end - date.now;
  const endDate = {
    moin: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    jour: Math.floor(timeDifference / (1000 * 60 * 60)),
    hour: Math.floor(timeDifference / (1000 * 60)),
    mins: Math.floor(timeDifference / (1000 * 60)),
    secs: Math.floor(timeDifference / (1000 % 60))
  }

  // Draw

  console.log(endDate.month);
  const now = `${time.now.hour}:${time.now.mins}:${time.now.secs}`;
  const end = `${time.end.hour}:${time.end.mins}:${time.end.secs}`;
  const fin = `${endDate.moin }:${endDate.jour }:${endDate.mins }:${endDate.secs }`;
  pane.h3.innerText = fin;
  pane.h2.innerText = "End Date";
  pane.section.appendChild(pane.h2);
  pane.section.appendChild(pane.h3);
    
  pane.article.appendChild(pane.section);
  main.appendChild(pane.article);
}