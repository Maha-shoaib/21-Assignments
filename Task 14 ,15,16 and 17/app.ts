let guest_list: string[] = ['akbar' , 'sanam' , 'faiza' , 'ayesha' , 'hoorain', 'arham'];
//for (let i=0; i<guest_list.length; i++){
//    console.log('Dear ' + guest_list[i] + ',\n Join us for dinner at our place! We would love to have you with us. Please let us know if you can make it. Looking forward to seeing you!\n\nThank You' )
 //   }
let not_present : string = 'akbar';
let new_guest : string = 'Jahan ara';
guest_list[0] = new_guest;
//for (let i=0; i<guest_list.length; i++){
   // console.log('\nDear ' + guest_list[i] + ',\n You are invited on tomorrow dinner . Join us for dinner at our place! We would love to have you with us. Please let us know if you can make it. Looking forward to seeing you! \n\tThank You\t' )
  //  }
  //  console.log(`\n Mr. ${not_present} will not coming tomorrow for dinner`)
    guest_list.unshift ('jahangir' , 'rizwan' , 'taha');
   // for (let i=0; i<guest_list.length; i++){
    //    console.log('\nDear ' + guest_list[i] + ',\nJoin us for dinner at our place! we have found big dinner table . We would love to have you with us. Please let us know if you can make it. Looking forward to seeing you! \n\tThank You\t' )
      //  }
      console.log('\nUnfortunately we can not arrange big table, Only two people can join us.')
      while(guest_list.length>2){
        let remove_guest = guest_list.pop();
        console.log(`Sorry Friend ${remove_guest} you are not invited for dinner,`);
      }
     for (let i=0; i<guest_list.length; i++){
    console.log('\nDear ' + guest_list[i] + ',\nJoin us for dinner at our place! we have found big dinner table . We would love to have you with us. Please let us know if you can make it. Looking forward to seeing you! \n\tThank You\t' ) 
 }
 guest_list.splice(0,2)
 console.log(guest_list)