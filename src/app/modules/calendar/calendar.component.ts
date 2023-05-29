import {
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar, CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar', { static: true }) calendarRef!: ElementRef;

  calendar!: Calendar;

  ngAfterViewInit() {
    const calendarOptions: CalendarOptions = {
      height: '75vh',
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      events: [
        {
          title: 'Event 1',
          start: '2023-05-01',
          end: '2023-05-03',
        },
        {
          title: 'Event 2',
          start: '2023-05-05',
          end: '2023-05-07',
        },
      ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      weekends: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      dateClick: (info: any) => {
        const title = prompt('Enter event title:');
        if (title) {
          this.calendar.addEvent({
            title,
            start: info.dateStr,
            end: info.dateStr,
          });
        }
      },
    };

    this.calendar = new Calendar(
      this.calendarRef.nativeElement,
      calendarOptions
    );
    this.calendar.render();

    window.onbeforeunload = () => {
      this.calendar.refetchEvents();
    };
  }
}
