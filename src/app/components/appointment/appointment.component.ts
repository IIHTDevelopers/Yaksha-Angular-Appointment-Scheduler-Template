import { Component } from '@angular/core';

interface Appointment {
  id: number;
  name: string;
  date: string;
  time: string;
  description: string;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointments: Appointment[] = [];
  newAppointment: Appointment = {} as Appointment;
  editedAppointment: Appointment = {} as Appointment;
  isEditing = false;
  searchKeyword = '';

  addAppointment(): void {
  }

  editAppointment(appointment: Appointment): void {
  }

  saveEditedAppointment(): void {
  }

  cancelEdit(): void {
  }

  deleteAppointment(appointment: Appointment): void {
  }

  get filteredAppointments(): Appointment[] {
    return [];
  }
}
