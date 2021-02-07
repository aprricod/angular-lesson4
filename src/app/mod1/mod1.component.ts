import { DatePipe, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { PhonePipe } from './phone.pipe';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
  providers: [DatePipe, SlicePipe],
})
export class Mod1Component implements OnInit {
  date = Date.now();
  money: number = 10000;
  pi: number = 3.1415926535;
  textHello: string = 'Hello World';
  phone: Observable<string> | undefined;
  phones: string[] = [
    '9897201220',
    '9897201221',
    '9897201222',
    '9897201223',
    '9897201224',
    '9897201225',
    '9897201226',
    '9897201227',
    '9897201228',
    '9897201229',
  ];

  constructor(
    private datePipe: DatePipe,
    private slicePipe: SlicePipe,
    private phonePipe: PhonePipe
  ) {
    console.log(datePipe.transform(this.date, 'MMMM'));
    console.log(slicePipe.transform(this.textHello, 2, 5));
  }

  ngOnInit(): void {
    this.blackBox();
  }

  get dateNow(): string | null {
    return this.datePipe.transform(this.date, 'MMMM');
  }

  get getTextHello(): string {
    return this.slicePipe.transform(this.textHello, 2, 5);
  }

  get getPhoneNumber(): string {
    return this.phonePipe.transform(this.phones);
  }

  blackBox() {
    this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
  }
}
