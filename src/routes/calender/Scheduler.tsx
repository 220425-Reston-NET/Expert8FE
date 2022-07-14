import React, { useState } from 'react';
import './Scheduler.css';

import { Agenda, Day, EventClickArgs, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import { useNavigate } from 'react-router-dom';
// import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';

function Scheduler() {
    const [value, onChange] = useState(new Date());

    const navigate = useNavigate();

    const goToPaymentConfirmation = () => {
      navigate('/payment-information');
    };

    const goToChooseSpecialist = () => {
      navigate('/choose-specialist');
    };

  //  private class onEventClick(args: EventClickArgs): void {
  //   let event: Object = this.scheduleObj.getEventDetails(args.element);
  //   this.appendElement(event.Subject +'<hr>');
  // }


  // ref={t => this.scheduleObj = t}

  return (
    // <div>
    //     <Calendar onChange={onChange} value={value} />
    // </div>   
                
    <div>
      <div className='buttons-container'>


      <button onClick={goToChooseSpecialist} type="button" className="btn btn-outline-primary btn-lg" style={{margin: 'auto'}}> Go Back</button>
      <ScheduleComponent rowAutoHeight= { true }  startHour='07:00' endHour='18:00' showWeekend= { false } eventClick={goToPaymentConfirmation} timeScale={ { enable: true, interval: 60, slotCount: 2}}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      {/* <button onClick={goToChooseSpecialist} type="button" className="btn btn-outline-primary btn-lg" style={{margin: 'auto'}}> Go Back</button> */}
      </div>
    </div>
    
  );
}

export default Scheduler

function onEventClick(args: any, EventClickArgs: any) {
  throw new Error('Function not implemented.');
}

