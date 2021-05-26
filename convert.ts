import { Component, Inject } from '@angular/core';

export class ConvertComponent implements OnInit {

    constructor(){}
     ngOnInit() {
        this.getBase64ImageFromUrl('Your Image Url')
          .then(result => {
              this.imageChangedEvent = dataurl;
              this.imageSelected = true;
          })
          .catch(err => console.error(err));
     }

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






