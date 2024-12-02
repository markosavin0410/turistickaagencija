   //jquery
    $(document).ready(() => {
        $('#listaPitanja > ul> li > p').hide();
        $('#listaPitanja >ul> li').click(function(e) {
            e.stopPropagation();
            $(this).find('p').slideToggle('fast');
        });

        $('.readmore').hide();
        $('.btnRM').click(function (e){
            e.stopPropagation();
            var $readmore =  $(this).parent().prev('.readmore');
            
            if ($readmore.is(':visible')){
                $(this).val('Saznaj vise')
                $readmore.slideToggle('fast');
            }else{
                
                $('.readmore').slideUp('fast');
                $('.btnRM').val('Saznaj vise')
                $(this).val('Prikazi manje')
                $readmore.slideToggle('fast');
                
            }
                
            
        
        })
        $('.rezBtns').hover( function() {
            $(this).css('background-color', '#4663ac');
        },
        function() {
            $(this).css('background-color', '');
        },
    )
        $('.rezBtns').click(function () {
            var rezervacija = $('#reservation').offset().top;
            var visinaProzora = $(window).height();
            var visinaRez = $('#reservation').outerHeight();
            var scrollTo = rezervacija - (visinaProzora / 2) + (visinaRez / 2);
            $('html, body').animate({
                scrollTop: scrollTo
              
            }, 100);
            var broj=this.id;
            for (let i = 0; i < ddl.options.length; i++) {
                if (ddl.options[i].value == broj) {
                    ddl.selectedIndex=i;
                }
            }

        
          });
          $('.btn1').click(function () {
            var kontakt = $('#kontakt').offset().top;
            var visinaProzora = $(window).height();
            var visinaKon = $('#kontakt').outerHeight();
            var scrollTo = kontakt - (visinaProzora / 2) + (visinaKon / 2);
            $('html, body').animate({
                scrollTop: scrollTo
              
            }, 100);
           

        
          });
          //hover heroButton
          $('.buttonHero').hover(function(){
            $('.buttonHero').css('background-position',' right center')
            $('.buttonHero').css('color','white');
          },function(){
            $('.buttonHero').css('background-position','left center');
            $('.buttonHero').css('color','black');
          }
        )

        //javascript
        var counter1 = 3190;
        var counter2=0;
        var interval = setInterval(function() {
            counter1++;
            $('#zadovoljniBroj').text(counter1+'+');

            // Zaustavi brojač kada dostigne 3200
            if (counter1 >= 3300) {
                clearInterval(interval);
            }
        }, 10); 
        var interval2 = setInterval(function() {
            counter2++;
            $('#putovanjaBroj').text(counter2+"+");

            // Zaustavi brojač kada dostigne 160
            if (counter2 >= 110) {
                clearInterval(interval2);
            }
        }, 10); 
        $('.recomendedCard').hover(
            function() {
                $(this).find('.dugme').css("transform", "translateY(-400%)"); 
                $(this).find('.dugme').find('input').css({"width" : "150px" , "height" : "50px","font-size" : "1.3rem" }); 
            }, 
            function() {
                $(this).find('.dugme').css("transform", "translateY(0px)");
                $(this).find('.dugme').find('input').css({"width" : "100px" , "height" : "40px","font-size" : "1.0rem" });
            }
          );
    });


let nizHeroSlika=['barselona','milano','kolmar']; //pocetak slajdera
let slika=document.getElementById("slider-img");
let index = 0;

    function promeniSliku() {
        slika.style.backgroundImage = 'url("./img/' + nizHeroSlika[index] + '.jpg")';
        index = (index + 1) % nizHeroSlika.length;
    }
    promeniSliku();
    setInterval(promeniSliku, 2000)   //kraj slajdera

    var scrollUp=document.getElementById("scrollUp"); //scrollUp dugme
    scrollUp.style.display='none';
    window.addEventListener("scroll",()=>{
        if (window.scrollY > 500) {
            scrollUp.style.display = 'flex'; 
        } else {
            scrollUp.style.display = 'none';  
        }
    }) // kraj Srollup Dugme

//dodavanje navigacionog menija

var nav=["Početna","O nama","Ponuda","Kontakt","O autoru"];
var navlinks=["#","#onama","#newyear","#kontakt","oautoru.html"];
var navbar=document.getElementById("navbarNav");
var ul=document.createElement("ul");
navbar.appendChild(ul);
ul.classList.add("navbar-nav","ms-auto");
for (i in nav){
    var li=document.createElement("li");
    li.classList.add("nav-item",'nav-item','mt-4','mt-md-0');
    var a=document.createElement("a");
    a.classList.add("navLink");
    a.href=navlinks[i];
    a.textContent=nav[i];
    li.appendChild(a);
    ul.appendChild(li);

}
//counter



