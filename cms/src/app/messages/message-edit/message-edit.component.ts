import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectInputRef: ElementRef;
  @ViewChild('msgText') msgTextInputRef: ElementRef;
  @Output() messageSent = new EventEmitter<Message>();
  constructor() { }

  ngOnInit() {
  }
  currentSender = "Daniel Brewer";
  onSendMessage(){
    const subject = this.subjectInputRef.nativeElement.value;
    const msgText = this.msgTextInputRef.nativeElement.value;
    const newMessage = new Message ('1', subject, msgText, this.currentSender);
    this.messageSent.emit(newMessage);
  }

  onClear(){
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }

}
