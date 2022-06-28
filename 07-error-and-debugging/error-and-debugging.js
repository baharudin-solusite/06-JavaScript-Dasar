/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// JAWABAN SOAL NO 1

// - TypeError adalah exception yang terjadi saat dilakukan eksekusi terhadap suatu operasi atau fungsi dengan tipe objek yang tidak sesuai.
// - kesalahan referensi muncul terutama ketika sebuah kode mencoba untuk mereferensikan variabel yang tidak ada
// - RangeError dilempar saat mencoba memberikan nilai sebagai argumen ke fungsi yang tidak mengizinkan rentang yang menyertakan nilai .
// - Syntax error bisa disamakan dengan kesalahan tata bahasa atau gramatika.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

// JAWABAN SOAL NO 2

// - Error console
// - Syntax error
// - Terjadinya Error karena letak Variabel yang awalnya sebelum console.log, malah diletakan sesudah console.log