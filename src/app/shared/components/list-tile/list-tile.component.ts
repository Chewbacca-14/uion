import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-tile',
  standalone: true,
  imports: [],
  templateUrl: './list-tile.component.html',
  styleUrl: './list-tile.component.scss',
})
export class ListTileComponent {
  @Input() iconPath: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
