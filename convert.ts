import { Component, Inject } from '@angular/core';

export class ConvertComponent implements OnInit {

    constructor(){}
     ngOnInit() {
        //Pass Image Url
        this.getBase64ImageFromUrl('Your Image Url')
          .then(result => {
              console.log("result ============>>>>>",result); //Get Base64 Url
          })
          .catch(err => console.error(err));
     }
    
    //Convert Url To Base64
    getBase64ImageFromUrl(imageUrl) {
        var res = await fetch(imageUrl);
        var blob = await res.blob();

        return new Promise((resolve, reject) => {
          var reader  = new FileReader();
          reader.addEventListener("load", function () {
              resolve(reader.result);
          }, false);

          reader.onerror = () => {
            return reject(this);
          };
          reader.readAsDataURL(blob);
        })
    }
}






