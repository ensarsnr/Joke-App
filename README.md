## Arkadaşını işletme uygulaması.
###  Arkadaşlarına yapabileceğin güzel bir şaka uygulaması yaptım. Uygulama çok basit ve üzerinde geliştirmelerin yapılması gerekiyor. Ben Firebase'den aldığım hosting ile yaptım sizde isterseniz repoyu indirdikten sonra kendi Firebase hesabınızı oluşturup kullanabilirsiniz.
```
// Repoyu indirirseniz ve çalışmazsa aşağıdaki komutu deneyebilirsiniz.
npm install
```
### Firebase dosyasını kendinize göre değiştirmeniz gerekiyor. 

```

// Import the functions you need from the SDKs you need 
 import { initializeApp } from "firebase/app"; 
 import {getAuth} from 'firebase/auth' 
 import { getFirestore } from "firebase/firestore"; 
 // TODO: Add SDKs for Firebase products that you want to use 
 // https://firebase.google.com/docs/web/setup#available-libraries 
  
 // Your web app's Firebase configuration 
 const firebaseConfig = { 
// Burayı kendinize göre özelleştirin. 
   apiKey: "", 
   authDomain: "", 
   projectId: "", 
   storageBucket: "", 
   messagingSenderId: "", 
   appId: "" 
 }; 
  
 // Initialize Firebase 
 const app = initializeApp(firebaseConfig); 
 export const auth = getAuth(app); 
 export const db = getFirestore(app);
```


##

### Giriş ve kayıt olma sayfaları. İlk başta kayıt olmanız gerekiyor sonrasında hesabınız local'de saklandığı için sürekli giriş yapmanız gerekmiyor.
![Screenshot from 2023-07-01 18-28-23](https://github.com/NapolyonNereli/Joke-App/assets/113799443/13d79fe3-ab14-43de-8a31-5a63fba31e57)
![Screenshot from 2023-07-01 18-28-32](https://github.com/NapolyonNereli/Joke-App/assets/113799443/0fbe80d4-5ca3-4966-be81-2fd3e7cf0327)
##
### Kayıt olduktan sonra bu sayfa açılacak ve isterseniz sağ üstten çıkış butonuna basıp local'den de verileri silebilirsiniz.
#### Bu sayfa açıldıktan sonra arkadaşınıza linki attıktan sonra bekleyin ilk mesaj ondan gelsin, mesaj geldikten sonra gerisi sizin haya gücünüze ve mükemmel yeteneğinize kalmış olacak.
![Screenshot from 2023-07-01 18-28-51](https://github.com/NapolyonNereli/Joke-App/assets/113799443/e061e643-9f4e-40f0-9b3a-645e7f06719b)
##
### Mesaj geldiğinde de böyle bir görüntü olacak ve muhabbetiniz devam edecek.
![Screenshot from 2023-07-01 18-30-49](https://github.com/NapolyonNereli/Joke-App/assets/113799443/20816342-84e3-4715-b8f4-f7af75cdf86b)
##

