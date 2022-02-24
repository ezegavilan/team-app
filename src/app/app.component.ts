import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = "";
  members: string[] = [];

  addMember(): void {
    this.members.push(this.newMemberName);

    console.log(this.members);
  }

  onInput(member: string): void {
    this.newMemberName = member;
  }
}
