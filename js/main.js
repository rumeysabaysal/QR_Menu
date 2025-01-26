import fetchMenu from "./api.js";
import {renderCards , elements} from "./ui.js";

// 2.fetchMenu fonksiyonunu sayfa yüklediğinde çalıştırmam gerektiği  için;

document.addEventListener('DOMContentLoaded', async()=>{
   //sayfa yüklendiğinde api'a isteği at ve gelen veriyi data'ya aktar.
   const data = await fetchMenu();

   //Card elemanlarını render et.
   renderCards(data);

//4.inputlara erişme..
   elements.inputs.forEach((input)=>{
    input.addEventListener('change',()=>{

        // console.log(input);
        //inputun id'sine eriş ve değere ata(selected)
        const selected = input.id;
        //selected değeri ile filtreleme yapıyoruz. Buradaki elemanları da data içerisinde bulmam gerektiği için data.filter olarak devam ediyoruz.

         // 5.Eğer seçili kategori all ise tüm ürünleri render et ama başka bir kategori seçiliyse bu kategorideki ürünleri render et
      if (selected === "all") {
        renderCards(data);
      } else {
        const filtred = data.filter((item)=> item.category == selected);
        // console.log(filtred);

        renderCards(filtred);
    };
   });
  });
});

