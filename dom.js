window.onload = function() { fungsiSaya(); }

function fungsiSaya() {

	/* DI BAWAH INI MERUPAKAN CONTOH PENGGUNAAN DOCUMENT OBJECT MODEL (DOM) */
	a = document.getElementsByTagName("title")[0].firstChild;
	a.nodeValue = "UMN";
	
	b = document.getElementById("footer").getElementsByTagName("p")[0].firstChild;
	b.nodeValue = "&copy;2019 UMN Students";
	
	/* TULISKAN SCRIPT ANDA DI SINI */
	var home = document.getElementById("menu").getElementsByTagName("a")[0].firstChild;
	home.nodeValue = "Utama";
	
	var blog = document.getElementById("menu").getElementsByTagName("a")[1].firstChild;
	blog.nodeValue = "Prodi";
	
	var social = document.getElementById("menu").getElementsByTagName("a")[2].firstChild;
	social.nodeValue = "Akademis";

	var styles = document.getElementById("menu").getElementsByTagName("a")[3].firstChild;
	styles.nodeValue = "Beasiswa";

	var features = document.getElementById("menu").getElementsByTagName("a")[4].firstChild;
	features.nodeValue = "Kegiatan";

	var contact = document.getElementById("menu").getElementsByTagName("a")[5].firstChild;
	contact.nodeValue = "Berita";

	var menu = document.getElementsByTagName("ul")[0];
	var menuBaru = document.createElement('li');
	var amenuBaru = document.createElement('a');
	amenuBaru.href = '#';
	amenuBaru.innerText = 'Kontak';
	menuBaru.appendChild(amenuBaru);
	menu.appendChild(menuBaru);
	
	sambut = document.getElementById("intro").firstChild;
	sambut.nodeValue = "Selamat datang di Universitas Multimedia Nusantara, Kampus Lokal dengan Kualitas Internasional";

	jurusanSI = document.getElementById("page-content").getElementsByTagName("a")[0].firstChild;
	jurusanSI.nodeValue = "Jurusan Sistem Informasi";

	var image1 = document.getElementsByClassName("post-attachment")[0];
	image1.src = "images/jurusan_si.jpg";

	var teks1 = document.getElementsByClassName("post")[0].getElementsByTagName('p')[0];
	teks1.innerHTML = "Jurusan ini mempelajari tentang bagaimana membangun dan menerapkan teknologi informasi dengan proses bisnis yang ada saat ini, sehingga suatu bisnis akan dapat dengan efektif mencapai tujuannya dengan menerapkan IT dalam bisnis.";
	var teks2 = document.getElementsByClassName("post")[0].getElementsByTagName('p')[1];
	teks2.remove();

	jurusanTI = document.getElementById("page-content").getElementsByTagName("a")[1].firstChild;
	jurusanTI.nodeValue = "Jurusan Teknik Informatika";

	var image2 = document.getElementsByClassName("post-attachment")[1];
	image2.src = "images/jurusan_ti.jpg";

	var teks3 = document.getElementsByClassName("post")[1].getElementsByTagName('p')[0];
	teks3.innerHTML = "Jurusan ini mempelajari tentang bagaimana mengembangkan computer vision, robotica, intelligence system, dan hal-hal lainnya yang terkait dengan pengembangan komputer di masa yang akan datang.";
	var teks4 = document.getElementsByClassName("post")[1].getElementsByTagName('p')[1];
	teks4.remove();
	
	var h5_1 = document.getElementsByTagName('h5')[0];
	h5_1.innerHTML = "Pencarian";

	var h5_2 = document.getElementsByTagName('h5')[1];
	h5_2.innerHTML = "Jurusan";
	var si = document.getElementsByClassName("sidebox")[1].getElementsByTagName("a")[0].firstChild;
	si.nodeValue = "Sistem Informasi";
	var ti = document.getElementsByClassName("sidebox")[1].getElementsByTagName("a")[1].firstChild;
	ti.nodeValue = "Teknik Informatika";
	var ilkom = document.getElementsByClassName("sidebox")[1].getElementsByTagName("a")[2].firstChild;
	ilkom.nodeValue = "Ilmu Komunikasi";
	

	var list = document.getElementsByClassName("list")[0];
	var jurusanBaru1 = document.createElement('li');
	var jurusanBaru2 = document.createElement('li');
	var jurusanBaru3 = document.createElement('li');
	var ajurusanBaru1 = document.createElement('a');
	var ajurusanBaru2 = document.createElement('a');
	var ajurusanBaru3 = document.createElement('a');
	ajurusanBaru1.href = '#';
	ajurusanBaru2.href = '#';
	ajurusanBaru3.href = '#';
	ajurusanBaru1.innerText = 'Manajemen';
	ajurusanBaru2.innerText = 'Akuntansi';
	ajurusanBaru3.innerText = 'Broadcasting';
	jurusanBaru1.appendChild(ajurusanBaru1);
	jurusanBaru2.appendChild(ajurusanBaru2);
	jurusanBaru3.appendChild(ajurusanBaru3);
	list.appendChild(jurusanBaru1);
	list.appendChild(jurusanBaru2);
	list.appendChild(jurusanBaru3);
	


	var h5_3 = document.getElementsByTagName('h5')[2];
	h5_3.innerHTML = "Lowongan Pekerjaan";
	var programmer = document.getElementsByClassName("sidebox")[2].getElementsByTagName("a")[0].firstChild;
	programmer.nodeValue = "programmer";
	var designer = document.getElementsByClassName("sidebox")[2].getElementsByTagName("a")[1].firstChild;
	designer.nodeValue = "designer";
	var konsultan = document.getElementsByClassName("sidebox")[2].getElementsByTagName("a")[2].firstChild;
	konsultan.nodeValue = "konsultan";
	var analyst = document.getElementsByClassName("sidebox")[2].getElementsByTagName("a")[3].firstChild;
	analyst.nodeValue = "analyst";


	var h5_4 = document.getElementsByTagName('h5')[3];
	h5_4.innerHTML = "UMN";
	var teksSidebar4 = document.getElementsByClassName("sidebox")[3].getElementsByTagName('p')[0];
	teksSidebar4.innerHTML = "UMN adalah kampus terbaik di Tangerang. Ayo bergabung dengan keluarga besar UMN.";
	var teksSidebar5 = document.getElementsByClassName("sidebox")[3].getElementsByTagName('p')[1];
	teksSidebar5.remove();

}