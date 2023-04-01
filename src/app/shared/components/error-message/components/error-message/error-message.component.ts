import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string = 'Something went wrong'
}
