import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.scss']
})
export class DataAnalysisComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  displayedColumns = ['no', 'strongly_agree', 'agree', 'undecided', 'disagree', 'strongly_disagree', 'mean'];
  displayedColumns2 = ['service_mix', 'score', 'rank'];
  dataSource = ELEMENT_DATA;

  dataSource2 = TABLE_2;


  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 250);

  }


}

const TABLE_2 = [
  {service_mix: 'Price', score: '33', rank: '1'},
  {service_mix: 'Place', score: '59', rank: '2'},
  {service_mix: 'Product', score: '65', rank: '3'},
  {service_mix: 'People', score: '85', rank: '4'},
  {service_mix: 'Physical evidence', score: '98', rank: '5'},
  {service_mix: 'Promotion', score: '110', rank: '6'},
];

const ELEMENT_DATA = [
  { no: 'Product', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '3.6' },
  { no: '1.	You choose Stay Here Hostel because of its popularity. ', strongly_agree: '2 (10%)', agree: '11 (55%)', undecided: '6 (30%)', disagree: '1 (5%)', strongly_disagree: '', mean: '3.7' },
  { no: '2.	You choose Stay Here Hostel because of its room varieties.', strongly_agree: '2 (10%)', agree: '6 (30%)', undecided: '5 (25%)', disagree: '6 (30%)', strongly_disagree: '1 (5%)', mean: '3.1' },
  { no: '3.	You choose Stay Here .Hostel because of its cleanliness. ', strongly_agree: '10 (50%)', agree: '6 (30%)', undecided: '', disagree: '4(20%)', strongly_disagree: '', mean: '4.3' },
  { no: '4.	You choose Stay Here Hostel because of its wideness of the room', strongly_agree: '2 (10%)', agree: '8 (40%)', undecided: '7 (35%)', disagree: '2 (10%)', strongly_disagree: '1 (5%)', mean: '3.4' },
  { no: '5.	You choose Stay Here Hostel because of the number of the bathroom.', strongly_agree: '4 (20%)', agree: '5 (25%)', undecided: '8 (40%)', disagree: '3 (15%)', strongly_disagree: '', mean: '3.5' },
  { no: '6.	You choose Stay Here Hostel because of its co-working space.', strongly_agree: '5 (25%)', agree: '6 (30%)', undecided: '7 (35%)', disagree: '1 (5%)', strongly_disagree: '1 (5%)', mean: '3.6' },
  { no: '7.	Other (Please specify……………)', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '' },
  { no: 'Price', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '3.9' },
  { no: '1.	You choose Stay Here Hostel because of its reasonable price.', strongly_agree: '16 (80%)', agree: '3 (15%)', undecided: '', disagree: '1 (5%)', strongly_disagree: '', mean: '4.7' },
  { no: '2.	You choose Stay Here Hostel because of its various prices. ', strongly_agree: '6 (30%)', agree: '4 (20%)', undecided: '5 (35%)', disagree: '3 (15%)', strongly_disagree: '2 (10%)', mean: '3.4' },
  { no: '3.	You choose Stay Here Hostel because you are able to pay by your credit card.', strongly_agree: '5 (25%)', agree: '4 (20%)', undecided: '8 (40%)', disagree: '1 (5%)', strongly_disagree: '2 (10%)', mean: '3.6' },
  { no: '4.	Other (Please specify……………)', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '' },
  { no: 'Place', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '4.2' },
  { no: '1.	The hostel is close to tourist spots.', strongly_agree: '14 (70%)', agree: '4 (20%)', undecided: '1 (5%)', disagree: '1 (5%)', strongly_disagree: '', mean: '4.5' },
  { no: '2.	The hostel is close to the public transport hub.', strongly_agree: '10 (50%)', agree: '7 (35%)', undecided: '3 (15%)', disagree: '', strongly_disagree: '', mean: '4.1' },
  { no: '3.	The hostel can be found easily.', strongly_agree: '11 (55%)', agree: '4 (20%)', undecided: '2 (10%)', disagree: '3 (15%)', strongly_disagree: '', mean: '4.15' },
  { no: '4.	The hostel is close to shopping area', strongly_agree: '9 (45%)', agree: '8 (40%)', undecided: '3 (15%)', disagree: '', strongly_disagree: '', mean: '4.3' },
  { no: '5.	The hostel can be accessed easily and conveniently through both online and offline channel.', strongly_agree: '9 (45%)', agree: '7 (35%)', undecided: '3 (15%)', disagree: '', strongly_disagree: '1 (5%)', mean: '4.2' },
  { no: '6. Other (Please specify……………)', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '3.6' },
  { no: 'Promotion', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '3.7' },
  { no: '1.	The information of the hostel can be accessed easily by social networks (such as, Facebook, Instagram)', strongly_agree: '5 (25%)', agree: '8 (40%)', undecided: '7 (35%)', disagree: '', strongly_disagree: '', mean: '3.9' },
  { no: '2.	The advertising of the hostel is interesting and easily be found such as website, youtube, facebook page.', strongly_agree: '3 (15%)', agree: '7 (35%)', undecided: '9 (45%)', disagree: '1 (5%)', strongly_disagree: '', mean: '3.6' },
  { no: '3.	The hostel gives regular room discount to customers. ', strongly_agree: '5 (25%)', agree: '2 (10%)', undecided: '11 (55%)', disagree: '1 (5%)', strongly_disagree: '1 (5%)', mean: '3.4' },
  { no: '4.	The hostel gives the tour package to customers regulary.', strongly_agree: '3 (15%)', agree: '6 (30%)', undecided: '9 (45%)', disagree: '1 (5%)', strongly_disagree: '1 (5%)', mean: '3.4' },
  { no: '5.	The hostel holds many events to celebrate important festivals of Thailand.', strongly_agree: '3 (15%)', agree: '4 (20%)', undecided: '8 (40%)', disagree: '5(25%)', strongly_disagree: '', mean: '3.2' },
  { no: '6.	The hostel provides transportation services from/to the airport.', strongly_agree: '6 (30%)', agree: '5 (25%)', undecided: '9(45%)', disagree: '', strongly_disagree: '', mean: '3.8' },
  { no: '7.	The hostel provides the coffee shop service.', strongly_agree: '12 (60%)', agree: '8 (40%)', undecided: '', disagree: '', strongly_disagree: '', mean: '4.6' },
  { no: '8.	The hostel provides movie zone.', strongly_agree: '9 (45%)', agree: '6 (30%)', undecided: '5 (25%)', disagree: '', strongly_disagree: '', mean: '4.2' },
  { no: '9.	Other (Please specify……………)', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '' },
  { no: 'Process', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '4.6' },
  { no: '1.	The process of making reservation is easy and convenient. ', strongly_agree: '17 (85%)', agree: '1 (5%)', undecided: '2 (10%)', disagree: '', strongly_disagree: '', mean: '4.5' },
  { no: '2.	The working time of staff is appropriate.', strongly_agree: '15 (75%)', agree: '4 (10%)', undecided: '1 (5%)', disagree: '', strongly_disagree: '', mean: '4.7' },
  { no: '3.	The services from the staff (such as check-in/check-out are fast and convenient.', strongly_agree: '16 (80%)', agree: '4 (20%)', undecided: '', disagree: '', strongly_disagree: '', mean: '4.8' },
  { no: '4. The staff services response your needs.', strongly_agree: '17 (85%)', agree: '3 (15%)', undecided: '', disagree: '', strongly_disagree: '', mean: '4.5' },
  { no: '5. Other (Please specify…………)', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '' },
  { no: 'Physical evidence', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '4.5' },
  { no: '1.	The signage of the hostel can be seen easily.', strongly_agree: '12 (60%)', agree: '6 (30%)', undecided: '', disagree: '2 (10%)', strongly_disagree: '', mean: '4.4' },
  { no: '2.	The logo of the hostel is easy to memorize.', strongly_agree: '11 (55%)', agree: '5 (25%)', undecided: '2 (10%)', disagree: '2 (10%)', strongly_disagree: '', mean: '4.2' },
  { no: '3.	The hostel is decolated beautifully. ', strongly_agree: '15 (75%)', agree: '4 (20%)', undecided: '1 (5%)', disagree: '', strongly_disagree: '', mean: '4.7' },
  { no: '4.	The public area is clean and suitable for rest.', strongly_agree: '17 (85%)', agree: '3 (15%)', undecided: '', disagree: '', strongly_disagree: '', mean: '4.8' },
  { no: '5.	Other (Please specify……………)', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '' },
  { no: 'People', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '4.7' },
  { no: '1.	The staff is able to answer every questions of the customers.', strongly_agree: '14 (70%)', agree: '4 (20%)', undecided: '2 (10%)', disagree: '', strongly_disagree: '', mean: '4.6' },
  { no: '2.	 The staff is able to recommend different  places and restuarants in Chiang Mai and other provinces nearby. ', strongly_agree: '15 (75%)', agree: '2 (10%)', undecided: '3 (15%)', disagree: '', strongly_disagree: '', mean: '4.6' },
  { no: '3.	The staff is polite and enthusiastic.', strongly_agree: '17 (85%)', agree: '3 (15%)', undecided: '', disagree: '', strongly_disagree: '', mean: '4.8' },
  { no: '4.	The staff has good personality and dress properly.', strongly_agree: '18 (90%)', agree: '2 (10%)', undecided: '', disagree: '', strongly_disagree: '', mean: '4.9' },
  { no: '5.	The number of staff is enough to meet the customers’ demand.', strongly_agree: '16 (80%)', agree: '3 (15%)', undecided: '1 (5%)', disagree: '', strongly_disagree: '', mean: '4.7' },
  { no: '6.	Other (Please specify……………)', strongly_agree: '', agree: '', undecided: '', disagree: '', strongly_disagree: '', mean: '' },
];
