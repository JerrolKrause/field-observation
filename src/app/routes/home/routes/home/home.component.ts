import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public formMain: FormGroup;

  // @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 780,
    canvasHeight: 200,
  };

  public step = 1;

  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    // Formgroup
    this.formMain = this.fb.group({
      step1: this.fb.group({
        username: [null, []],
        pin: [null, []],
      }),
      step2: this.fb.group({
        warning: [null, []],
        corner: [null, []],
        flagger: [null, []],
        vehicle: [null, []],
      }),
      step3: this.fb.group({
        water: [null, []],
        trash: [null, []],
        firstAid: [null, []],
        shovels: [null, []],
      }),
    });
  }

  public restart() {
    this.formMain.reset();
    this.step = 1;
  }

  // Must be present even if not used for unsubs
  ngOnDestroy() {}
}
