import { useEffect, useState } from "react";

const formatTime = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); 
  const years = Math.floor(months / 12);

  const remainingDays = days % 30;
  const remainingMonths = months % 12;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;


  const timeParts: string[] = [];


  if (years > 0) {
    timeParts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  }


  timeParts.push(`${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`);
  timeParts.push(`${remainingDays} ${remainingDays === 1 ? "dia" : "dias"}`);
  timeParts.push(`${remainingHours} ${remainingHours === 1 ? "hora" : "horas"}`);
  timeParts.push(`${remainingMinutes} ${remainingMinutes === 1 ? "minuto" : "minutos"}`);
  timeParts.push(`${remainingSeconds} ${remainingSeconds === 1 ? "segundo" : "segundos"}`);

  const formattedTime = timeParts.join(", ").replace(/,([^,]*)$/, ' e$1');

  return formattedTime;
};

export const Message = () => {

  const startDate = new Date("2023-07-29T19:00:00");
  const now = new Date()
  const difference = now.getTime() - startDate.getTime(); 
  const [timeElapsed, setTimeElapsed] = useState(formatTime(difference));
  

  useEffect(()=> { 
    const interval = setInterval(()=> {
      const now = new Date()
      const difference = now.getTime() - startDate.getTime(); 

      if (difference <= 0) {
        clearInterval(interval);
        setTimeElapsed("A data ainda não chegou!");
      } else {
        setTimeElapsed(formatTime(difference));
      }

    }, 1000)
  }, [])



  return <p className="text-thauane-pink font-sulfur text-lg leading-5">
    {timeElapsed}
  </p>;
};