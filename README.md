
# Müşteri Kayıt Paneli Geliştirme Planı

Bu belge, Vue 3, Nuxt 4, Vuetify UI (son sürümler) ve Tailwind CSS kullanarak bir müşteri kayıt paneli oluşturma sürecini adım adım açıklamaktadır.

## Proje Kurulumu ve Bağımlılıklar

1.  **Nuxt 4 Projesi Oluşturma:**
    *   Eğer henüz bir Nuxt projeniz yoksa, aşağıdaki komut ile yeni bir proje oluşturun:
2.  **Bağımlılıkları Yükleme:**
    *   Vuetify ve Tailwind CSS'i projenize ekleyin:
3.  **Nuxt Yapılandırması:**
    *   `nuxt.config.ts` dosyasını açın.
    *   `modules` dizisine `vuetify` ve `@nuxtjs/tailwindcss` modüllerini ekleyin:
*   Vuetify'yi yapılandırın. Genellikle `plugins/vuetify.ts` dosyasında yapılır ve `nuxt.config.ts` içinde tanımlanır.
    *   Tailwind CSS'i `tailwind.config.js` dosyasında yapılandırın. Tema ayarları, eklentiler ve en önemlisi, Tailwind'in stil uygulayacağı dosyaların belirtildiği `content` ayarının doğru olduğundan emin olun. (Mevcut dosyalarınız taranıyor.)
4.  **Vuetify ve Tailwind CSS Etkileşimi Yapılandırması:**
    *   Çakışmaları önlemek için `tailwind.config.js` dosyasında bir önek (`prefix`) tanımlayabilirsiniz. Bu, Tailwind sınıflarınızın önüne belirli bir metin ekler.
    *   Ana CSS dosyanızı (`app/assets/css/main.css`) global stilleriniz varsa `nuxt.config.ts` dosyasında import edin.

## Panel Yapısı ve Bileşenler