//dodavanje kartica "preporuke"

var recommended=document.getElementById("recommended");
var red=document.createElement("div");
red.setAttribute("class","row");

recommended.appendChild(red);

var hoteli=["Hotel La cucaraca, Barselona","Snežni konak, Kopaonik","Hotel SunRise, Nica","Hotel Flora, Maldivi","Hotel Africa, Tunis","Hotel Eiffel, Hurgada"];
var slikeHotela=["barselona2","kopaonik","nica","maldivi","tunis","egipat"];
var opisi=["Hotel se nalazi 300 metara od plaze opremljen je sa spa centrom, bazenom, barom. U cenu noćenja ulazi dorucak, večera i besplatno korišćenje bazena.",
           "Smeštaj se nalazi u centru, u blizini glavnih skijaških staza. U cenu su ukljuceni doručak i večera kao i korišćenje otvorenog bazena sa toplom vodom.",
           "Ovaj luksuzni hotel se nalazi nedaleko od glavne luke u Nici. U cenu noćenje je ukljuceno neograničeno hrane, pica i alkoholnih pića kao i bazeni i sauna.",
           "Ovaj raj na zemlji se nalazi na samoj obali ostrva, gledanje zalaska sunca kao iz snova i uzivanje u najlepšem moru na svetu pružiće Vam naši apartmani.",
           "Smeštaj se nalazi 100 metara od plaže odvojen od grada i gradske buke, pun pansion, noćne i dnevne zurke na plaži omogućiće Vam boravak u ovom hotelu.",
           "Dobro poznati hotel po svojoj lepoti i usluzi ce Vam pružiti neverovatno opuštanje u spa centru i bazenu, kao i mogućnost korišćenja teretane na otvorenom."
        ];
var cene=["44","20","59","99","53","43"];
var brZvezdica=[4,3,5,5,4,4];
for(var i = 0; i < hoteli.length; i++){
    var div=document.createElement("div");
    div.classList.add("col-12","col-sm-6","col-md-6","col-lg-4","p-md-4","p-sm-1","p-4");
    
    var divRc=document.createElement("div");
    divRc.setAttribute("class","recomendedCard");
    div.appendChild(divRc);
    var img=document.createElement("img");
    img.src='./img/'+slikeHotela[i]+'.jpg';
    img.alt=slikeHotela[i];
    img.setAttribute("class","slika");
    divRc.appendChild(img);
    var aboutHotel=document.createElement("div");
    aboutHotel.classList.add('abouthotel','p-3','mt-3');
    var naslov=document.createElement("h5");
    naslov.textContent=hoteli[i];
   aboutHotel.appendChild(naslov);
   var opis=document.createElement("p");
    opis.textContent=opisi[i];
   aboutHotel.appendChild(opis);
   var span=document.createElement("span");
   span.setAttribute("class","price");
   span.textContent=cene[i] + "\u20AC";
   aboutHotel.appendChild(span);
   var span1=document.createElement("span");
   span1.setAttribute("class","npp");
   span1.textContent="noc/osoba";
   aboutHotel.appendChild(span1);
   
   divRc.appendChild(aboutHotel);
   var section=document.createElement("section");
   for (var j=0;j<brZvezdica[i];j++){
    var star=document.createElement("i");
    star.setAttribute("class","fa fa-star");
    section.appendChild(star);
   }
   aboutHotel.appendChild(section);
   var btn=document.createElement("div");
   btn.setAttribute("class","dugme");
   var rezbtn=document.createElement("input");
   rezbtn.type="button";
   rezbtn.value="Rezervisi";
   rezbtn.id=slikeHotela[i];
   rezbtn.classList.add("rezBtns")
   btn.appendChild(rezbtn);
   aboutHotel.appendChild(btn);
   red.appendChild(div);
}

//rezervacija
function greska(element,string){
    element.nextElementSibling.textContent=string;
        element.style.border="1px solid red";
}
function nijegreska(element){
    element.nextElementSibling.textContent='';
    element.style.border="none";
}
var mailinput=document.getElementById("reservationEmail");
var ddl=document.getElementById("selectHotel");
var opt=document.createElement("option");
opt.value=0;
opt.textContent='Izaberite smeštaj';
ddl.appendChild(opt);
for (i in hoteli){
    var opt=document.createElement("option");
     opt.value=slikeHotela[i];
    opt.textContent=hoteli[i];
    ddl.append(opt);
}
  //obrada prve forme
