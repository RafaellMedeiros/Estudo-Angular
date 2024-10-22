import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    @Input() description = '';
    @Input() url = ''
}