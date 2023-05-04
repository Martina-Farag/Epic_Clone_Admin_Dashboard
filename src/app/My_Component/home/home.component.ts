import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { IProduct } from 'src/app/Modules/iproduct';
import { IUser } from 'src/app/Modules/iuser';
// import { ClassData } from 'src/app/Models/class-data';
// import { HomeAdsService } from '../../services/home-ads.service';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { UserApiService } from 'src/app/services/user-api.service';
// import { ItiInfo } from '../../Models/iti-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  productsList:IProduct[]=[];
  usersList:IUser[]=[];
  usersLength:number=0;
  gamesLength:number=0;

  gamesTotalPrice:number=0;
  totalEarnings:number=0;

  constructor(private prdApiService:ProductsApiService, private userApiService:UserApiService){
    this.prdApiService.getAllProducts().subscribe(data=>{this.productsList=data;})
    this.userApiService.getAllUsers().subscribe(data=>{this.usersList=data;})

    // this.usersLength = this.usersList.length;
    // this.gamesLength = this.productsList.length;

    this.prdApiService.getAllProducts().subscribe({
      next: (data) => {
        this.productsList=data;
      }, complete: () => {

        for(let i=0; i<this.productsList.length; i++){
          if(this.productsList[i].Price!='free'){
            this.gamesTotalPrice += (+this.productsList[i].Price);}
        }
        console.log(this.gamesTotalPrice);
        this.gamesTotalPrice = Math.ceil(this.gamesTotalPrice);
        
    }, error: (err) => {
        console.error(err);
      }
  });

  this.userApiService.getAllUsers().subscribe({
    next: (data) => {
      this.usersList=data;
    }, complete: () => {

      for(let i=0; i<this.usersList.length; i++){
        for(let j=0; j<this.usersList[i].purchaseHistory.length; j++){
          var ID = this.usersList[i].purchaseHistory[j];
          console.log(ID);
          this.prdApiService.getAllProducts().subscribe(
            // data=>{this.productsList=data;}
            {
              next: (data) => {
                this.productsList=data;
              }, complete: () => {
                var game = this.productsList.find(p => p._id == ID)
                
                if(game && game.Price != 'free'){
                  this.totalEarnings += +game.Price; }

              },error(err) {
                console.log(err);
              },

            }
          )
          
        }
        this.totalEarnings = Math.ceil(this.totalEarnings);
        console.log(this.totalEarnings);
      }
      // this.totalEarnings = Math.ceil(this.totalEarnings);
      // console.log(this.totalEarnings);
      
    }, error: (err) => {
        console.error(err);
      }

  });

  // games > [ {id, ...}, {id, ...}, {} ]

  }
  
  ngOnInit(): void {

    // let observer = {
    //   next:(data:string) => {
    //     this.ShownAd = data
    //     console.log(data);
    //   },
    //   error:(err:string) => {
    //     this.ShownAd = err
    //     console.log(err);
    //   },
    //   complete:() => {
    //     this.ShownAd = "Ads Finished"
    //     console.log("Ads Finished");
    //   }
      
    // };
    
    // let MyAds=this.homeAds.getSquenceAds(1);
    // let ad=MyAds.subscribe(observer);
    // this.subscription.push(ad)
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();

    // for(let sub of this.subscription){
    //   sub.unsubscribe();
    // }
  }

  // chart area
  // Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#858796';

// function number_format(number, decimals, dec_point, thousands_sep) {
//   // *     example: number_format(1234.56, 2, ',', ' ');
//   // *     return: '1 234,56'
//   number = (number + '').replace(',', '').replace(' ', '');
//   var n = !isFinite(+number) ? 0 : +number,
//     prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
//     sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
//     dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
//     s = '',
//     toFixedFix = function(n, prec) {
//       var k = Math.pow(10, prec);
//       return '' + Math.round(n * k) / k;
//     };
//   // Fix for IE parseFloat(0.55).toFixed(0) = 0;
//   s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
//   if (s[0].length > 3) {
//     s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
//   }
//   if ((s[1] || '').length < prec) {
//     s[1] = s[1] || '';
//     s[1] += new Array(prec - s[1].length + 1).join('0');
//   }
//   return s.join(dec);
// }

// // Area Chart Example
// var ctx = document.getElementById("myAreaChart");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//     datasets: [{
//       label: "Earnings",
//       lineTension: 0.3,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '$' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: false
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

  // 

}