var datumP=document.getElementById("datumPolaska");
const danas = new Date();
const godina = danas.getFullYear();
const mesec = String(danas.getMonth() + 1).padStart(2, '0'); 
const dan = String(danas.getDate()).padStart(2, '0'); 

const podrazumevaniDatum = `${godina}-${mesec}-${dan}`;

var brOsoba=document.getElementById("brOsoba");
datumP.value = podrazumevaniDatum;
var cb=document.getElementById("cbReservation");
var datumpovratka=document.getElementById("datumPovratka");
var cbparent=document.getElementById("cbParent");
const regMailRez=/^[a-z][\w\.]+\@[a-z0-9]{3,20}(\.[a-z]{3})?(\.[a-z]{2,3})$/;

var rezBtn=document.getElementById("rezBtn").addEventListener('click',()=>{
    var brgresaka=0;
    if (!mailinput.value){
        greska(mailinput,"morate uneti mail adresu");
        brgresaka++;
    }
    else if(!regMailRez.test(mailinput.value)){
        greska(mailinput,"mail mora biti u ispravnom formatu");
        brgresaka++;
      }
     else{
    nijegreska(mailinput);
    }
    if (brOsoba.value>=1 && brOsoba.value<=8){
        nijegreska(brOsoba);

    }
    else{
        greska(brOsoba,"najmanje 1 a najvise 8 osoba");
        brgresaka++;
    }
    if(!ddl.selectedIndex){
        greska(ddl,"morate izabrati smeštaj");
        brgresaka++;
    }
    else{
        nijegreska(ddl);
    }
  if(!datumpovratka.value){
    greska(datumpovratka,"morate uneti datum povratka");
    brgresaka++;
  }
  else if(datumpovratka.value<datumP.value){
    greska(datumpovratka,"datum povratka mora biti nakon polaska");
    brgresaka++;
  }
  else{
  nijegreska(datumpovratka);
  }
  if (datumP.value<podrazumevaniDatum){
    greska(datumP,"datum polaska ne sme biti u prošlosti");
    brgresaka++;

  }
  else{
    nijegreska(datumP);
  }
    if (!cb.checked){
        cbparent.nextElementSibling.textContent="ovo polje je obavezno";
        brgresaka++;
    }
    else{
        cbparent.nextElementSibling.textContent="";
    }
    if (!brgresaka){
        document.getElementById("rezBtn").parentElement.previousElementSibling.textContent = "Poslat Vam je mejl o potvrdi rezervacije.";
    }
    else{
        document.getElementById("rezBtn").parentElement.previousElementSibling.textContent = "";
    }
})
ddl.addEventListener("change",()=>{
    if(ddl.selectedIndex) nijegreska(ddl);
})



//dinamicko dodavanje kartica ekskurzije

