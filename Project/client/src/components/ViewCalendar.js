import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components'
import Dashboard from '../views/Dashboard'
import Calendar from './styled-components/Calendar'
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 1rem auto;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: transparent;
  border: none;

  &:hover {
    color: #777;
  }
`;

const ViewCalendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [events, setEvents] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const context = useContext(Dashboard);

  const loadPrevMonth = () => {
    let prevMonth = month - 1;
    if (prevMonth < 1) {
      setYear(year - 1);
      prevMonth = 12;
    }
    setMonth(prevMonth);
  };

  const loadNextMonth = () => {
    let nextMonth = month + 1;
    if (nextMonth > 12) {
      setYear(year + 1);
      nextMonth = 1;
    }
    setMonth(nextMonth);
  };

  useEffect(() => {
  //   const newEvents = [];

  //     const beginDay = 10,
  //       endDay = 11;
  //     newEvents.push({
  //       id: "p",
  //       title: `Flight to Paris`,
  //       beginDate: new Date(year, month - 1, beginDay),
  //       endDate: new Date(year, month - 1, endDay),
  //     });
    
  //   setEvents(newEvents);
  // }, [year, month]);

  axios.get(`http://localhost:8000/api/events`, { withCredentials: true })
  .then(response=>{
    setEvents(response.data)
  })
  .catch(err=>{
    console.log(err)
    if (err.response.status === 401) {
        console.log("UNAUTHORIZED")
      }
      else if (err.response.status === 400) {
        console.log("BAD REQUEST")
      }
})
}, [refresh])

const reload = () => {
setRefresh(!refresh)
}

const helper = (events)=>{
  for (const key in events) {
    console.log(`${key}: ${events[key]}`);
  }
  };


  return (
    <Container className='card has-background-primary-light '>
      JSON.stringify(setEvents)
      <Controls>
        <Button onClick={loadPrevMonth}>&laquo; Prev Month</Button>
        <Button onClick={loadNextMonth}>Next Month &raquo;</Button>
      </Controls>
      <Calendar year={year} month={month} events={events} />
    </Container>
  );
};

export default ViewCalendar;