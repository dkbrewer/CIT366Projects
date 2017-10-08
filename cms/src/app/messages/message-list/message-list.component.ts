import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message ('1', 'Superman', 'Superman is better than Batman.', 'Clark Kent'),
    new Message ('2', 'Batman', 'Batman is better than Superman.', 'Bruce Wayne'),
    new Message ('3', 'Batman vs. Superman', 'I think both are pretty cool.', 'Daniel Brewer'),
    new Message ('4', 'Iron Man', 'Iron Man is better than both of you.', 'Tony Stark'),
  ];

  onAddMessage(message: Message){
    this.messages.push(message);
  }

  constructor() { }

  ngOnInit() {
  }

}
