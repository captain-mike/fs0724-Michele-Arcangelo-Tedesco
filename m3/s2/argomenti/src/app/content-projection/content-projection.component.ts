import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {

  @ContentChild('proiettato') ref!:ElementRef

  ngAfterViewInit(): void {

    this.ref.nativeElement.classList.add('alert','alert-warning')

  }

}
