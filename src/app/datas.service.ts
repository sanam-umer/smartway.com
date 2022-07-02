import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor() { }

  serviceDetails = [
    {
      id:1,
      serviceName:"City Ride",
      serviceDetails:"Looking for a taxi in the city you are staying in? Contact us and we will help you in a minute. Our City ride services are available in Qatar, for all visitors that come for business or private occasions.",
    
      serviceImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnrCtWv_k_eDACqG6zqWpMeypu4kHp5X8tw&usqp=CAU"
    },
    {
      id:2,
      serviceName:"Day Trip",
      serviceDetails:"Want to make an excursion around Qatar? Tourist day trip or business day travel? We can arrange a reliable driver that will drive you to the destination and wait for you to take you back to the departure point.",
    
      serviceImg:"https://qph.cf2.quoracdn.net/main-qimg-1b34573b5a53d15943cfd040507dc0e7-lq"
    },
    {
      id:3,
      serviceName:"Airport Transfer",
      serviceDetails:"More economical than parking and more convenient than shuttle service, when traveling to and from Qatar International Airport. Call us when you return to Qatar Airport for a prompt pickup..",
    
      serviceImg:"https://sx-content-labs.sixt.io/thirdlight/seo/branches/content_airport_transfer_1.jpg"
    },
    {
      id:4,
      serviceName:"Door to Door service",
      serviceDetails:"we will pick you up at your home or office and take you to any destination within the region.",
    
      serviceImg:"https://qph.cf2.quoracdn.net/main-qimg-ccf1262b34d82acd51eeede7529f39e7-lq"
    },
    {
      id:5,
      serviceName:"Desert Safari",
      serviceDetails:"Doha desert safari offers a variety of tours that allow you to see and explore Qatar's inland sea. Have fun and adventourous ride around the desert with us.",
      serviceImg:"https://media.tacdn.com/media/attractions-splice-spp-674x446/09/91/34/59.jpg"
    },
    
  ]


  

}

