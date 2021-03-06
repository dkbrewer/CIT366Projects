import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'Document 1', 'Document 1', 'www.exampleurl.com'),
    new Document('2', 'Document 2', 'Document 2', 'www.exampleurl.com'),
    new Document('3', 'Document 3', 'Document 3', 'www.exampleurl.com'),
    new Document('4', 'Document 4', 'Document 4', 'www.exampleurl.com')
  ];

  constructor() {

  }

  ngOnInit() {
  }

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }

}