1.  **Layout:**
    *   Mevcut `app/layouts/default.vue` layout'unu kullanın.
    *   Bu layout'un içine `app/components/layout/AppHeader.vue` ve `app/components/layout/AppSideBar.vue` bileşenlerinizi entegre edin.
    *   Ana içerik alanını (`<v-main>`) default layout'un içine yerleştirin.
    *   Arka plan rengi için `v-main` bileşenine Tailwind sınıfı `bg-grey-lighten-4` ekleyebilirsiniz veya CSS kullanarak stil verebilirsiniz (Bağlam [1]'deki yoruma göre).
2.  **Sayfalar:**
    *   Müşteri kayıt formu için yeni bir Nuxt sayfası oluşturun: `app/pages/register-customer.vue`.
3.  **Bileşenler:**
    *   Müşteri kayıt formunun kendisi için özel bir Vue bileşeni oluşturun: `app/components/CustomerRegistrationForm.vue`.
    *   Formun karmaşıklığına göre, belirli giriş alanları veya grupları için daha küçük, yeniden kullanılabilir bileşenler oluşturmayı düşünebilirsiniz (örneğin, bir adres bilgileri bileşeni).

## Müşteri Kayıt Formu (`CustomerRegistrationForm.vue`)

1.  **Şablon (Template):**
    *   Form yapısını oluşturmak için `<template>` içinde Vuetify form bileşenlerini kullanın:
        *   `<v-form>`: Formu kapsamak için.
        *   `<v-text-field>`: Metin girişleri (ad, soyad, e-posta vb.) için.
        *   `<v-select>`: Açılır listeler (cinsiyet, ülke vb.) için.
        *   `<v-textarea>`: Çok satırlı metin girişleri (adres, notlar vb.) için.
        *   `<v-btn>`: Form gönderme butonu için.
    *   Form elemanlarını düzenlemek ve duyarlı hale getirmek için Vuetify grid sistemini (`<v-row>`, `<v-col>`) kullanın.
    *   Vuetify'nin varsayılan stilini tamamlamak veya özel düzenler oluşturmak için şablon içinde Tailwind CSS sınıflarını doğrudan kullanabilirsiniz.
2.  **Script:**
    *   `<script setup>` veya `<script>` kullanarak form verilerini saklayacak reaktif veri özellikleri (state) tanımlayın:
*   Vuetify'nin doğrulama kurallarını veya Vuelidate gibi bir kütüphaneyi kullanarak form doğrulamayı uygulayın.
    *   Form gönderildiğinde çalışacak bir metot (`submitForm` gibi) oluşturun:
        *   Formun geçerli olup olmadığını kontrol edin.
        *   Gerekli verileri bir obje halinde hazırlayın.
        *   Backend API'nizin müşteri kayıt endpoint'ine bir POST isteği yapın (Nuxt'ın `$fetch` veya Axios kullanarak).
        *   `isLoading` state'ini API çağrısı sırasında `true` yapın.
        *   API yanıtını işleyin:
            *   Başarılı olursa, `successMessage`'ı güncelleyin, formu temizleyin veya kullanıcıyı başka bir sayfaya yönlendirin.
            *   Hata olursa, `errorMessage`'ı güncelleyin ve kullanıcıya gösterin.
        *   API çağrısı tamamlandığında `isLoading` state'ini `false` yapın.
3.  **Stil (Styling):**
    *   Form bileşenleri için Vuetify'nin varsayılan stillerini kullanın.
    *   Şablonunuzdaki elemanlara Tailwind CSS utility sınıfları ekleyerek ek stil uygulayın (örneğin, boşluklar, metin boyutları, renkler vb.).
    *   Vuetify veya Tailwind ile kolayca yapılamayan bileşene özgü stiller için `<style scoped>` bloğunu kullanın.

## Backend Entegrasyonu (API Çağrıları)

1.  **API Uç Noktaları:**
    *   Müşteri kaydı için bir backend API endpoint'ine (örneğin, `/api/customers`'a `POST` isteği) ihtiyacınız olacak.
    *   İleride müşteri listesini göstermek veya düzenlemek için GET, PUT, DELETE endpoint'lerine de ihtiyacınız olabilir.
2.  **API Çağrıları Yapma:**
    *   Nuxt 4'ün yerleşik `$fetch` composable'ını kullanın:
3.  **Yanıtları Ele Alma:**
    *   API yanıtını kontrol edin (başarı kodu, hata kodu vb.).
    *   Başarılı yanıtlarda kullanıcıya olumlu geri bildirim verin.
    *   Hata yanıtlarında hata mesajlarını kullanıcı arayüzünde gösterin.

## Ek Özellikler (İsteğe Bağlı ama Önerilir)

*   **Yükleme Göstergeleri:** Form gönderilirken `<v-progress-circular>` veya `<v-progress-linear>` gibi Vuetify bileşenlerini kullanarak kullanıcıya işlemin devam ettiğini bildirin. `isLoading` state'ini kullanarak bu bileşenlerin görünürlüğünü kontrol edin.
*   **Hata Yönetimi:** API çağrılarındaki hataları yakalamak için `try...catch` blokları kullanın ve hata mesajlarını kullanıcıya gösterin. Form doğrulama hatalarını da açıkça belirtin.
*   **Kullanıcı Geri Bildirimi:** İşlem başarılı olduğunda veya hata oluştuğunda Vuetify `<v-snackbar>` veya `<v-dialog>` kullanarak bildirimler gösterin.
*   **Stil ve Tema:** Projenizin genel temasını Vuetify ve Tailwind CSS tema ayarlamalarıyla tutarlı hale getirin. (Bağlam [2]'deki `tailwind.config.js` içinde pastel renkler tanımlanmış.)
*   **Yönlendirme (Routing):** Başarılı kayıttan sonra kullanıcıyı başka bir sayfaya (`/customers` gibi) yönlendirmek için Nuxt'ın yönlendirme sistemini kullanın (`navigateTo`).
*   **Kimlik Doğrulama/Yetkilendirme:** Eğer panel belirli kullanıcılar tarafından kullanılacaksa, Nuxt Auth modülü gibi çözümlerle kimlik doğrulama ve yetkilendirmeyi entegre edin.

## İş Akışı

1.  Temel Nuxt projesini ve gerekli bağımlılıkları (Vuetify, Tailwind CSS) kurun.
2.  `default.vue` layout'unu düzenleyerek `AppHeader` ve `AppSideBar` bileşenlerini ekleyin.
3.  Müşteri kayıt sayfası (`app/pages/register-customer.vue`) ve form bileşeni (`app/components/CustomerRegistrationForm.vue`) için dosyaları oluşturun.
4.  `CustomerRegistrationForm.vue` içinde Vuetify bileşenlerini kullanarak formun şablonunu oluşturun.
5.  Form verilerini saklamak ve form gönderme mantığını implemente etmek için script kodunu yazın.
6.  Temel form doğrulamasını ekleyin.
7.  Backend API'nizin müşteri kayıt endpoint'ine bağlanarak API çağrısı yapma mantığını ekleyin.
8.  API yanıtlarını (başarı/hata) işleyin ve kullanıcıya geri bildirim gösterin.
9.  Vuetify ve Tailwind CSS kullanarak formun ve sayfanın stilini tamamlayın.
10. Gerekirse, hata yönetimi, yükleme göstergeleri gibi ek özellikleri ekleyin.
11. Kodunuzu gözden geçirin ve daha küçük bileşenlere ayırarak refaktör edin.
