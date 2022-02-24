import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = "";
  members: string[] = [];
  errorMessage: string = "";

  addMember(): void {
    this.errorMessage = "";

    if (! this.newMemberName) {
      this.errorMessage = "Ingresá el nombre";
      return;
    }

    this.members.push(this.newMemberName);
    this.newMemberName = "";
  }

  onInput(member: string): void {
    this.newMemberName = member;
  }
}
