/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

// JAWABAN SOAL NOMER 1

// ---- Ada 2 variable Javascript

//--- Local Scope variabel lokal yang hanya dapat diakses dari dalam fungsi tersebut. Oleh karena itu, Anda tidak dapat menjangkau mereka dari fungsi lain di dokumen Anda. Dan Global Scope variabel yang berada pada luar scope dapat kita akses dari dalam scope 


// --- Scope global dan Scope local

let scopeGlobal = 3;//Global Scope Variabel dapat ditambahkan di dalam / luar scope
const scopeLocal = 80;
if (scopeLocal >= 80){ // Local Scope variabel yang berada didalam scope hanya dapat diakses dari dalam scope tersebuat
    console.log("naik kelas" + scopeGlobal);
}




/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));//Mariah

// JAWABAN SOAL NOMER 1

//---- yang ditampilkan pada consolo tersebut (Mariah)
//---- karena dalam variabel nama tidak memiliki sebuah Parameter nilai didalamnya