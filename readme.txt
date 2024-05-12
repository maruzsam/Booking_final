Tisztelt Tanár Úr!

Telepítéshez npm i, illetve ng serve a clientre és npm start a serverre, ugyanúgy ahogy Ön csinálta, a videókból indultam ki, az volt az alap, az adatbázist pedig én MongoDBcompassban futtattam a default ip-n, porton, ebből kiexportáltam az összes collection-t my_db az adatbázis neve.

Loginhoz példa felhasználók:

Admin user(Étterem vezető):
email: aaasa@aa.com
password: testpw
note: Mivel a feladat nem kérte, ezért csak Guest felhasználókat lehet regisztrálni signuppal.

Guest user(Felhasználó):
email: test@test.com
password: testpw
note: Signuppal lehet regisztrálni új guestet, célszerű is pl. ahhoz a funkcióhoz, hogy lássa, hogy egy adott user milyen foglalásokat csinált a múltban.

Ketté szedném a programot a leírásban,

először vegyük az Admin user-t(Étterem vezető):
Login után a restaurant page fogadja, ahol listázva vannak a restaurantok, létre tud hozni újat, törölni és szerkeszteni tudja illetve van user management.
Restaurant létrehozása: newRestaurantra navigál, ahol egy formon keresztül létre tudunk hozni új restaurantot és nagyon fontos, hogy asztalokat tudunk hozzá rendelni az új restauranthoz.
User management: user-management-re navigál, listázva vannak a userek, illetve az admin itt tud logoutolni.

másodszor vegyük a Guest(Felhasználókat):
Login után a Books page fogadja, ahol listázva vannak az adott éttermek bennük az adott asztalokkal, itt tud a felhasználó egy adott asztalt lefoglalni magának, az éttermeinkben csak vacsoráztatás van, mivel fine diningosak, ezért egy asztalt csak egy fő tud lefoglalni egy napra.
Nyílván látszódik, hogy hány fős asztalok vannak, milyen típusúak, stb.. ez a leírás az éttermeknél is van, hogy pl. van vega étel, csak húsos van, stb... asztaloknál is, hogy kültéri, dohányzó stb...
Itt a guest le tud foglalni magának egy adott asztalt, illetve az első táblázat alatt van mégegy táblázat, ahol a bejelentkezett felhasználó múltbéli foglalásai vannak listázva.
Van egy logut gomb alul.

Ne haragudjon, hogy a videóba így siettem, nem akartam több száz MB-os fájlt, GITre és coospacere sajnos így sem tudom feltölteni, linkelem a google drive elérhetőséget.
Videó:
https://drive.google.com/file/d/1vOYizIlDgUH4ZPXamETU8XfuAfTnoFBi/view?usp=sharing
