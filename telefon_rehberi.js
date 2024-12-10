// İsim ve numara bilgilerini içeren bir rehber yap.
// Kullanıcıya kişi ekleme, kişi bulma ve kişi silme seçenekleri sun.


const kullaniciBilgi = [
    {
        ad: "Emre",
        telefonNo: "0544195"
    },
    {
        ad: "Görkem",
        telefonNo: "0530456"
    },
    {
        ad: "Emir",
        telefonNo: "0537321"
    }
];
let kullaniciSecenek = prompt("Hangi işlemi yapmak istiyorunuz \n Kişi ekleme \n Kişi bulma \n Kişi silme").toLocaleLowerCase("tr");
if(kullaniciSecenek === "kişi ekleme"){
    let yeniKisi = prompt("İsim giriniz");
    let yenikisiNo = Number(prompt("Telefon numarasını giriniz"));
    kullaniciBilgi.push({
        ad: yeniKisi,
        telefonNo: yenikisiNo
    });
    alert("Kişi başarıyla eklendi")
    console.log(kullaniciBilgi);
}
else if(kullaniciSecenek === "kişi bulma"){
    let kisiBul = prompt("Kişi ismini giriniz.");
    for (let index = 0; index < kullaniciBilgi.length; index++) {
        const kullanici = kullaniciBilgi[index];
         if(kullanici.ad === kisiBul){
            alert(`${kisiBul} isimli kişinin ${kullanici.telefonNo} numarasını buldunuz`);
         }
    }
}
else if(kullaniciSecenek === "kişi silme"){
    let kullaniciSil = prompt("Hangi kişiyi silmek istiyorsunuz \n Emre \n Görkem \n Emir");

        for (let index = 0; index < kullaniciBilgi.length; index++) {
            const kullanici = kullaniciBilgi[index];
            if(kullanici.ad === kullaniciSil){
                kullaniciBilgi.splice(index, 1);
                alert("Kullanıcı silindi");
                console.log(`Silinen kişi: ${kullaniciSil}`);
                
            }
            
        }
        console.log(kullaniciBilgi);
    }
else{
    alert("Geçersiz bir seçenek girdiniz.");
}