var eksSection=document.getElementById("zimskeEkskurzije");
var red=document.createElement("div");
red.setAttribute("class","row");
eksSection.appendChild(red);
var slikeEks=["amsterdam","london","moskva","kolmar","hamburg","bec"];
var gradEks=["Amsterdam, Holandija","London, Engleska","Moskva, Rusija","Kolmar, Francuska","Hamburg, Nemacka","Bec, Austrija"];
var datumEks=["29.12 - 2.1","27.12 - 2.1","20.12 - 17.12","1.1 - 5.1","5.1 - 9.1","1.2 - 5.2"];
var ceneEks=["250","499","740","119","99","111"];
var planoutaniz=["Polazak autobusom iz Beograda, prolazak kroz Novi Sad i kroz Budimpeštu, 1 noćenje u beču, kada se stigne u Amsterdam u smeštaj sledi ručak a nakon toga fakultativni izlet sa vodičem koji će vas voditi kroz celo putovanje.",
                "Polazi se sa aerodroma Nikola Tesla, cena povratne karte je uključena u cenu, kao i izleti po Londonu, cena karte za novogodišnju žurku se doplaćuje 50 evra. Povratak je sa glasvnog aerodroma u Londonu direktno za Beograd.",
                "Polazi se sa aerodroma Nikola Tesla, cena povratne karte je uključena u cenu, kao i izleti u Moskvi, cena karte za novogodišnju žurku se doplaćuje 50 evra. Povratak je sa glavnog aerodroma u Moskvi sa presedanjem u Varšavi za Beograd.",
                "Kreće se sa glavne autobuske stanice u Beograd, sutradan uveče se stiže u ovaj prelep gradić sa neverovatnom novogodišnjom atmosferom. Izleti sa vodičem se doplaćuju 10 evra.",
                "Polazak sa autobuske stanice u Beogradu, dva dana traje put i u povratku se posećuje Berlin, U Hamburgu se sa vodičem obilazi ceo grad, povratak je sa autobuske stanice u Hamburgu",
                "Kreće se sa glavne autobuske stanice u Beogradu, posećuje se u dolasku Budimpešta (slobodno vreme 2 sata u Budimpešti), dolazak u Beč ispred hotela i večera, a sutradan izlet sa vodičem."

];
for (var i = 0; i < gradEks.length; i++){
    var col=document.createElement("div");
    col.classList.add('col-12','col-sm-6','col-md-6','col-lg-4','p-md-4','p-sm-1','p-4');
    
    var eksCard=document.createElement("div");
    eksCard.setAttribute("class","eksCard");
    col.appendChild(eksCard);
    var slikaGrad=document.createElement("img");
    slikaGrad.src='./img/2'+slikeEks[i]+'.jpg';
    slikaGrad.alt=slikeEks[i];
    slikaGrad.setAttribute("class","slikaEks");
    eksCard.appendChild(slikaGrad);
    var abouteks=document.createElement("div");
    eksCard.appendChild(abouteks);
    abouteks.classList.add("p-3","mt-3");
    var naslovEks=document.createElement("h5");
    naslovEks.textContent=gradEks[i];
    abouteks.appendChild(naslovEks);
    var datumE=document.createElement("p");
    datumE.textContent=datumEks[i];
    abouteks.appendChild(datumE);
    // togle
   

    var cena=document.createElement("p");
    abouteks.appendChild(cena);
    var cenaspanEks=document.createElement("span");
    cenaspanEks.setAttribute("class","price");
    cenaspanEks.textContent='od '+ceneEks[i]+"\u20AC";
    cena.appendChild(cenaspanEks);

     var planputa=document.createElement("p");
    planputa.textContent=planoutaniz[i];
    planputa.setAttribute("class","readmore");
    abouteks.appendChild(planputa);

    var dvaDugmeta=document.createElement("div");
    dvaDugmeta.setAttribute("class","dugme");
    abouteks.appendChild(dvaDugmeta);
    
    var dugmeRezEks = document.createElement('input');
    dugmeRezEks.type='button';
    dugmeRezEks.classList.add('btn','btn1');
    dugmeRezEks.value='Rezervisi';
    dugmeRezEks.id="btnRez"+slikeEks[i];
    dvaDugmeta.appendChild(dugmeRezEks);

    var dugmReadMore = document.createElement('input');
    dugmReadMore.type='button';
    dugmReadMore.classList.add('btn','btn2');
    dugmReadMore.value='Saznaj vise';
    dugmReadMore.classList.add("btnRM");
    dvaDugmeta.appendChild(dugmReadMore);

    red.appendChild(col);
}

//validacija druge forma

var cimeprezime=document.getElementById('contactImePrezime');
var cMail=document.getElementById('cMail');
var cBrojTel=document.getElementById("Brojtelefona");
var pitanje=document.getElementById("pitanje");

const regPhone=/^[+][0-9]{8,13}$/
const regImePrezime=/^[A-ZČĆŽĐŠ][a-čćžđš]{2,10}([\s][A-ZČĆŽĐŠ][a-čćžđš]{2,10})+$/;
document.getElementById("contactBtn").addEventListener("click",()=>{
    var brgresaka=0;
    if(!cimeprezime.value){
        greska(cimeprezime,"morate uneti ime i prezime");
        brgresaka++;
    }
    else if(!regImePrezime.test(cimeprezime.value)){
        greska(cimeprezime,"neispravan format");
        brgresaka++;
    }
    else nijegreska(cimeprezime);
    
    if (!cMail.value) {
        greska(cMail,"morate uneti Vaš mail");
        brgresaka++;

    }
        else if(!regMailRez.test(cMail.value)) {
            greska(cMail,"mail mora biti u ispravnom formatu");
            brgresaka++;

        }
            else nijegreska(cMail);
    if (!cBrojTel.value) {
        greska(cBrojTel,"morate uneti broj telefona");
        brgresaka++;
    }
        else if(!regPhone.test(cBrojTel.value)) {
            greska(cBrojTel,"neispravan format");
            brgresaka++;
        }
            else nijegreska(cBrojTel);
        if (!pitanje.value) {
            greska(pitanje,"postavite pitanje");
            brgresaka++;
        }
        else{
            nijegreska(pitanje);
        }
       if (!brgresaka){
            document.getElementById("contactBtn").parentElement.previousElementSibling.textContent = "Ocekujte odgovor na mejl.";
        }
        else{
            document.getElementById("contactBtn").parentElement.previousElementSibling.textContent = "";
        }
    });
   
 
