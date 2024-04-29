class Pendaftar {
    constructor(nama, umur, uangsangu) {
      this.nama = nama;
      this.umur = umur;
      this.uangsangu = uangsangu;
    }
  }
  
  class Registrasi {
    constructor() {
      this.pendaftararray = [];
    }
  
    addPendaftar(nama, umur, uangsangu) {
      const pendaftar = new Pendaftar(nama, umur, uangsangu);
      this.pendaftararray.push(pendaftar);
      this.fetchPendaftar();
    }

    hitungratarataSangu() {
        let totalsangu = 0;
        for (const pendaftar of this.pendaftararray) {
          totalsangu += pendaftar.uangsangu;
        }
        return totalsangu / this.pendaftararray.length;
      }
    
    hitungratarataUmur() {
        let totalumur = 0;
        for (const pendaftar of this.pendaftararray) {
          totalumur += pendaftar.umur;
        }
        return totalumur / this.pendaftararray.length;
      }
    
    fetchPendaftar() {
        const tabelpendaftar = document.getElementById("tabelpendaftar");
        tabelpendaftar.innerHTML = "";
    
        for (const pendaftar of this.pendaftararray) {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${pendaftar.nama}</td><td>${pendaftar.umur}</td><td>${pendaftar.uangsangu}</td>`;
          tabelpendaftar.appendChild(row);
        }
    
        const rataratasangu = this.hitungratarataSangu();
        const ratarataumur = this.hitungratarataUmur();
    
        document.getElementById("ratauangsangu").textContent = rataratasangu.toFixed(1);
        document.getElementById("rataumur").textContent = ratarataumur.toFixed(1);
      }
    }
  
    const registrasi = new Registrasi();
  
    function inputValidasi() {
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangsangu = parseInt(document.getElementById("uangsangu").value);
  
    if (nama.length < 10) {
      alert("Nama minimal 10 karakter.");
      return false;
    }
  
    if (umur < 25) {
      alert("harap dicheck kembali, umur minimal 25 tahun.");
      return false;
    }
  
    if (uangsangu < 100000){
      alert("Uang sangu kurang, minimal 100 ribu.");
      return false;
    }

    else if (uangsangu > 1000000){
        alert("Uang sangu melebihi batas, maksimal 1 juta.");
        return false;
    }
  
    registrasi.addPendaftar(nama, umur, uangsangu);
    alert("Data berhasil disimpan");
    document.getElementById("FormRegistrasi").reset();
  
    return false;
    }
  
    function pindahTab(nama) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      if (tab.id === nama) {
        tab.classList.add('active-tab');
      } else {
        tab.classList.remove('active-tab');
      }
    });
    }
  