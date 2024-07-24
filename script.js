document.getElementById('kodamForm').addEventListener('submit', function(e){
    e.preventDefault();

    const nama = document.getElementById('namaLengkap').value;

    if(nama.trim()=== ''){
        alert('Mohon Masukkan Nama Anda!');
        return;
    }

    const kodam = generateKodam(nama);

    document.getElementById('hasil').innerHTML = `<p>Hai, ${nama} <br> Kodam kamu: <i>"${kodam}"</i> </p>`;
    
    document.getElementById("output").innerHTML ='<i>"Percumah punya kodam, kalo gak punya someone to talk 😣"</i>';

    document.getElementById('namaLengkap').value ="";
  
})

function generateKodam(nama){
    const kodam = [
        'Nyamuk Gendut',
        'Pocong Ngantuk',
        'Genderuwo Nyanyi Dangdut',
        'Kuntilanak Penakut',
        'Wewe Gombel Penjual Cilok',
        'Jinn Cilik Pencinta Upin Ipin',
        'Tuyul Malas Bekerja',
        'Pocong Fashionista',
        'Genderuwo Penari Jaipong',
        'Kuntilanak Pengemar K-Pop',
        'Wewe Gombel Penjual Gorengan',
        'Pocong Siluman',
        'Tuyul Pencinta Es Krim',
        'Pocong Youtuber',
        'Genderuwo Stand Up Comedian',
        'Kuntilanak TikTokers',
        'Wewe Gombel Influencer',
        'Jinn Cilik Hacker',
        'Tuyul Trader Saham',
        'Pocong Vlogger',
        'Genderuwo Content Creator',
        'Kuntilanak Ngantuk',
        'Wewe Gombel Beauty Vlogger',
        'Jin Cilik Youtuber Gaming',
        'Tuyul Investor Bitcoin'
    ];

    const index = document.getElementById("namaLengkap").innerHTML =
    Math.floor(Math.random() * 25);
    return kodam[index];
}