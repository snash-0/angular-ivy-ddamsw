import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  inputNameField = '';
  inputeDateField: Date = null;
  inputTextField = '';

  members: string[] = [];

  myObjArray = [
    {
      name: '',
      date: null,
      Text: '',
    },
  ];

  addInputName(Name) {
    //console.log(Name);
    this.inputNameField = Name;
  }
  addInputDate(Date) {
    //console.log(Date);
    this.inputeDateField = Date;
  }
  addInputText(Text) {
    //console.log(Text);
    this.inputTextField = Text;
  }
  AddNotes() {
    //console.log(
    //this.inputNameField +
    //' + ' +
    //this.inputeDateField +
    //' + ' +
    //this.inputTextField
    //);
    this.myObjArray.push({
      name: this.inputNameField,
      date: this.inputeDateField,
      Text: this.inputTextField,
    });
    
    //console.log(this.myObjArray);
  }
}
