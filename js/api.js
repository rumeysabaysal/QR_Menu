//1.API'ya (db.json'a) istek atıp verileri alacağım fonksiyonu oluşturuyorum. Bunu export edip main.js'de import ediyorum.

const fetchMenu = async()=>{
    //db.json'a istek
    const res = await fetch("../db.json");
    //db.json'dan gelen verileri js nesnesine çevir
    const data = await res.json();
    //data içerisindeki menü dizisini return et.(çünkü map ile dönsem hata alırım, neden çünkü bu bir array. o yüzdne bu şekilde dönüyorum)
    return data.menu;

}






export default fetchMenu;