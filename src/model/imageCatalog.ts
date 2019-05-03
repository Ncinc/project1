export class imageCatalog {

    imageIndex: number = 0;
    bike: string = "http://im.rediff.com/getahead/2018/jul/06kawasaki-ninja-h2.jpg";
    plane: string = "https://www.previewsworld.com/SiteImage/CatalogImage/STL060053?type=1";
  
    constructor (imageIndex, bike, plane) {
            this.imageIndex = imageIndex;
            this.bike = bike;
            this.plane = plane;
    }


   

  }
//   imgArry = [this.bike, this.plane];
//   function imgChange() {
//     if( imgArry){
//         1+1
//     }
// }